// CourseDetails.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourseById } from '../data/coursesData';

const LEARN_POINTS = [
  'Artificial Intelligence and Machine learning',
  'AI-based tutoring platforms can connect students',
  'Detecting suspicious behavior',
  'AI algorithms can analyze students\u2019 academic',
  'Algorithms can identify students',
  'A reputable AI technology provider',
  'Automatically grade assignments',
];

const MATERIAL_INCLUDES = [
  'This course comes with comprehensive learning materials, including downloadable resources, video lectures, practical assignments, quizzes, templates, and step-by-step guides to support your learning journey. All materials are accessible anytime, allowing you to study at your own pace.',
];

const REQUIREMENTS = [
  'No prior experience is necessary \u2014 just a willingness to learn and explore. A computer or mobile device with internet access is required. Basic knowledge of the subject is helpful but not mandatory. Please review all course materials and follow the lessons in order for the best learning experience. Completing assignments and participating in discussions will enhance your understanding.',
];

const AUDIENCE_TEXT =
  'This course is ideal for beginners and enthusiasts who are eager to gain practical skills and real-world knowledge. Whether you\u2019re a student, a career switcher, or someone looking to sharpen your expertise, this course is designed to help you succeed. It also suits professionals seeking to update their skills, freelancers wanting to expand services, or hobbyists passionate about learning something new at their own pace.';

const TABS = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    id: 'curriculum',
    label: 'Curriculum',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    id: 'instructor',
    label: 'Instructor',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-3.87 3.58-7 8-7s8 3.13 8 7" />
      </svg>
    ),
  },
  {
    id: 'reviews',
    label: 'Reviews',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
      </svg>
    ),
  },
];

const StarRating = ({ rating = 0 }) => (
  <div className="flex items-center gap-1 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${i < rating ? 'fill-current' : 'fill-none stroke-current'}`}
        strokeWidth="1.5"
      >
        <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
      </svg>
    ))}
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 py-3">
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-500">
      {icon}
    </span>
    <span className="whitespace-nowrap text-sm text-slate-600">{label}</span>
    <span className="h-px flex-1 border-t border-dashed border-gray-300" />
    <span className="whitespace-nowrap text-sm font-bold text-slate-900">{value}</span>
  </div>
);

