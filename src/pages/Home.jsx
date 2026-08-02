import React, { useRef, useState } from 'react';

const Home = () => {
  return (
    <>
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-white via-emerald-50 to-emerald-100">
      {/* diagonal light-ray background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 2px, transparent 2px, transparent 70px)',
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 sm:gap-16 sm:py-24 lg:flex-row lg:py-32">
        {/* Left column: copy */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-3 text-lg font-medium text-teal-500">
            Learn Smart. Learn Digital.
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Unlock Your
            <br />
            Digital Education in
            <br />
            <span className="text-orange-500">Online Learning</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-gray-500 lg:mx-0">
            Education can be thought of as the transmission of the values and
            accumulated knowledge of a society.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600">
            GET STARTED
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Right column: image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]">
            {/* soft outer ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-100" />
            {/* solid teal circle */}
            <div className="absolute inset-6 rounded-full bg-teal-400" />
            {/* student photo */}
            <img
              src="https://i.ibb.co.com/xKbJWSTx/hero-thumb3-1.png"
              alt="Smiling student holding books"
              className="relative h-[92%] w-[92%] object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>

    <CoursesSection />
    <PopularCourses />
    <AboutSection />
    <StatsSection />
    <TeachersSection />
    <ProcessSection />
    <CtaSection />
    <WhyChooseSection />
    </>
  );
};

const CATEGORIES = [
  {
    title: 'Business\nManagement',
    from: 'from-emerald-400',
    to: 'to-teal-600',
    icon: (
      // briefcase
      <>
        <rect x="3.5" y="8" width="17" height="11" rx="2" />
        <path d="M8 8V6.5A1.5 1.5 0 0 1 9.5 5h5A1.5 1.5 0 0 1 16 6.5V8" />
        <path d="M3.5 13h17" />
      </>
    ),
  },
  {
    title: 'Website\nDevelopment',
    from: 'from-violet-400',
    to: 'to-indigo-600',
    icon: (
      // browser window with code
      <>
        <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
        <path d="M3.5 8.5h17" />
        <path d="M6.25 6.5h.01M8.75 6.5h.01" />
        <path d="M9.5 12.5 7.5 14.5l2 2" />
        <path d="M14.5 12.5l2 2-2 2" />
      </>
    ),
  },
  {
    title: 'UI/UX\nDesign',
    from: 'from-pink-400',
    to: 'to-rose-600',
    icon: (
      // monitor with pen
      <>
        <rect x="3.5" y="4.5" width="12" height="9" rx="1.5" />
        <path d="M7 17.5h5" />
        <path d="M9.5 13.5v4" />
        <path d="m15.5 10 4.5-4.5 1.5 1.5-4.5 4.5-2 .5.5-2Z" />
      </>
    ),
  },
  {
    title: 'Digital\nMarketing',
    from: 'from-sky-300',
    to: 'to-sky-500',
    icon: (
      // megaphone
      <>
        <path d="M3.5 9.5v5h3.2l6.3 3.5v-12l-6.3 3.5H3.5Z" />
        <path d="M15.5 8.2a4 4 0 0 1 0 7.6" />
        <path d="M17.8 5.8a7.5 7.5 0 0 1 0 12.4" />
      </>
    ),
  },
  {
    title: 'Practical\nLearning',
    from: 'from-amber-300',
    to: 'to-orange-500',
    icon: (
      // ABC blocks
      <>
        <rect x="3.5" y="4.5" width="6" height="6" rx="1" />
        <rect x="10.5" y="4.5" width="6" height="6" rx="1" />
        <rect x="7" y="11.5" width="6" height="6" rx="1" />
        <text x="6.5" y="9" fontSize="4.2" fontWeight="700" fill="currentColor" stroke="none">A</text>
        <text x="13.4" y="9" fontSize="4.2" fontWeight="700" fill="currentColor" stroke="none">B</text>
        <text x="10" y="16" fontSize="4.2" fontWeight="700" fill="currentColor" stroke="none">C</text>
      </>
    ),
  },
];

