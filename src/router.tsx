import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { PageRoute } from './types';

interface RouterContextType {
  currentPath: PageRoute;
  searchParams: URLSearchParams;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  searchParams: new URLSearchParams(),
  navigate: () => {},
});

function normalizePath(rawPath: string): PageRoute {
  // Strip trailing slashes unless root
  let path = rawPath.trim();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (path === '' || path === '/' || path === '/index.html') {
    return '/';
  }
  if (path === '/projects') return '/projects';
  if (path.startsWith('/projects/')) return path;
  if (path === '/about') return '/about';
  if (path === '/services') return '/services';
  if (path === '/products') return '/products';
  if (path === '/contact') return '/contact';
  if (path === '/policies') return '/policies';
  if (path === '/terms') return '/terms';
  if (path === '/privacy') return '/privacy';

  // Fallback check if path ends with standard page names (handles subfolder / base path deployments like gh-pages /repo/about)
  if (path.endsWith('/projects')) return '/projects';
  if (path.includes('/projects/')) {
    const idx = path.indexOf('/projects/');
    return path.slice(idx);
  }
  if (path.endsWith('/about')) return '/about';
  if (path.endsWith('/services')) return '/services';
  if (path.endsWith('/products')) return '/products';
  if (path.endsWith('/contact')) return '/contact';
  if (path.endsWith('/policies')) return '/policies';
  if (path.endsWith('/terms')) return '/terms';
  if (path.endsWith('/privacy')) return '/privacy';

  return '/';
}

function parseCurrentRoute(): { path: PageRoute; search: URLSearchParams } {
  // Check hash first for GitHub Pages compatibility (e.g., #/services or #services)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    const [hashPath, hashQuery] = hash.slice(1).split('?');
    return {
      path: normalizePath(hashPath),
      search: new URLSearchParams(hashQuery || '')
    };
  }

  // Check query parameter redirect (e.g., ?p=/services)
  const search = new URLSearchParams(window.location.search);
  const redirectParam = search.get('p');
  if (redirectParam) {
    search.delete('p');
    return {
      path: normalizePath(redirectParam),
      search
    };
  }

  return {
    path: normalizePath(window.location.pathname),
    search
  };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [routeInfo, setRouteInfo] = useState(parseCurrentRoute);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handleLocationChange = () => {
      startTransition(() => {
        setRouteInfo(parseCurrentRoute());
      });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    // If external link, let browser handle it
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    const [targetPath, queryString] = to.split('?');
    const normalized = normalizePath(targetPath);
    const searchString = queryString ? `?${queryString}` : '';

    // Update history
    if (window.location.hash.startsWith('#/')) {
      window.location.hash = `#${normalized}${searchString}`;
    } else {
      window.history.pushState({}, '', `${normalized}${searchString}`);
    }

    startTransition(() => {
      setRouteInfo({
        path: normalized,
        search: new URLSearchParams(searchString)
      });
    });

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath: routeInfo.path,
        searchParams: routeInfo.search,
        navigate
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
  children: React.ReactNode;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  to,
  className = '',
  activeClassName = '',
  children,
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const targetNormalized = normalizePath(to.split('?')[0]);
  const isActive = currentPath === targetNormalized;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
