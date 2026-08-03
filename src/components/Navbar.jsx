// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/', hasDropdown: false },
  { label: 'ABOUT US', path: '/about', hasDropdown: false },
  { label: 'COURSES', path: '/courses', hasDropdown: false },
  { label: 'FAQ', path: '/faq', hasDropdown: false },
  { label: 'MY CLASS', path: '/my-class', hasDropdown: false },
  { label: 'HELPDESK', path: '/helpdesk', hasDropdown: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="border-b border-gray-100 bg-white px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full bg-white px-6 py-3 shadow-md ring-1 ring-gray-100">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            className="h-11 w-11 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M24 12c-4-3.2-9.4-4.6-14-3.4a1.6 1.6 0 00-1.2 1.6v22.4c0 1.1 1 1.9 2.1 1.6 4.2-1.1 9-.1 13.1 3V12z"
              fill="#14b8a6"
            />
            <path
              d="M24 12c4-3.2 9.4-4.6 14-3.4a1.6 1.6 0 011.2 1.6v22.4c0 1.1-1 1.9-2.1 1.6-4.2-1.1-9-.1-13.1 3V12z"
              fill="#f59e0b"
            />
            <path
              d="M24 12v25.2"
              stroke="#0f766e"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>
          <div className="leading-none">
            <p className="font-serif text-2xl font-bold text-gray-900">
              Escul
            </p>
            <p className="mt-1 text-[11px] tracking-wide text-gray-500">
              Online Course &amp; Edu
            </p>
          </div>
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition hover:text-teal-500 ${
                  location.pathname === link.path
                    ? 'text-teal-500'
                    : 'text-gray-800'
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5 text-gray-500"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions - Login Button */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-md shadow-teal-500/30 transition hover:bg-teal-600"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            LOGIN
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 text-gray-700 transition hover:border-teal-400 hover:text-teal-500 lg:hidden"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (50% width from right) */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel - 50% width from right */}
        <div
          className={`absolute right-0 top-0 h-full w-1/2 transform overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button inside menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Mobile Nav Links */}
          <nav className="mt-12">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between py-2 text-base font-medium transition hover:text-teal-500 ${
                      location.pathname === link.path
                        ? 'text-teal-500'
                        : 'text-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 text-gray-400"
                      >
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Login Button */}
            <Link
              to="/login"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-md shadow-teal-500/30 transition hover:bg-teal-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              LOGIN
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;