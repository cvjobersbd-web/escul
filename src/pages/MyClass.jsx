// MyClass.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MY_COURSES = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/rGttSLJy/The-Ultimate-Figma-Course-From-Zero-to-Expert.jpg',
    title: 'The Ultimate Figma Course From Zero to Expert',
    instructor: 'Sarah Johnson',
    progress: 75,
    lessons: 7,
    completedLessons: 5,
    duration: '60h30m',
    nextLesson: 'Advanced Prototyping Techniques',
    status: 'In Progress',
    lastAccessed: '2 hours ago',
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/qZ60Vqg/Flutter-Development-Bootcamp-with-Dart.jpg',
    title: 'Flutter Development Bootcamp with Dart',
    instructor: 'Michael Chen',
    progress: 40,
    lessons: 7,
    completedLessons: 3,
    duration: '40h20m',
    nextLesson: 'State Management with Provider',
    status: 'In Progress',
    lastAccessed: '1 day ago',
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/XZSqdW0B/Complete-Web-Design-from-Figma-to-Webflow.jpg',
    title: 'Complete Web Design: from Figma to Webflow',
    instructor: 'Emily Rodriguez',
    progress: 100,
    lessons: 7,
    completedLessons: 7,
    duration: '65h50m',
    nextLesson: 'Course Completed! 🎉',
    status: 'Completed',
    lastAccessed: '3 days ago',
  },
  {
    id: 4,
    image: 'https://i.ibb.co.com/bgN84gQH/Dynamic-website-development-to-make-money-from-online.jpg',
    title: 'Dynamic Website Development to Make Money Online',
    instructor: 'David Kim',
    progress: 20,
    lessons: 8,
    completedLessons: 2,
    duration: '52h15m',
    nextLesson: 'Database Integration with MySQL',
    status: 'In Progress',
    lastAccessed: '5 days ago',
  },
  {
    id: 5,
    image: 'https://i.ibb.co.com/w1pvB8x/Online-learning-management-system-learn-dash-course.jpg',
    title: 'Online Learning Management System (LearnDash) Course',
    instructor: 'Sarah Johnson',
    progress: 0,
    lessons: 6,
    completedLessons: 0,
    duration: '38h40m',
    nextLesson: 'Introduction to LearnDash',
    status: 'Not Started',
    lastAccessed: 'Never',
  },
  {
    id: 6,
    image: 'https://i.ibb.co.com/2YpD90Bt/Basic-to-Advance-UX-UI-Design-and-live-Training.jpg',
    title: 'Basic to Advance UX/UI Design with Live Training',
    instructor: 'Md. Shahin',
    progress: 85,
    lessons: 9,
    completedLessons: 8,
    duration: '70h10m',
    nextLesson: 'Final Project Submission',
    status: 'In Progress',
    lastAccessed: '4 hours ago',
  },
  {
    id: 7,
    image: 'https://i.ibb.co.com/KjyJyXy8/English-grammar-courses-online-with-real-certificates.jpg',
    title: 'English Grammar Course Online with Real Certificate',
    instructor: 'Jane Wilson',
    progress: 60,
    lessons: 10,
    completedLessons: 6,
    duration: '30h00m',
    nextLesson: 'Advanced Grammar Rules',
    status: 'In Progress',
    lastAccessed: '2 days ago',
  },
  {
    id: 8,
    image: 'https://i.ibb.co.com/ZpRSvpsk/Basic-Word-Press-theme-development-full-course.jpg',
    title: 'Basic WordPress Theme Development Full Course',
    instructor: 'David Kim',
    progress: 45,
    lessons: 7,
    completedLessons: 3,
    duration: '45h25m',
    nextLesson: 'Custom Post Types',
    status: 'In Progress',
    lastAccessed: '1 week ago',
  },
];

