// Helpdesk.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Helpdesk = () => {
  return (
    <>
      {/* Helpdesk Hero Section - Coming Soon */}
      <section
        className="relative overflow-hidden py-16 md:py-20 lg:py-24"
        style={{
          background:
            'linear-gradient(135deg, #d6ecf3 0%, #eef4ec 45%, #eef0da 75%, #e9edda 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute -left-16 -bottom-20 h-56 w-56 rounded-full opacity-70 blur-2xl"
          style={{ backgroundColor: '#dff0ea' }}
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-50 blur-2xl"
          style={{ backgroundColor: '#c5e8d9' }}
        />

        {/* Decorative floating elements */}
        <div className="absolute top-10 left-10 animate-bounce opacity-20">
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-150 opacity-20">
          <svg viewBox="0 0 24 24" className="h-10 w-10 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="mb-4 sm:mb-6 inline-block rounded-full bg-teal-500/20 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 border border-teal-500/30">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700">
              🚀 Coming Soon
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Help Desk Is
            <br />
            <span className="text-teal-500">Under Development</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We're building a comprehensive help desk system to serve you better.
            Coming soon with live chat, ticket tracking, and instant support!
          </p>

          {/* Progress Bar */}
          <div className="mt-6 sm:mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-xs sm:text-sm text-slate-600 mb-2">
              <span>Development Progress</span>
              <span>70%</span>
            </div>
            <div className="h-2.5 sm:h-3 w-full overflow-hidden rounded-full bg-white/50">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-500 transition-all duration-1000"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-white transition hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 sm:h-5 sm:w-5">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base font-bold text-slate-700 border border-slate-200 transition hover:bg-white hover:shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4 sm:h-5 sm:w-5">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Visit FAQ
            </Link>
          </div>

          {/* Features coming soon */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { icon: '💬', title: 'Live Chat', desc: 'Real-time support with agents' },
              { icon: '🎫', title: 'Ticket System', desc: 'Track your support tickets' },
              { icon: '📱', title: 'Mobile Support', desc: 'Help on the go' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white/60 backdrop-blur-sm p-4 sm:p-5 text-center border border-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl sm:text-4xl mb-2">{feature.icon}</div>
                <h4 className="text-sm sm:text-base font-semibold text-slate-900">{feature.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Preview Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
              Preview
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
              What's <span className="text-teal-500">Coming</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Here's a sneak peek of our upcoming help desk features
            </p>
          </div>

          {/* Preview Cards with Blur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Help Categories Preview */}
            <div className="relative rounded-2xl border border-gray-200 p-4 sm:p-6 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Help Categories</h3>
              </div>
              <div className="space-y-3">
                {['Account & Security', 'Course Support', 'Technical Issues', 'Certificates & Payments'].map((cat) => (
                  <div key={cat} className="flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-100">
                    <div className="h-3 w-3 rounded-full bg-teal-400"></div>
                    <span className="text-sm text-slate-600">{cat}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
                <span className="rounded-full bg-teal-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-500/30">
                  🔜 Coming Soon
                </span>
              </div>
            </div>

            {/* Ticket Form Preview */}
            <div className="relative rounded-2xl border border-gray-200 p-4 sm:p-6 bg-gray-50/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Support Ticket</h3>
              </div>
              <div className="space-y-3">
                <div className="h-10 rounded-lg bg-white border border-gray-200"></div>
                <div className="h-10 rounded-lg bg-white border border-gray-200"></div>
                <div className="h-20 rounded-lg bg-white border border-gray-200"></div>
                <div className="h-10 rounded-lg bg-teal-400/30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
                <span className="rounded-full bg-purple-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-purple-500/30">
                  🔜 Coming Soon
                </span>
              </div>
            </div>

            {/* Live Chat Preview */}
            <div className="relative rounded-2xl border border-gray-200 p-4 sm:p-6 bg-gray-50/50 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Live Chat Support</h3>
                <span className="ml-auto rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Coming Soon</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div className="flex-1">
                  <div className="h-2 w-32 rounded-full bg-gray-200 mb-2"></div>
                  <div className="h-2 w-48 rounded-full bg-gray-200"></div>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
                <span className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                  🔜 Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-teal-100">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4l2 2" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Want to be notified?</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Get notified when our help desk goes live with all the features.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 sm:py-3 text-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
              <button className="rounded-full bg-teal-500 px-6 py-2.5 sm:py-3 text-sm font-bold text-white transition hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30 whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">We'll never spam you. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Helpdesk;