const CoursesSection = () => {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]');
    const step = card ? card.offsetWidth + 24 : 300;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-start justify-between gap-6">
          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 60 70"
              className="absolute -left-2 -top-11 h-16 w-16 text-teal-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 4c10 4 20 14 16 34-6-6-14-8-20-6 10 4 16 12 16 24" />
              <path d="M10 46c-2 6-3 10-2 14" />
            </svg>
            <h2 className="relative text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Browse Top Essential Digital
              <br />
              Education Courses
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous courses"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white transition hover:bg-teal-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next courses"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-white transition hover:bg-teal-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="grid grid-cols-1 gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5 [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              data-card
              className={`group relative flex h-[330px] flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br ${cat.from} ${cat.to} p-7 shadow-xl shadow-black/5 transition-transform hover:-translate-y-1`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {cat.icon}
                </svg>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold leading-snug text-white">
                  {cat.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <button
                  type="button"
                  aria-label={`Explore ${cat.title.replace('\n', ' ')} courses`}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 transition group-hover:translate-x-1"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const POPULAR_COURSES = [
  {
    image: 'https://i.ibb.co.com/zTLFFjCs/English-grammar-courses-online-with-real-certificates.jpg',
    title: 'English Grammar Courses Online with Real Certificates',
    lessons: '7 Lesson',
    duration: '35h10m',
    price: '25.00',
  },
  {
    image: 'https://i.ibb.co.com/C56wy20s/Basic-Word-Press-theme-development-full-course.jpg',
    title: 'Basic WordPress Theme Development Full Course',
    lessons: '7 Lesson',
    duration: '48h40m',
    price: '35.00',
  },
  {
    image: 'https://i.ibb.co.com/rGg8RmrT/Complete-React-Front-end-developer-course.jpg',
    title: 'Complete React Front-end Developer Course',
    lessons: '7 Lesson',
    duration: '55h30m',
    price: '55.00',
  },
  {
    image: 'https://i.ibb.co.com/k280nfcM/Complete-Web-Design.jpg',
    title: 'Complete Web Design: from Figma to Webflow',
    lessons: '7 Lesson',
    duration: '65h50m',
    price: '45.00',
  },
  {
    image: 'https://i.ibb.co.com/cXMrB7mb/Flutter-Development-Bootcamp-with-Dart.jpg',
    title: 'Flutter Development Bootcamp with Dart',
    lessons: '7 Lesson',
    duration: '40h20m',
    price: '60.00',
  },
  {
    image: 'https://i.ibb.co.com/Q32x6mD3/The-Ultimate-Figma-Course-From-Zero-to-Expert.jpg',
    title: 'The Ultimate Figma Course From Zero to Expert',
    lessons: '7 Lesson',
    duration: '60h30m',
    price: '30.00',
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
  </svg>
);

const LessonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3.5h9l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
    <path d="M15 3.5V8h4" />
    <path d="M8 12.5h8M8 15.5h8M8 9.5h3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

const CourseCard = ({ course }) => (
  <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(0,0,0,0.2)]">
    <div className="overflow-hidden rounded-xl">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full object-cover"
      />
    </div>

    <div className="flex flex-1 flex-col px-1 pt-4">
      <h3 className="text-lg font-bold leading-snug text-gray-900">
        {course.title}
      </h3>

      <div className="mt-2 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <div className="mt-4 flex items-stretch justify-between rounded-xl bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <LessonIcon />
          <div className="leading-tight">
            <p className="text-xs text-gray-400">Lesson:</p>
            <p className="text-sm font-semibold text-gray-800">{course.lessons}</p>
          </div>
        </div>
        <div className="w-px shrink-0 bg-gray-200" />
        <div className="flex items-center gap-2">
          <ClockIcon />
          <div className="leading-tight">
            <p className="text-xs text-gray-400">Duration:</p>
            <p className="text-sm font-semibold text-gray-800">{course.duration}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xl font-extrabold text-teal-500">${course.price}</span>
        <button
          type="button"
          className="group flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-teal-500 hover:text-teal-600"
        >
          View Details
          <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const PopularCourses = () => (
  <section className="bg-white px-6 pb-20 pt-4 sm:pb-24 sm:pt-6">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-teal-500">
          Our Courses
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Explore Our Popular Courses
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_COURSES.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  </section>
);

const ABOUT_FEATURES = [
  {
    title: 'Competitive Rates',
    desc: 'Seamlessly envisioned tactical data through services.',
  },
  {
    title: 'Online Certificates',
    desc: 'Seamlessly envisioned tactical data through services.',
  },
  {
    title: 'Professional Teachers',
    desc: 'Seamlessly envisioned tactical data through services.',
  },
];

const CheckBadge = () => (
  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500">
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  </span>
);

const AVATARS = [
  'https://i.pravatar.cc/64?img=12',
  'https://i.pravatar.cc/64?img=33',
  'https://i.pravatar.cc/64?img=15',
  'https://i.pravatar.cc/64?img=47',
];

const AboutSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-teal-50 px-6 py-16 sm:py-24">
    <div className="relative mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 lg:flex-row lg:items-center lg:gap-20">
      {/* Left: visuals */}
      <div className="relative mx-auto min-h-[440px] w-full max-w-[560px] flex-1 sm:min-h-[560px]">
        {/* orange squiggle */}
        <svg
          viewBox="0 0 40 260"
          className="absolute -left-4 top-8 hidden h-56 w-8 text-orange-500 sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <path d="M20 5c15 15-15 25 0 40s-15 25 0 40-15 25 0 40-15 25 0 40-15 25 0 40-15 25 0 40" />
        </svg>

        {/* back pill image */}
        <div className="absolute left-8 top-0 h-[300px] w-[210px] rounded-[130px] border-[3px] border-amber-400 p-2 sm:h-[340px] sm:w-[230px]">
          <img
            src="https://i.ibb.co.com/1GnyzB5y/download-1.png"
            alt="Student studying at home"
            className="h-full w-full rounded-[118px] object-cover"
          />
        </div>

        {/* front pill image */}
        <div className="absolute right-0 top-20 h-[380px] w-[250px] rounded-[150px] border-[3px] border-indigo-500 p-2 sm:h-[440px] sm:w-[280px]">
          <img
            src="https://i.ibb.co.com/n83fcKFG/download.png"
            alt="Students collaborating"
            className="h-full w-full rounded-[138px] object-cover"
          />
        </div>

        {/* Happy Student badge */}
        <div className="absolute bottom-6 left-0 z-10 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10">
          <p className="text-lg font-extrabold leading-tight">
            <span className="block text-teal-500">Happy</span>
            <span className="block text-gray-900">Student</span>
          </p>
          <div className="flex -space-x-3">
            {AVATARS.map((src) => (
              <img
                key={src}
                src={src}
                alt="Student"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
        </div>

        {/* bottom-right yellow squiggle + ring */}
        <svg
          viewBox="0 0 60 60"
          className="absolute -bottom-6 -right-2 hidden h-16 w-16 text-gray-800 sm:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <path d="M15 5c10 6-8 10 2 16s-8 10 2 16" />
        </svg>
        <div className="absolute -bottom-10 right-6 hidden h-16 w-16 rounded-full border-4 border-amber-400 sm:block" />
      </div>

      {/* Right: content */}
      <div className="flex-1">
        <div className="mb-3 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5c-2-1.3-4.5-2-7-2v13c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2v-13c-2.5 0-5 .7-7 2Z" />
            <path d="M12 6.5v13" />
          </svg>
          <span className="text-sm font-bold text-teal-500">Get To Know About Us</span>
        </div>

        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          A Smarter Way To Learn
          <br />
          In The Digital World
        </h2>

        <p className="mt-6 max-w-xl text-gray-500">
          The admission process is designed to help students find the right academic
          program that matches their interests, goals, and talents. It typically
          involves submitting an application form.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {ABOUT_FEATURES.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <CheckBadge />
              <div>
                <h4 className="font-bold text-gray-900">{feature.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
        >
          MORE ABOUT US
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  </section>
);

const STATS = [
  { value: '3.9k+', label: 'Total Student Enrolled' },
  { value: '1.2k+', label: 'Active Course' },
  { value: '850+', label: 'Qualified Instructors' },
  { value: '5.5k+', label: 'Course Completions' },
];

const StatsSection = () => (
  <section className="bg-teal-500">
    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-white/20 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
      {STATS.map((stat) => (
        <div key={stat.label} className="px-6 py-14 text-center">
          <p className="text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
          <p className="mt-3 text-sm font-bold text-white/90">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const TEACHERS = [
  {
    image: 'https://i.ibb.co.com/KpJByDjD/Nahida-madam.jpg',
    name: 'Nahida Maam',
    rating: '4.9',
  },
  {
    image: 'https://i.ibb.co.com/nNhtjxtc/maruf-sir.jpg',
    name: 'Maruf Sir',
    rating: '4.7',
  },
  {
    image: 'https://i.ibb.co.com/27k9KQ4J/munna-sir.jpg',
    name: 'Munna Sir',
    rating: '4.9',
  },
  {
    image: 'https://i.ibb.co.com/DPFT5kQP/rony-sir.jpg',
    name: 'Rony Sir',
    rating: '4.8',
  },
];

const FilledStar = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 text-teal-500" fill="currentColor">
    <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
  </svg>
);

const TeacherCard = ({ teacher }) => (
  <div className="flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(0,0,0,0.2)]">
    <div className="overflow-hidden rounded-xl">
      <img
        src={teacher.image}
        alt={teacher.name}
        className="h-64 w-full object-cover object-top"
      />
    </div>
    <div className="px-2 py-5 text-center">
      <h3 className="text-lg font-bold text-gray-900">{teacher.name}</h3>
      <p className="mt-1 text-sm text-gray-400">Instructor</p>
      <div className="mt-3 flex items-center justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FilledStar key={i} />
        ))}
        <span className="ml-1 text-sm font-semibold text-gray-500">({teacher.rating})</span>
      </div>
    </div>
  </div>
);

const TeachersSection = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-teacher-card]');
    if (!card) return;
    const step = card.offsetWidth + 20; // gap-5 = 20px
    const index = Math.round(track.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(index, TEACHERS.length - 1)));
  };

  const goToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-teacher-card]');
    if (!card) return;
    const step = card.offsetWidth + 20;
    track.scrollTo({ left: index * step, behavior: 'smooth' });
  };

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6.5c-2-1.3-4.5-2-7-2v13c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2v-13c-2.5 0-5 .7-7 2Z" />
              <path d="M12 6.5v13" />
            </svg>
            <span className="text-sm font-bold text-teal-500">Our Teachers</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Meet Our Professional
            <br />
            Teachers
          </h2>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
        >
          {TEACHERS.map((teacher) => (
            <div key={teacher.name} data-teacher-card className="w-[72%] shrink-0 snap-center sm:w-auto sm:shrink">
              <TeacherCard teacher={teacher} />
            </div>
          ))}
        </div>

        {/* swipe indicator dots (mobile only) */}
        <div className="mt-5 flex justify-center gap-1.5 sm:hidden">
          {TEACHERS.map((teacher, i) => (
            <button
              key={teacher.name}
              type="button"
              aria-label={`Go to ${teacher.name} card`}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full bg-teal-500 transition-all ${i === activeIndex ? 'w-5 opacity-100' : 'w-1.5 opacity-30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PROCESS_STEPS = [
  {
    image: 'https://i.ibb.co.com/Zz0Y4YrG/download-3.png',
    title: 'Sign Up & Choose\nYour Course',
    ring: 'border-emerald-300',
    bg: 'bg-emerald-50',
    offset: '',
  },
  {
    image: 'https://i.ibb.co.com/0jT9stQ1/download-2.png',
    title: 'Learn Anytime\nAnywhere',
    ring: 'border-sky-300',
    bg: 'bg-sky-50',
    offset: 'sm:mt-24',
  },
  {
    image: 'https://i.ibb.co.com/76Y2Gw4/download-1.png',
    title: 'Complete Assignments\n& Projects',
    ring: 'border-violet-300',
    bg: 'bg-violet-50',
    offset: '',
  },
  {
    image: 'https://i.ibb.co.com/S4z7c1P3/download.png',
    title: 'Get Certified\nAnd Grow',
    ring: 'border-orange-300',
    bg: 'bg-orange-50',
    offset: 'sm:mt-24',
  },
];

const ProcessStepCard = ({ step }) => (
  <div
    className={`relative flex h-52 w-52 flex-col items-center rounded-full border-2 border-dashed ${step.ring} ${step.bg} px-5 pt-12 text-center sm:h-64 sm:w-64 sm:px-6 sm:pt-14 lg:h-72 lg:w-72 ${step.offset}`}
  >
    <div className="absolute -top-8 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
      <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
    </div>
    <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
      {step.title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i === 0 && <br />}
        </React.Fragment>
      ))}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-gray-500">
      Standards in leadership skills synergize optimal expertise rather than.
    </p>
  </div>
);

const ProcessSection = () => (
  <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-24">
    {/* decorative globe */}
    <svg viewBox="0 0 100 100" className="absolute bottom-10 left-8 hidden h-24 w-24 text-teal-500 lg:block" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="42" r="30" />
      <path d="M20 42h60M50 12v60" />
      <path d="M27 22c8 8 8 30 0 40M73 22c-8 8-8 30 0 40" />
      <rect x="42" y="72" width="16" height="6" rx="2" />
      <path d="M50 78v8M38 90h24" />
    </svg>
    {/* decorative atom */}
    <svg viewBox="0 0 100 100" className="absolute right-8 top-6 hidden h-24 w-24 text-orange-500 lg:block" fill="none" stroke="currentColor" strokeWidth="2.2">
      <ellipse cx="50" cy="50" rx="38" ry="15" />
      <ellipse cx="50" cy="50" rx="38" ry="15" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="15" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
    </svg>

    <div className="relative mx-auto max-w-7xl">
      <div className="mb-14 text-center sm:mb-20">
        <div className="mb-3 flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5c-2-1.3-4.5-2-7-2v13c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2v-13c-2.5 0-5 .7-7 2Z" />
            <path d="M12 6.5v13" />
          </svg>
          <span className="text-sm font-bold text-teal-500">Work Process</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How Digital Learning Works
        </h2>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-16">
        {PROCESS_STEPS.map((step) => (
          <ProcessStepCard key={step.title} step={step} />
        ))}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-black">
    {/* decorative blobs */}
    <div className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-emerald-600/20 blur-2xl" />
    <div className="pointer-events-none absolute left-1/3 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/5 md:block" />
    <div className="pointer-events-none absolute left-1/3 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/5 md:block" />

    <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:py-0">
      {/* Left: content */}
      <div className="flex-1 py-6 text-center md:py-12 md:text-left">
        <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-teal-400" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5c-2-1.3-4.5-2-7-2v13c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2v-13c-2.5 0-5 .7-7 2Z" />
            <path d="M12 6.5v13" />
          </svg>
          <span className="text-xs font-bold text-teal-400">Join Our New Sessions</span>
        </div>

        <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Call To Enroll Your Digital
          <br />
          Learning Course
        </h2>

        <p className="mt-4 text-xl font-extrabold text-amber-400">
          (+1) 123 456 7890
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-xs font-bold tracking-wide text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600"
        >
          JOIN WITH US
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      {/* Right: image */}
      <div className="flex flex-1 items-end justify-center md:justify-end">
        <img
          src="https://i.ibb.co.com/TDwQxzpZ/cta-thumb4-1.png"
          alt="Students ready to enroll"
          className="h-[220px] w-auto object-contain sm:h-[260px] md:h-[300px] lg:h-[340px]"
        />
      </div>
    </div>
  </section>
);

const WHY_FEATURES = [
  'Learn At Your Own Pace',
  'Certified Industry Experts',
  'Affordable Learning For Everyone',
  'Lifetime Access',
  'Practical Skill Development',
];

const FeaturePill = ({ label }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm shadow-black/5">
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L15.5 9.5" />
    </svg>
    <span className="text-sm font-semibold text-gray-800">{label}</span>
  </div>
);

const WhyChooseSection = () => (
  <section className="overflow-x-hidden bg-white px-6 py-20 sm:py-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
      {/* Left: image with experience badge */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://i.ibb.co.com/8gK3zX0j/download.png"
            alt="Student learning online"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />
        </div>

        <div className="absolute right-2 top-1/2 h-24 w-24 -translate-y-1/2 sm:right-0 sm:h-36 sm:w-36 sm:translate-x-1/2 md:h-40 md:w-40">
          <style>{`
            @keyframes spin-experience {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .experience-spin {
              transform-box: fill-box;
              transform-origin: center;
              animation: spin-experience 12s linear infinite;
            }
          `}</style>
          <svg viewBox="0 0 160 160" className="h-full w-full drop-shadow-lg">
            <circle cx="80" cy="80" r="78" fill="white" />
            <g className="experience-spin">
              <path
                id="experienceCirclePath"
                d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                fill="none"
              />
              <text fontSize="10.5" fontWeight="700" letterSpacing="1.5" fill="#111827">
                <textPath href="#experienceCirclePath" startOffset="0%">
                  YEARS OF EXPERIENCE &#8226; &#8226; YEARS OF EXPERIENCE &#8226; &#8226;
                </textPath>
              </text>
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-2xl font-extrabold text-white shadow-lg shadow-teal-500/30 sm:h-[88px] sm:w-[88px]">
              16
            </div>
          </div>
        </div>
      </div>

      {/* Right: content panel */}
      <div className="flex flex-col justify-center rounded-2xl bg-emerald-50 p-8 sm:p-12">
        <div className="mb-3 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5c-2-1.3-4.5-2-7-2v13c2.5 0 5 .7 7 2 2-1.3 4.5-2 7-2v-13c-2.5 0-5 .7-7 2Z" />
            <path d="M12 6.5v13" />
          </svg>
          <span className="text-sm font-bold text-teal-500">Why Choose Us</span>
        </div>

        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
          Your Classroom,
          <br />
          Anywhere In The World
        </h2>

        <p className="mt-6 max-w-lg text-gray-500">
          Digital education is transforming the way people learn by integrating
          technology, creativity, and innovation into the educational experience.
          It allows learners to access quality education anytime.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {WHY_FEATURES.map((label) => (
            <FeaturePill key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Home;