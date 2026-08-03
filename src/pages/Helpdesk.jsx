// Helpdesk.jsx
import React, { useState } from 'react';

const HELP_CATEGORIES = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Account & Security',
    description: 'Manage your account settings, password, and security preferences.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Course Support',
    description: 'Get help with course content, assignments, and learning materials.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8" />
        <path d="M8 12h6" />
        <path d="M8 16h4" />
      </svg>
    ),
    title: 'Technical Issues',
    description: 'Report technical problems, bugs, or platform-related issues.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Certificates & Payments',
    description: 'Questions about certificates, invoices, and payment processing.',
    color: 'from-purple-500 to-purple-600',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to the login page and click on "Forgot Password". Enter your registered email address and we will send you a password reset link.'
  },
  {
    question: 'How do I access my purchased courses?',
    answer: 'After logging in, go to "My Class" section in the navigation menu. All your enrolled courses will be listed there.'
  },
  {
    question: 'How do I contact my instructor?',
    answer: 'Each course has a discussion forum where you can post questions. You can also message your instructor directly from the course dashboard.'
  },
  {
    question: 'What should I do if a video is not playing?',
    answer: 'Try refreshing the page or clearing your browser cache. If the issue persists, please contact our technical support team.'
  },
];

const Helpdesk = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // Handle ticket submission here
    alert('Your ticket has been submitted! Our team will get back to you within 24 hours.');
    setTicketSubject('');
    setTicketMessage('');
    setSelectedCategory(null);
  };

  return (
    <>
      {/* Helpdesk Hero Section */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
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

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
          <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
            Need Help?
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
            Help <span className="text-teal-500">Desk</span>
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
            Get the support you need. Browse our help categories, check the FAQs, or submit a support ticket.
          </p>
        </div>
      </section>

      {/* Help Categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              How Can We <span className="text-teal-500">Help You</span>?
            </h2>
            <p className="mt-3 text-gray-500">Choose a category below to get started</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HELP_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`group rounded-2xl border border-gray-200 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  selectedCategory?.id === category.id
                    ? 'border-teal-500 shadow-lg ring-2 ring-teal-500/20'
                    : 'hover:border-teal-300'
                }`}
              >
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                <span className="mt-3 inline-flex items-center text-sm font-semibold text-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn More →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
              Quick Answers
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition duration-300 ${activeFaq === index ? 'rotate-180 bg-teal-500 text-white' : ''}`}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Still have questions?{' '}
              <button
                onClick={() => setSelectedCategory(HELP_CATEGORIES[0])}
                className="font-semibold text-teal-500 hover:underline"
              >
                Submit a ticket
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
              Submit a <span className="text-teal-500">Support Ticket</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Our team will respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmitTicket} className="space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {/* Category Selection */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {HELP_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-xl border-2 p-3 text-center transition ${
                      selectedCategory?.id === category.id
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <div className={`mx-auto mb-1 inline-flex rounded-lg bg-gradient-to-br ${category.color} p-2 text-white`}>
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-slate-700">{category.title.split('&')[0].trim()}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={ticketSubject}
                onChange={(e) => setTicketSubject(e.target.value)}
                placeholder="Briefly describe your issue"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                value={ticketMessage}
                onChange={(e) => setTicketMessage(e.target.value)}
                placeholder="Please provide as much detail as possible..."
                rows="5"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600 hover:shadow-xl"
            >
              Submit Ticket
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <p className="text-center text-xs text-gray-400">
              By submitting a ticket, you agree to our{' '}
              <a href="#" className="text-teal-500 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Helpdesk;