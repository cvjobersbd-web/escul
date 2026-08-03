// FAQ.jsx
import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What courses do you offer?',
    answer:
      'We offer a wide range of courses including Web Development, Data Science, UI/UX Design, Mobile App Development, Digital Marketing, and many more. All our courses are designed by industry experts to help you build practical skills.',
  },
  {
    id: 2,
    question: 'How long do I get access to a course?',
    answer:
      'Once you enroll in a course, you get lifetime access to all the course materials, including video lectures, assignments, and future updates. You can learn at your own pace, anytime and anywhere.',
  },
  {
    id: 3,
    question: 'Will I receive a certificate after completing a course?',
    answer:
      'Yes! We provide a verifiable certificate of completion for every course you finish. You can share your certificate on LinkedIn, include it in your resume, or download it for your portfolio.',
  },
  {
    id: 4,
    question: 'Are there any prerequisites for the courses?',
    answer:
      'Prerequisites vary by course. Most beginner courses require no prior experience. For advanced courses, we recommend having some basic knowledge. Each course page includes detailed information about the requirements.',
  },
  {
    id: 5,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your region. All payments are secure and encrypted.',
  },
  {
    id: 6,
    question: 'Can I get a refund if I am not satisfied?',
    answer:
      'Absolutely! We offer a 30-day money-back guarantee. If you are not completely satisfied with your course, you can request a full refund within 30 days of purchase, no questions asked.',
  },
  {
    id: 7,
    question: 'Do you offer group or corporate discounts?',
    answer:
      'Yes, we provide special pricing for groups and corporate teams. For bulk enrollments, please contact our sales team at sales@escul.com and we will be happy to provide you with a customized quote.',
  },
  {
    id: 8,
    question: 'How do I contact an instructor?',
    answer:
      'You can contact your instructor through the course dashboard. All our instructors are available to answer questions, provide guidance, and help you overcome any challenges you may face during the course.',
  },
];

const FAQItem = ({ item, isOpen, toggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={() => toggle(item.id)}
      className="flex w-full items-center justify-between py-5 text-left transition hover:text-teal-500"
    >
      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
        {item.question}
      </h3>
      <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition ${isOpen ? 'rotate-180 bg-teal-500 text-white' : ''}`}>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {/* FAQ Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-600">
              Got Questions?
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-teal-500">Questions</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
              Find answers to the most common questions about our courses,
              enrollment process, certificates, and more.
            </p>
          </div>

          {/* FAQ List */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-4 sm:px-8 shadow-sm">
            {FAQ_ITEMS.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                toggle={toggle}
              />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 p-8 text-center sm:p-12">
            <div className="mx-auto max-w-2xl">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Still have questions?</h3>
              <p className="mt-2 text-gray-500">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30"
              >
                Contact Us
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;