const CourseCard = ({ course }) => {
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-amber-100 text-amber-700';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-700';
      case 'Not Started':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Progress':
        return '🔄';
      case 'Completed':
        return '✅';
      case 'Not Started':
        return '📝';
      default:
        return '📝';
    }
  };

  return (
    <div className="group overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-40 sm:h-44 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute right-3 sm:right-4 top-3 sm:top-4 rounded-full ${getStatusBadgeStyle(course.status)} px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold shadow-sm`}>
          {getStatusIcon(course.status)} {course.status}
        </div>
        {/* Progress bar on image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gray-200/70">
          <div
            className={`h-full transition-all duration-700 ${
              course.progress === 100 ? 'bg-emerald-500' : 'bg-gradient-to-r from-teal-400 to-teal-500'
            }`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
        {course.progress === 100 && (
          <div className="absolute left-3 sm:left-4 top-3 sm:top-4 rounded-full bg-emerald-500 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white shadow-sm">
            🏆 Completed
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-gray-500">
          <span className="font-medium text-gray-700">{course.instructor}</span>
        </p>

        {/* Progress Section */}
        <div className="mt-3 sm:mt-4">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-medium text-gray-700">Progress</span>
            <span className={`font-bold ${course.progress === 100 ? 'text-emerald-500' : 'text-teal-500'}`}>
              {course.progress}%
            </span>
          </div>
          <div className="mt-1 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                course.progress === 100 ? 'bg-emerald-500' : 'bg-teal-500'
              }`}
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 sm:mt-5 flex items-center justify-between rounded-lg sm:rounded-xl bg-gray-50 px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0">
              <path d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1Z" />
              <path d="M9 9h6M9 12.5h6M9 16h4" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-[10px] sm:text-xs text-gray-500">Lessons</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800">{course.completedLessons}/{course.lessons}</p>
            </div>
          </div>

          <div className="h-6 sm:h-7 md:h-9 w-px bg-gray-200" />

          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-4 w-4 sm:h-5 sm:w-5 shrink-0">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-[10px] sm:text-xs text-gray-500">Duration</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800">{course.duration}</p>
            </div>
          </div>
        </div>

        {/* Last Accessed & Next Lesson */}
        <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 sm:h-4 sm:w-4">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Last accessed: {course.lastAccessed}</span>
          </div>

          {course.progress < 100 && course.progress > 0 && (
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-teal-50 px-3 sm:px-4 py-2 sm:py-2.5 border border-teal-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" className="h-3 w-3 sm:h-4 sm:w-4 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-medium text-teal-600">Next:</span> {course.nextLesson}
              </p>
            </div>
          )}

          {course.progress === 100 && (
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-emerald-50 px-3 sm:px-4 py-2 sm:py-2.5 border border-emerald-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" className="h-3 w-3 sm:h-4 sm:w-4 shrink-0">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-xs sm:text-sm font-medium text-emerald-600">🎉 Course Completed! Get your certificate now.</p>
            </div>
          )}

          {course.progress === 0 && (
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg bg-gray-50 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" className="h-3 w-3 sm:h-4 sm:w-4 shrink-0">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <p className="text-xs sm:text-sm text-gray-500">Not started yet. Start learning today!</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link
          to={`/my-class/${course.id}`}
          className={`mt-4 sm:mt-5 flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
            course.progress === 100
              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-emerald-500/30'
              : course.progress === 0
              ? 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 hover:shadow-teal-500/30'
              : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 hover:shadow-teal-500/30'
          }`}
        >
          {course.progress === 100 ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 sm:h-4 sm:w-4">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                <path d="M14 2v6h6M16 13l-3 3-2-2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Review Course
            </>
          ) : course.progress === 0 ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 sm:h-4 sm:w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Start Learning
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 sm:h-4 sm:w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Continue Learning
            </>
          )}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const MyClass = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'In Progress', 'Completed', 'Not Started'];

  const filteredCourses = MY_COURSES.filter((course) => {
    if (filter === 'All') return true;
    return course.status === filter;
  });

  const enrolledCount = MY_COURSES.length;
  const inProgressCount = MY_COURSES.filter((c) => c.status === 'In Progress').length;
  const completedCount = MY_COURSES.filter((c) => c.status === 'Completed').length;
  const notStartedCount = MY_COURSES.filter((c) => c.status === 'Not Started').length;

  // Calculate overall progress
  const totalProgress = MY_COURSES.reduce((acc, course) => acc + course.progress, 0);
  const averageProgress = Math.round(totalProgress / MY_COURSES.length);

  return (
    <>
      {/* Statistics Section */}
      <section className="bg-white border-b border-gray-100 pt-6 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-5 sm:mb-6 flex flex-col items-start justify-between gap-3 sm:gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">My Classes</h1>
              <p className="text-xs sm:text-sm text-gray-500">Track your learning progress and continue where you left off</p>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 px-3 sm:px-4 py-1.5 sm:py-2 border border-teal-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" className="h-4 w-4 sm:h-5 sm:w-5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-teal-600">Avg. Progress: {averageProgress}%</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 md:gap-4">
            <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/50 p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-teal-600">{enrolledCount}</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Total Enrolled</p>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-500">{inProgressCount}</p>
              <p className="text-[10px] sm:text-xs text-gray-600">In Progress</p>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-500">{completedCount}</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Completed</p>
            </div>
            <div className="rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-md">
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-500">{notStartedCount}</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Not Started</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Filter Buttons */}
          <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
              Your Courses
              <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm font-normal text-gray-400">
                ({filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'})
              </span>
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {filters.map((filterOption) => {
                const count = filterOption === 'All' 
                  ? MY_COURSES.length 
                  : MY_COURSES.filter(c => c.status === filterOption).length;
                
                return (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-200 ${
                      filter === filterOption
                        ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md shadow-teal-500/30 scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filterOption}
                    <span className="ml-0.5 sm:ml-1 text-[8px] sm:text-xs opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-200 py-12 sm:py-16 text-center">
              <div className="mx-auto mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" className="h-6 w-6 sm:h-8 sm:w-8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-700">No {filter.toLowerCase()} courses found</h3>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400">Start learning a new course today!</p>
              <Link
                to="/courses"
                className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105"
              >
                Browse Courses
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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

export default MyClass;