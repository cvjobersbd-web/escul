// Courses.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/coursesData';

const StarRating = ({ rating = 0 }) => (
  <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className={`h-3 w-3 sm:h-4 sm:w-4 ${i < rating ? 'fill-current' : 'fill-none stroke-current'}`}
        strokeWidth="1.5"
      >
        <path d="M12 3.5l2.47 5.15 5.53.65-4.1 3.83 1.13 5.47L12 15.9l-4.03 2.7 1.13-5.47-4.1-3.83 5.53-.65L12 3.5Z" />
      </svg>
    ))}
  </div>
);

const CourseCard = ({ course }) => (
  <div className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {/* Thumbnail */}
    <div className="overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 sm:h-48 md:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-1 flex-col px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-4 sm:pt-5">
      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-600 line-clamp-2">
        {course.title}
      </h3>

      {/* Rating */}
      <div className="mt-2 sm:mt-3">
        <StarRating rating={course.rating} />
      </div>

      {/* Lesson / Duration row */}
      <div className="mt-3 sm:mt-4 md:mt-5 flex items-center justify-between rounded-lg sm:rounded-xl bg-gray-50 px-3 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0">
            <path d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1Z" />
            <path d="M9 9h6M9 12.5h6M9 16h4" strokeLinecap="round" />
          </svg>
          <div className="leading-tight">
            <p className="text-[10px] sm:text-xs text-slate-500">Lesson:</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">{course.lessons} Lesson</p>
          </div>
        </div>

        <div className="h-6 sm:h-7 md:h-9 w-px bg-gray-200" />

        <div className="flex items-center gap-1.5 sm:gap-2">
          <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="leading-tight">
            <p className="text-[10px] sm:text-xs text-slate-500">Duration:</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">{course.duration}</p>
          </div>
        </div>
      </div>

      {/* Price / CTA */}
      <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-between">
        <span className="text-lg sm:text-xl font-extrabold text-teal-500">${course.price}</span>
        <Link
          to={`/courses/${course.id}`}
          className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gray-200 px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:bg-teal-500 hover:text-white"
        >
          View Details
          <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 sm:h-4 sm:w-4">
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from courses
  const allCategories = ['All', ...new Set(COURSES.flatMap(course => course.categories))];

  // Filter courses based on search and category
  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Courses Header with Search and Filter */}
      <section className="bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              All <span className="text-teal-500">Courses</span>
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Discover our wide range of courses and start your learning journey today
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-200 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base pl-10 sm:pl-12 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition"
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
              {allCategories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                      : 'bg-white border border-gray-200 text-slate-700 hover:border-teal-300 hover:text-teal-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-slate-500">
            Showing {filteredCourses.length} of {COURSES.length} courses
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          {filteredCourses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
              <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" className="h-12 w-12 sm:h-16 sm:w-16">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-slate-700">No courses found</h3>
              <p className="mt-1 text-sm text-slate-400">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 rounded-full bg-teal-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Courses;