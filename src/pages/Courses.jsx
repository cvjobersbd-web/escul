// Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const COURSES = [
  {
    image: 'https://i.ibb.co.com/rGttSLJy/The-Ultimate-Figma-Course-From-Zero-to-Expert.jpg',
    title: 'The Ultimate Figma Course From Zero to Expert',
    rating: 0,
    lessons: 7,
    duration: '60h30m',
    price: '30.00',
  },
  {
    image: 'https://i.ibb.co.com/qZ60Vqg/Flutter-Development-Bootcamp-with-Dart.jpg',
    title: 'Flutter Development Bootcamp with Dart',
    rating: 0,
    lessons: 7,
    duration: '40h20m',
    price: '60.00',
  },
  {
    image: 'https://i.ibb.co.com/XZSqdW0B/Complete-Web-Design-from-Figma-to-Webflow.jpg',
    title: 'Complete Web Design: from Figma to Webflow',
    rating: 0,
    lessons: 7,
    duration: '65h50m',
    price: '45.00',
  },
  {
    image: 'https://i.ibb.co.com/bgN84gQH/Dynamic-website-development-to-make-money-from-online.jpg',
    title: 'Dynamic Website Development to Make Money Online',
    rating: 0,
    lessons: 8,
    duration: '52h15m',
    price: '55.00',
  },
  {
    image: 'https://i.ibb.co.com/w1pvB8x/Online-learning-management-system-learn-dash-course.jpg',
    title: 'Online Learning Management System (LearnDash) Course',
    rating: 0,
    lessons: 6,
    duration: '38h40m',
    price: '40.00',
  },
  {
    image: 'https://i.ibb.co.com/2YpD90Bt/Basic-to-Advance-UX-UI-Design-and-live-Training.jpg',
    title: 'Basic to Advance UX/UI Design with Live Training',
    rating: 0,
    lessons: 9,
    duration: '70h10m',
    price: '65.00',
  },
  {
    image: 'https://i.ibb.co.com/KjyJyXy8/English-grammar-courses-online-with-real-certificates.jpg',
    title: 'English Grammar Course Online with Real Certificate',
    rating: 0,
    lessons: 10,
    duration: '30h00m',
    price: '25.00',
  },
  {
    image: 'https://i.ibb.co.com/ZpRSvpsk/Basic-Word-Press-theme-development-full-course.jpg',
    title: 'Basic WordPress Theme Development Full Course',
    rating: 0,
    lessons: 7,
    duration: '45h25m',
    price: '35.00',
  },
  {
    image: 'https://i.ibb.co.com/rf3RgYqG/Complete-React-Front-end-developer-course.jpg',
    title: 'Complete React Front-end Developer Course',
    rating: 0,
    lessons: 8,
    duration: '58h35m',
    price: '50.00',
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

const CourseCard = ({ course }) => (
  <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {/* Thumbnail */}
    <div className="overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
      {/* Title */}
      <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-600">
        {course.title}
      </h3>

      {/* Rating */}
      <div className="mt-3">
        <StarRating rating={course.rating} />
      </div>

      {/* Lesson / Duration row */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-5 w-5 shrink-0">
            <path d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1Z" />
            <path d="M9 9h6M9 12.5h6M9 16h4" strokeLinecap="round" />
          </svg>
          <div className="leading-tight">
            <p className="text-xs text-slate-500">Lesson:</p>
            <p className="text-sm font-semibold text-slate-800">{course.lessons} Lesson</p>
          </div>
        </div>

        <div className="h-9 w-px bg-gray-200" />

        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-5 w-5 shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="leading-tight">
            <p className="text-xs text-slate-500">Duration:</p>
            <p className="text-sm font-semibold text-slate-800">{course.duration}</p>
          </div>
        </div>
      </div>

      {/* Price / CTA */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-extrabold text-teal-500">${course.price}</span>
        <Link
          to="#"
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:bg-teal-500 hover:text-white"
        >
          View Details
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <>
      {/* Courses grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-20">
          {COURSES.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;