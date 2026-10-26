import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Settings2,
  ChevronDown,
  Sun,
  Moon,
  Monitor,
} from 'lucide-react';
import { Link, useRouter } from '../router';
import { useTheme, ThemeMode } from '../theme';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const { mode, setMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Policies', path: '/policies' },
  ];

  const themeOptions: {
    value: ThemeMode;
    label: string;
    icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  // Close dropdown on click outside or escape key
  useEffect(() => {
    if (!settingsOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [settingsOpen]);

  // Close menus on route change
  useEffect(() => {
    setSettingsOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  const themeButtonClass = (isSelected: boolean) =>
    `flex flex-col items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-[11px] font-semibold transition-colors ${
      isSelected
        ? 'bg-sky-50 border-sky-400 text-sky-900 dark:bg-sky-950 dark:border-sky-600 dark:text-sky-200 shadow-xs ring-1 ring-sky-300'
        : 'bg-white border-slate-300 text-slate-800 hover:text-slate-950 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#070B12]/90 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Logo & Typography Lockup */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md py-1"
            aria-label="Forge Technologies Home"
          >
            <img
              src="/assets/aistudio/forge_emblem_clean_d3ebd5b8.svg"
              alt="Forge Technologies Emblem"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-heading font-black tracking-[0.16em] text-slate-900 dark:text-white text-base sm:text-lg uppercase">
                FORGE
              </span>
              <span className="font-mono-code font-semibold tracking-[0.32em] text-slate-600 dark:text-slate-400 text-[9px] sm:text-[10px] uppercase mt-0.5">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-semibold"
          >
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === '/projects' && currentPath.startsWith('/projects')) ||
                (link.path === '/policies' && (currentPath === '/terms' || currentPath === '/privacy'));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#101828] dark:text-white font-bold'
                      : 'hover:text-[#101828] dark:hover:text-white text-[#344054] dark:text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-sky-600 dark:bg-sky-400 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Settings Menu & Primary Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Appearance Settings Popover */}
            <div ref={settingsRef} className="relative">
              <button
                type="button"
                onClick={() => setSettingsOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs"
                aria-expanded={settingsOpen}
                aria-haspopup="true"
                aria-controls="appearance-settings"
              >
                <Settings2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" aria-hidden="true" />
                <span>Settings</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${settingsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {settingsOpen && (
                <div
                  id="appearance-settings"
                  className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-1 pb-2.5">
                    <p className="font-mono-code text-[10px] uppercase tracking-wider text-slate-700 dark:text-slate-400 font-bold">
                      Appearance
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                      Choose how Forge looks on this device.
                    </p>
                  </div>

                  <div role="radiogroup" aria-label="Theme preference" className="grid grid-cols-3 gap-1.5">
                    {themeOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = mode === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setMode(option.value)}
                          className={themeButtonClass(isSelected)}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span>{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="relative group inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#101828] hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-md transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
            >
              <span>Discuss a project</span>
              <ArrowUpRight
                className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070B12] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path === '/projects' && currentPath.startsWith('/projects')) ||
                (link.path === '/policies' && (currentPath === '/terms' || currentPath === '/privacy'));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                currentPath === '/contact'
                  ? 'bg-sky-50 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              Contact & Inquiries
            </Link>
          </nav>

          {/* Mobile Appearance Selector */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 px-1 font-mono-code text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              <Settings2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Appearance</span>
            </div>
            <div role="radiogroup" aria-label="Theme preference" className="grid grid-cols-3 gap-2">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = mode === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setMode(option.value)}
                    className={themeButtonClass(isSelected)}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#101828] hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-md transition-colors shadow-xs"
            >
              <span>Discuss a project</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