const CourseDetails = () => {
  const { id } = useParams();
  const course = getCourseById(id);
  const [activeTab, setActiveTab] = useState('overview');

  if (!course) {
    return (
      <section className="bg-white py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Course not found</h2>
        <p className="mt-2 text-gray-500">The course you're looking for doesn't exist.</p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600"
        >
          Browse Courses
        </Link>
      </section>
    );
  }

  const extraCategoryCount = Math.max(course.categories.length - 1, 0);

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:px-12 lg:grid-cols-[2fr_1fr] lg:px-20">
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div>
          {/* Banner + title card */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <img
              src={course.image}
              alt={course.title}
              className="h-56 w-full object-cover sm:h-72 md:h-80"
            />

            <div className="px-6 py-6 sm:px-8">
              <h1 className="text-2xl font-extrabold leading-snug text-slate-900 md:text-3xl">
                {course.title}
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <StarRating rating={course.rating} />
                <span className="text-sm text-gray-400">({course.ratingCount})</span>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-3">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-slate-800">{course.instructor}</span>
                </div>

                <div className="hidden h-9 w-px bg-gray-200 sm:block" />

                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M20.59 13.41L11 3.83A2 2 0 009.59 3.24L4 3a1 1 0 00-1 1l.24 5.59a2 2 0 00.58 1.41l9.59 9.59a2 2 0 002.83 0l4.35-4.35a2 2 0 000-2.83z" />
                    <circle cx="7.5" cy="7.5" r="1.2" />
                  </svg>
                  <div className="leading-tight">
                    <p className="text-xs text-slate-500">Category</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {course.categories[0]}
                      {extraCategoryCount > 0 && ` +${extraCategoryCount}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex overflow-x-auto border-b border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex shrink-0 items-center gap-2 border-b-2 px-5 py-4 text-sm font-semibold transition sm:px-7 ${
                    activeTab === tab.id
                      ? 'border-teal-500 text-teal-500'
                      : 'border-transparent text-slate-500 hover:text-teal-500'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="px-6 py-8 sm:px-8">
              {activeTab === 'overview' && (
                <>
                  <h2 className="text-xl font-extrabold text-slate-900">About This Course</h2>
                  <p className="mt-4 leading-relaxed text-gray-500">
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which don't look even slightly believable. If you are
                    going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-500">
                    All the Lorem Ipsum generators on the internet tend to repeat predefined
                    chunks as necessary, making this the first true generator on the internet.
                    It uses a dictionary of over 200 Latin words.
                  </p>

                  <h2 className="mt-10 text-xl font-extrabold text-slate-900">What Will You Learn?</h2>
                  <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {LEARN_POINTS.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        <span className="text-sm text-teal-600 underline-offset-2 hover:underline">{point}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="mt-10 text-xl font-extrabold text-slate-900">Material Includes</h2>
                  <ul className="mt-4 space-y-2">
                    {MATERIAL_INCLUDES.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-500">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h2 className="mt-10 text-xl font-extrabold text-slate-900">Requirements</h2>
                  <ul className="mt-4 space-y-2">
                    {REQUIREMENTS.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-gray-500">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h2 className="mt-10 text-xl font-extrabold text-slate-900">Audience</h2>
                  <p className="mt-4 leading-relaxed text-gray-500">{AUDIENCE_TEXT}</p>
                </>
              )}

              {activeTab === 'curriculum' && (
                <div className="rounded-xl border border-dashed border-gray-200 py-16 text-center text-gray-400">
                  Curriculum content coming soon.
                </div>
              )}

              {activeTab === 'instructor' && (
                <div className="flex items-center gap-4">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{course.instructor}</h3>
                    <p className="mt-1 text-sm text-gray-500">Course Instructor</p>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="rounded-xl border border-dashed border-gray-200 py-16 text-center text-gray-400">
                  No reviews yet. Be the first to review this course!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT SIDEBAR ---------------- */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            {/* Video preview */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-900">
              <img src={course.image} alt={course.title} className="h-full w-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

              <div className="absolute left-3 top-3 flex items-center gap-1.5 text-white">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xs font-semibold">tutor.us</span>
              </div>

              <button
                type="button"
                aria-label="Play preview"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-teal-600 shadow-lg transition hover:bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-teal-300">Tutor Tips</p>
                <p className="text-sm font-bold">Memberships</p>
              </div>
            </div>

            <div className="px-6 py-6">
              <p className="text-2xl font-extrabold text-slate-900">${course.price}</p>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600 hover:shadow-xl"
              >
                Buy Now
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              <h3 className="mt-7 text-lg font-extrabold text-slate-900">Course Information</h3>
              <div className="mt-1 divide-y divide-gray-100">
                <InfoRow
                  label="Course level:"
                  value={course.level}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12l9-6 9 6-9 6-9-6z" />
                      <path d="M3 12v6l9 6 9-6v-6" />
                    </svg>
                  }
                />
                <InfoRow
                  label="Lesson:"
                  value={course.lessons}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1Z" />
                      <path d="M9 9h6M9 12.5h6M9 16h4" />
                    </svg>
                  }
                />
                <InfoRow
                  label="Duration:"
                  value={course.duration}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.5 2" />
                    </svg>
                  }
                />
                <InfoRow
                  label="Students:"
                  value={course.students}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="8" r="3" />
                      <path d="M2 20c0-3.31 3.13-6 7-6s7 2.69 7 6" />
                      <circle cx="17" cy="8" r="2.5" />
                      <path d="M23 20c0-2.76-2.24-5-5-5" />
                    </svg>
                  }
                />
                <InfoRow
                  label="Last Updated:"
                  value={course.lastUpdated}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  }
                />
                <InfoRow
                  label="Quizze:"
                  value={course.quizzes}
                  icon={
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9.5a2.5 2.5 0 114 2c-.6.6-1.5 1-1.5 2" />
                      <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
                    </svg>
                  }
                />
              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-600"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 106-8.49" />
                  <path d="M3 4v5h5" />
                </svg>
                30-Day Money-Back Guarantee
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;