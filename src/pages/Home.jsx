import React, { useRef } from 'react';

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

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:py-32">
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
          <div className="relative flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]">
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

export default Home;