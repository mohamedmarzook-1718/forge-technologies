/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './router';
import { ThemeProvider } from './theme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { getProjectById } from './data/projects';

const PageContent: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    // Dynamic page title & meta synchronization for search engines and social scrapers
    let title = 'Forge Technologies — Custom Web, Mobile & AI Solutions';
    let description = 'Forge Technologies builds high-craft web apps, mobile solutions, custom software, and AI automation for startups and retail businesses.';

    if (currentPath === '/projects') {
      title = 'Case Studies & Deliverables — Forge Technologies';
      description = 'Explore verified production deliverables, learning LMS platforms, and real-time computer vision architectures by Forge Technologies.';
    } else if (currentPath.startsWith('/projects/')) {
      const pid = currentPath.replace('/projects/', '');
      const proj = getProjectById(pid);
      if (proj) {
        title = `${proj.title} — Case Study | Forge Technologies`;
        description = proj.summary || `${proj.title} project overview and architecture by Forge Technologies.`;
      } else {
        title = 'Project Case Study — Forge Technologies';
      }
    } else {
      switch (currentPath) {
        case '/about':
          title = 'About Studio & Engineering Standards — Forge Technologies';
          description = 'Learn about Forge Technologies: modern software engineering, sovereign code delivery, and transparent agile execution.';
          break;
        case '/services':
          title = 'Services & Digital Solutions — Forge Technologies';
          description = 'Full-stack web applications, mobile apps, enterprise Java software, applied AI automation, and brand design systems.';
          break;
        case '/products':
          title = 'Software Products & AI Tools — Forge Technologies';
          description = 'Internal software prototypes, developer toolkits, and computer vision systems built by the Forge Technologies software lab.';
          break;
        case '/contact':
          title = 'Contact & Project Inquiries — Forge Technologies';
          description = 'Discuss your project with Forge Technologies. Rapid response, transparent milestone pricing, and tailored engineering consultations.';
          break;
        case '/policies':
        case '/terms':
          title = 'Client Policies & Terms of Service — Forge Technologies';
          description = 'Official client agreements, warranty standards, IP assignment policies, and service terms for Forge Technologies engagements.';
          break;
        case '/privacy':
          title = 'Privacy Policy — Forge Technologies';
          description = 'Privacy policy and data protection practices for visitors and clients of Forge Technologies.';
          break;
        case '/':
        default:
          title = 'Forge Technologies — Custom Web, Mobile & AI Solutions';
          description = 'Forge Technologies builds high-craft web apps, mobile solutions, custom software, and AI automation for startups and retail businesses. Get a tailored quote.';
          break;
      }
    }

    document.title = title;

    // Sync meta tags
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const currentUrl = `https://forgetechnologies.vercel.app${currentPath === '/' ? '' : currentPath}`;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', currentUrl);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);
  }, [currentPath]);

  const renderCurrentPage = () => {
    if (currentPath === '/projects') {
      return <ProjectsPage />;
    }
    if (currentPath.startsWith('/projects/')) {
      const pid = currentPath.replace('/projects/', '');
      return <CaseStudyPage projectId={pid} />;
    }

    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/products':
        return <ProductsPage />;
      case '/contact':
        return <ContactPage />;
      case '/policies':
      case '/terms':
      case '/privacy':
        return <PoliciesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#070B12] text-slate-900 dark:text-slate-200 selection:bg-sky-100 selection:text-sky-900">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-md shadow-md"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <PageContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
