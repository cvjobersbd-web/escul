import React from 'react';

const quickLinks = [
  'About Us',
  'Contact Us',
  'Courses',
  'Dashboard',
  'Escul My account',
  'Escul Shop',
  'Student Registration',
];

const resourceLinks = [
  'Events',
  'Courses',
  'Dashboard',
  'FAQ',
  'Instructor Registration',
  'Pricing Plan',
  'Teams & Conditions',
];

const socialIcons = [
  {
    label: 'Facebook',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z',
  },
  {
    label: 'X',
    path: 'M18.9 2H22l-7.4 8.46L23.3 22h-6.86l-5.37-6.98L4.9 22H1.8l7.9-9.03L1 2h7.03l4.86 6.42L18.9 2zm-1.2 18h1.7L7.4 3.9H5.58L17.7 20z',
  },
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5.02 2.5 2.5 0 01.02-5.02zM3 9h4v12H3V9zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-4V9z',
  },
  {
    label: 'YouTube',
    path: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z',
  },
  {
    label: 'Instagram',
    path: 'M12 2c-2.72 0-3.06.01-4.13.06-1.07.05-1.8.22-2.44.47a4.9 4.9 0 00-1.77 1.15A4.9 4.9 0 002.5 5.45c-.25.64-.42 1.37-.47 2.44C1.98 8.96 1.97 9.3 1.97 12s.01 3.04.06 4.11c.05 1.07.22 1.8.47 2.44.26.66.6 1.22 1.15 1.77.55.55 1.11.9 1.77 1.15.64.25 1.37.42 2.44.47C7.94 22 8.28 22 11 22h1c2.72 0 3.06-.01 4.13-.06 1.07-.05 1.8-.22 2.44-.47a4.9 4.9 0 001.77-1.15 4.9 4.9 0 001.15-1.77c.25-.64.42-1.37.47-2.44.05-1.07.06-1.41.06-4.11s-.01-3.04-.06-4.11c-.05-1.07-.22-1.8-.47-2.44a4.9 4.9 0 00-1.15-1.77A4.9 4.9 0 0018.57 2.53c-.64-.25-1.37-.42-2.44-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 01-1.15-.75 3.1 3.1 0 01-.75-1.15c-.14-.36-.3-.88-.34-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8zm0 3.05a5.15 5.15 0 100 10.3 5.15 5.15 0 000-10.3zm0 8.5a3.35 3.35 0 110-6.7 3.35 3.35 0 010 6.7zm6.56-8.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z',
  },
];

const LinkRow = ({ label }) => (
  <li>
    <a
      href="#"
      className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-teal-500"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <a href="/" className="flex items-center gap-3">
              <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" aria-hidden="true">
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
                <p className="font-serif text-2xl font-bold text-gray-900">Escul</p>
                <p className="mt-1 text-[11px] tracking-wide text-gray-500">
                  Online Course &amp; Edu
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
              University education is the foundation for shaping skilled, knowledgeable.
            </p>

            <h6 className="mt-8 text-sm font-bold text-gray-900">Take Your Learning with You</h6>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-white shadow-md shadow-teal-500/30 transition hover:bg-teal-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.55C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.08-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px]">Download On The</span>
                  <span className="block text-sm font-bold">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4l.1.1L13.9 12 3.7 2.2l-.1.1zM17 15.5l-3.1-3.1V11.6l3.1-3.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3L17 15.5zm-13.3 5.6L13.9 12l-2.2-2.2L3.7 20.7v.4zm10.2-9.1l2.2-2.2L3.7 3.4v.4l10.2 8.2z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px]">Get It On</span>
                  <span className="block text-sm font-bold">Play Store</span>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-bold text-gray-900">Quick Links</h6>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((label) => (
                <LinkRow key={label} label={label} />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-lg font-bold text-gray-900">Resources</h6>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((label) => (
                <LinkRow key={label} label={label} />
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h6 className="text-lg font-bold text-gray-900">Get In Touch</h6>

            <p className="mt-5 text-sm text-gray-500">Toll Free Customer Care</p>
            <p className="mt-1 text-lg font-bold text-gray-900">+01 234 567 890</p>

            <p className="mt-5 text-sm text-gray-500">Need live support?</p>
            <p className="mt-1 text-lg font-bold text-gray-900">mailinfo@escul.com</p>

            <h6 className="mt-6 text-sm font-bold text-gray-900">Follow with Us:</h6>
            <div className="mt-3 flex gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-teal-500 hover:bg-teal-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 sm:flex-row">
          <p>Copyright © 2026 Escul, All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="transition hover:text-teal-500">
              Terms of service
            </a>
            <span>—</span>
            <a href="#" className="transition hover:text-teal-500">
              Privacy policy
            </a>
            <span>—</span>
            <a href="#" className="transition hover:text-teal-500">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;