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
];

const CourseCard = ({ course }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-amber-500';
      case 'Completed':
        return 'bg-emerald-500';
      case 'Not Started':
        return 'bg-gray-400';
      default:
        return 'bg-gray-500';
    }
  };

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

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute right-4 top-4 rounded-full ${getStatusBadgeStyle(course.status)} px-3 py-1 text-xs font-bold shadow-sm`}>
          {course.status === 'Not Started' ? '📝 Not Started' : course.status === 'Completed' ? '✅ Completed' : '🔄 In Progress'}
        </div>
        {/* Progress bar on image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
          <div
            className={`h-full transition-all duration-700 ${
              course.progress === 100 ? 'bg-emerald-500' : 'bg-teal-500'
            }`}
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </div>
        <p className="mt-1 text-sm text-gray-500">By {course.instructor}</p>

        {/* Progress Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">Progress</span>
            <span className="font-bold text-teal-500">{course.progress}%</span>
          </div>
          <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                course.progress === 100 ? 'bg-emerald-500' : 'bg-teal-500'
              }`}
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-5 w-5 shrink-0">
              <path d="M6 4h9l3 3v13a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1Z" />
              <path d="M9 9h6M9 12.5h6M9 16h4" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Lessons</p>
              <p className="text-sm font-semibold text-gray-800">{course.completedLessons}/{course.lessons}</p>
            </div>
          </div>

          <div className="h-9 w-px bg-gray-200" />

          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.6" className="h-5 w-5 shrink-0">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="text-sm font-semibold text-gray-800">{course.duration}</p>
            </div>
          </div>
        </div>

        {/* Last Accessed & Next Lesson */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Last accessed: {course.lastAccessed}</span>
          </div>

          {course.progress < 100 && course.progress > 0 && (
            <div className="flex items-center gap-2 rounded-lg bg-teal-50 px-4 py-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" className="h-4 w-4 shrink-0">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-teal-600">Next:</span> {course.nextLesson}
              </p>
            </div>
          )}

          {course.progress === 100 && (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" className="h-4 w-4 shrink-0">
                <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm font-medium text-emerald-600">🎉 Course Completed!</p>
            </div>
          )}

          {course.progress === 0 && (
            <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" className="h-4 w-4 shrink-0">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <p className="text-sm text-gray-500">Not started yet. Start learning today!</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Link
          to={`/my-class/${course.id}`}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:shadow-lg ${
            course.progress === 100
              ? 'bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/30'
              : course.progress === 0
              ? 'bg-teal-500 hover:bg-teal-600 hover:shadow-teal-500/30'
              : 'bg-teal-500 hover:bg-teal-600 hover:shadow-teal-500/30'
          }`}
        >
          {course.progress === 100 ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                <path d="M14 2v6h6M16 13l-3 3-2-2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Review Course
            </>
          ) : course.progress === 0 ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Start Learning
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Continue Learning
            </>
          )}
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
      <section className="bg-white border-b border-gray-100 pt-8">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
          {/* Header */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">My Classes</h1>
              <p className="text-sm text-gray-500">Track your learning progress and continue where you left off</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" className="h-5 w-5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="text-sm font-semibold text-teal-600">Avg. Progress: {averageProgress}%</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            <div className="rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/50 p-4 text-center transition hover:scale-105">
              <p className="text-2xl font-extrabold text-teal-600 md:text-3xl">{enrolledCount}</p>
              <p className="text-xs text-gray-600">Total Enrolled</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-4 text-center transition hover:scale-105">
              <p className="text-2xl font-extrabold text-amber-500 md:text-3xl">{inProgressCount}</p>
              <p className="text-xs text-gray-600">In Progress</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-4 text-center transition hover:scale-105">
              <p className="text-2xl font-extrabold text-emerald-500 md:text-3xl">{completedCount}</p>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100/50 p-4 text-center transition hover:scale-105">
              <p className="text-2xl font-extrabold text-gray-500 md:text-3xl">{notStartedCount}</p>
              <p className="text-xs text-gray-600">Not Started</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-900">
              Your Courses
              <span className="ml-2 text-sm font-normal text-gray-400">
                ({filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'})
              </span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((filterOption) => (
                <button
                  key={filterOption}
                  onClick={() => setFilter(filterOption)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition md:px-5 ${
                    filter === filterOption
                      ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filterOption}
                  {filterOption !== 'All' && (
                    <span className="ml-1 text-xs opacity-70">
                      ({MY_COURSES.filter(c => filterOption === 'All' ? true : c.status === filterOption).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-gray-200 py-16 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" className="h-8 w-8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M8 12h8M12 8v8" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">No {filter.toLowerCase()} courses found</h3>
              <p className="mt-1 text-gray-400">Start learning a new course today!</p>
              <Link
                to="/courses"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600"
              >
                Browse Courses
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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