import React from 'react';

const navLinks = [
  { label: 'HOME', hasDropdown: true },
  { label: 'ABOUT US', hasDropdown: false },
  { label: 'COURSES', hasDropdown: true },
  { label: 'EVENTS', hasDropdown: true },
  { label: 'PAGES', hasDropdown: true },
  { label: 'BLOG', hasDropdown: true },
  { label: 'CONTACT US', hasDropdown: false },
];

const Navbar = () => {
  return (
    <div className="border-b border-gray-100 bg-white px-4 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full bg-white px-6 py-3 shadow-md ring-1 ring-gray-100">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-3">
          <svg
            viewBox="0 0 48 48"
            className="h-11 w-11 shrink-0"
            aria-hidden="true"
          >
            {/* left page */}
            <path
              d="M24 12c-4-3.2-9.4-4.6-14-3.4a1.6 1.6 0 00-1.2 1.6v22.4c0 1.1 1 1.9 2.1 1.6 4.2-1.1 9-.1 13.1 3V12z"
              fill="#14b8a6"
            />
            {/* right page */}
            <path
              d="M24 12c4-3.2 9.4-4.6 14-3.4a1.6 1.6 0 011.2 1.6v22.4c0 1.1-1 1.9-2.1 1.6-4.2-1.1-9-.1-13.1 3V12z"
              fill="#f59e0b"
            />
            {/* spine highlight */}
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
        </a>

        {/* Nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium tracking-wide text-gray-800 transition hover:text-teal-500"
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
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-teal-400 hover:text-teal-500"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M21 21l-4.3-4.3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white shadow-md shadow-teal-500/30 transition hover:bg-teal-600">
            APPLY NOW
            <span aria-hidden="true">&rarr;</span>
          </button>

          <button
            aria-label="More options"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-teal-400 hover:text-teal-500 sm:flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <circle cx="5" cy="5" r="1.6" />
              <circle cx="12" cy="5" r="1.6" />
              <circle cx="19" cy="5" r="1.6" />
              <circle cx="5" cy="12" r="1.6" />
              <circle cx="12" cy="12" r="1.6" />
              <circle cx="19" cy="12" r="1.6" />
              <circle cx="5" cy="19" r="1.6" />
              <circle cx="12" cy="19" r="1.6" />
              <circle cx="19" cy="19" r="1.6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 