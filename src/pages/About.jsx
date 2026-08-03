// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
        {/* About Our University section - Enhanced */}
        <section className="bg-white py-12 md:py-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-16 lg:px-12 xl:px-20">
                {/* Left: image collage */}
                <div
                    className="relative mx-auto w-full max-w-[560px]"
                    style={{ aspectRatio: '792 / 650' }}
                >
                    {/* decorative book stack */}
                    <img
                        src="https://i.ibb.co.com/Ng6Ykb56/about-shape1-1-1.png"
                        alt=""
                        className="absolute z-10"
                        style={{ left: '1.9%', bottom: '3.1%', width: '22%' }}
                    />

                    {/* top-left photo */}
                    <img
                        src="https://i.ibb.co.com/XfRRY7ZW/download.png"
                        alt="Students studying in the library"
                        className="absolute rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        style={{
                            left: '5.6%',
                            top: '7.7%',
                            width: '29.5%',
                            height: '35.7%',
                        }}
                    />

                    {/* large middle photo */}
                    <img
                        src="https://i.ibb.co.com/1GXYk61s/download-2.png"
                        alt="Two students reading together"
                        className="absolute rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        style={{
                            left: '22.7%',
                            top: '23.1%',
                            width: '50.5%',
                            height: '66.2%',
                        }}
                    />

                    {/* graduation photo */}
                    <img
                        src="https://i.ibb.co.com/LK19pss/download-1.png"
                        alt="Graduating students celebrating"
                        className="absolute rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        style={{
                            left: '60.6%',
                            top: '57.2%',
                            width: '33.1%',
                            height: '39.7%',
                        }}
                    />

                    {/* rotating badge */}
                    <div
                        className="absolute z-10"
                        style={{ left: '65.7%', top: '6.9%', width: '28%', height: '36.9%' }}
                    >
                        <svg viewBox="0 0 200 200" className="h-full w-full animate-[spin_18s_linear_infinite]">
                            <defs>
                                <path
                                    id="badgeCircle"
                                    d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                />
                            </defs>
                            <circle cx="100" cy="100" r="98" fill="#f1faf7" />
                            <text
                                fill="#334155"
                                fontSize="9.5"
                                fontWeight="600"
                                letterSpacing="2"
                            >
                                <textPath href="#badgeCircle" startOffset="0%">
                                    OVERVIEW OR STUDENT TESTIMONIALS CAMPUS
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute inset-0 m-auto flex h-[64%] w-[64%] flex-col items-center justify-center rounded-full bg-white text-center shadow-md">
                            <span className="text-base font-extrabold leading-none text-teal-500 sm:text-xl md:text-2xl">
                                50K
                            </span>
                            <span className="mt-1 whitespace-nowrap text-[8px] font-medium leading-none text-slate-700 sm:text-[10px] md:text-xs">
                                Active Students
                            </span>
                        </div>
                    </div>

                    {/* Decorative plus icon */}
                    <div className="absolute left-[45%] top-[2%] text-xl sm:text-2xl text-teal-400 opacity-60">
                        +
                    </div>
                    <div className="absolute right-[8%] top-[45%] text-xl sm:text-2xl text-teal-400 opacity-60">
                        +
                    </div>
                </div>

                {/* Right: content - Enhanced */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <div className="mb-3 flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-teal-500">
                        <span className="hidden md:inline-block h-0.5 w-8 bg-teal-500"></span>
                        About Our University
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                        Welcome To <span className="text-teal-500">Escul</span> University.
                    </h2>
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-500">
                        Collaboratively simplify user friendly networks after principle
                        centered coordinate effective methods of empowerment
                        distributed niche markets pursue market positioning
                        web-readiness after resource sucking applications.
                    </p>

                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                        {[
                            'Get access to 4,000+ of our top courses',
                            'Popular topics to learn now',
                            'Find the right instructor for you',
                        ].map((item) => (
                            <li key={item} className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base text-slate-700">
                                <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-500">
                                    <svg
                                        className="h-3 w-3 sm:h-4 sm:w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12l5 5L20 7" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
                        <Link
                            to="/courses"
                            className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-500 px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-white transition hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30"
                        >
                            Learn More
                            <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </Link>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                            <span className="flex -space-x-2">
                                {['https://i.pravatar.cc/32?img=11', 'https://i.pravatar.cc/32?img=33', 'https://i.pravatar.cc/32?img=15'].map((src, i) => (
                                    <img key={i} src={src} alt="" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-white" />
                                ))}
                            </span>
                            <span className="font-medium text-slate-700">2.5k+ students</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* What We Do / features section - Enhanced */}
        <section
            className="relative overflow-hidden py-12 md:py-16 lg:py-24"
            style={{
                background:
                    'linear-gradient(120deg, #d9f0ea 0%, #eef6ee 45%, #f2f1de 75%, #e9f0d8 100%)',
            }}
        >
            {/* decorative elements */}
            <svg
                className="pointer-events-none absolute left-4 sm:left-8 top-8 sm:top-10 hidden lg:block h-32 sm:h-40 w-5 sm:w-6"
                viewBox="0 0 24 220"
                fill="none"
            >
                <path
                    d="M12 4 C22 24, 2 44, 12 64 C22 84, 2 104, 12 124 C22 144, 2 164, 12 184 C18 196, 12 208, 12 216"
                    stroke="#f0653e"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

            <div className="pointer-events-none absolute -right-4 bottom-10 hidden lg:block h-20 w-20 sm:h-24 sm:w-24">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                    <circle
                        cx="50"
                        cy="55"
                        r="38"
                        stroke="#f2b705"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        d="M22 28 C30 20, 30 36, 38 28 C46 20, 46 36, 54 28 C62 20, 62 36, 70 28"
                        stroke="#1e293b"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            </div>

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center md:px-8 lg:px-12">
                <div className="mb-3 sm:mb-4 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
                    <span className="hidden sm:inline-block h-0.5 w-6 sm:w-8 bg-teal-400"></span>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 sm:h-4 sm:w-4 text-teal-500"
                        aria-hidden="true"
                    >
                        <path d="M2 4.5c2.5-1 5.5-1 8 0v15c-2.5-1-5.5-1-8 0v-15Z" />
                        <path d="M22 4.5c-2.5-1-5.5-1-8 0v15c2.5-1 5.5-1 8 0v-15Z" />
                    </svg>
                    What we do
                    <span className="hidden sm:inline-block h-0.5 w-6 sm:w-8 bg-teal-400"></span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                    Your Path To <span className="text-teal-500">Success</span> Starts Here
                </h2>
                <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-slate-600">
                    We provide comprehensive digital education solutions designed to help you achieve your goals.
                </p>
            </div>

            <div className="relative mx-auto mt-10 sm:mt-14 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-6">
                {[
                    {
                        title: 'Learn From Anywhere',
                        icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                                <rect x="3" y="4" width="18" height="12" rx="1.5" />
                                <path d="M2 19h20" strokeLinecap="round" />
                                <circle cx="9" cy="9" r="1.8" />
                                <path d="M13 8.5h5M13 11h3.5" strokeLinecap="round" />
                                <path d="M7 13.5h4" strokeLinecap="round" />
                            </svg>
                        ),
                        color: 'from-teal-500 to-teal-600',
                    },
                    {
                        title: 'Expert Instructor',
                        icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                                <circle cx="12" cy="10.5" r="3.2" />
                                <path d="M6.5 20c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" strokeLinecap="round" />
                                <path d="M7.5 7.2L12 5l4.5 2.2-4.5 2.1-4.5-2.1z" strokeLinejoin="round" />
                                <path d="M16.5 7.6v2.4" strokeLinecap="round" />
                            </svg>
                        ),
                        color: 'from-orange-500 to-orange-600',
                    },
                    {
                        title: '24/7 Live Support',
                        icon: (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9">
                                <rect x="4" y="4" width="16" height="5.5" rx="1.2" />
                                <rect x="4" y="11.5" width="16" height="5.5" rx="1.2" />
                                <circle cx="7.3" cy="6.75" r="0.6" fill="currentColor" stroke="none" />
                                <circle cx="7.3" cy="14.25" r="0.6" fill="currentColor" stroke="none" />
                                <path d="M12 17v2.5M12 19.5c-1.4 0-2.4.7-2.4 1.7h4.8c0-1-1-1.7-2.4-1.7z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ),
                        color: 'from-purple-500 to-purple-600',
                    },
                ].map((card, index) => (
                    <div
                        key={card.title}
                        className="group relative rounded-2xl border border-slate-100 bg-white px-6 sm:px-8 py-8 sm:py-10 text-center shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]"
                    >
                        {/* Number badge */}
                        <div className="absolute -top-3 -right-3 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-slate-800 text-[10px] sm:text-xs font-bold text-white">
                            {index + 1}
                        </div>
                        <div className={`mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br ${card.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                            {card.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                            {card.title}
                        </h3>
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-500">
                            It uses digital technology to deliver high-quality
                            courses, interactive lessons, and expert-led training
                            across a wide range of subjects.
                        </p>
                        <div className="mt-4 sm:mt-6 inline-block text-xs sm:text-sm font-semibold text-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Learn More →
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Popular Courses CTA section - Enhanced */}
        <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
            <svg
                className="pointer-events-none absolute right-4 sm:right-10 top-1/2 hidden lg:block h-40 sm:h-48 w-5 sm:w-6 -translate-y-1/2"
                viewBox="0 0 24 220"
                fill="none"
            >
                <path
                    d="M12 4 C22 24, 2 44, 12 64 C22 84, 2 104, 12 124 C22 144, 2 164, 12 184 C18 196, 12 208, 12 216"
                    stroke="#14b8a6"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-6">
                {/* Section header */}
                <div className="mb-8 sm:mb-12 text-center">
                    <span className="inline-block rounded-full bg-teal-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-600">
                        Popular Courses
                    </span>
                    <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                        Start Your Learning Journey Today
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    {[
                        {
                            bg: '#1fa98c',
                            image: 'https://i.ibb.co.com/HM1Rxjd/cta-thumb2-1.png',
                            title: 'Web Development Bootcamp',
                            price: '$49.99',
                        },
                        {
                            bg: '#f5b400',
                            image: 'https://i.ibb.co.com/46jF3Qz/cta-thumb2-2.png',
                            title: 'Data Science Masterclass',
                            price: '$59.99',
                        },
                    ].map((cta, i) => (
                        <div
                            key={i}
                            className="group relative flex items-end overflow-hidden rounded-2xl sm:rounded-3xl px-6 sm:px-8 pt-6 sm:pt-8 transition-all duration-300 hover:shadow-2xl"
                            style={{ backgroundColor: cta.bg, height: '280px' }}
                        >
                            <div className="relative z-10 max-w-[55%] sm:max-w-[58%] pb-6 sm:pb-8">
                                <div className="mb-1 sm:mb-2 flex items-center gap-2">
                                    <span className="rounded-full bg-white/20 px-2 sm:px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wide text-white">
                                        {i === 0 ? '🔥 Popular' : '⭐ New'}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug text-white">
                                    {cta.title}
                                </h3>
                                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-bold text-white/90">
                                    {cta.price}
                                </p>
                                <Link
                                    to="/courses"
                                    className="mt-3 sm:mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/30"
                                >
                                    Enroll Now
                                    <svg
                                        className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>

                            <img
                                src={cta.image}
                                alt="Student"
                                className="pointer-events-none absolute bottom-0 right-0 h-full w-auto max-w-[48%] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-12 md:py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center md:px-8 lg:px-12">
                <span className="inline-block rounded-full bg-teal-500/10 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-600">
                    Testimonials
                </span>
                <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
                    What Our Students Say
                </h2>
                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {[
                        {
                            name: 'Sarah Johnson',
                            role: 'Web Developer',
                            quote: 'The courses here transformed my career. I went from zero to landing my dream job in just 6 months!',
                            avatar: 'https://i.pravatar.cc/64?img=11',
                        },
                        {
                            name: 'Michael Chen',
                            role: 'Data Analyst',
                            quote: 'Incredible instructors and hands-on projects. The support team is always there when you need help.',
                            avatar: 'https://i.pravatar.cc/64?img=33',
                        },
                        {
                            name: 'Emily Rodriguez',
                            role: 'UX Designer',
                            quote: 'I love the flexibility of learning at my own pace. The curriculum is well-structured and engaging.',
                            avatar: 'https://i.pravatar.cc/64?img=15',
                        },
                    ].map((testimonial) => (
                        <div key={testimonial.name} className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-current">
                                        <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">"{testimonial.quote}"</p>
                            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3">
                                <img src={testimonial.avatar} alt={testimonial.name} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover" />
                                <div className="text-left">
                                    <p className="text-sm sm:text-base font-bold text-slate-900">{testimonial.name}</p>
                                    <p className="text-[10px] sm:text-xs text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default About;