// pages/ClassRoom.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

// সিমুলেটেড কোর্স ডেটা (আসল ডেটা আসলে এখানে API থেকে আসবে)
const COURSE_LESSONS = {
  1: {
    id: 1,
    title: 'The Ultimate Figma Course From Zero to Expert',
    instructor: 'Sarah Johnson',
    lessons: [
      { id: 1, title: 'Introduction to Figma', duration: '12:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 2, title: 'Figma Interface Overview', duration: '15:20', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 3, title: 'Creating Your First Design', duration: '18:45', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 4, title: 'Working with Frames', duration: '20:10', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 5, title: 'Advanced Prototyping Techniques', duration: '25:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 6, title: 'Collaboration & Sharing', duration: '22:15', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 7, title: 'Final Project', duration: '30:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
    ]
  },
  2: {
    id: 2,
    title: 'Flutter Development Bootcamp with Dart',
    instructor: 'Michael Chen',
    lessons: [
      { id: 1, title: 'Introduction to Flutter', duration: '14:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 2, title: 'Setting Up Development Environment', duration: '18:20', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 3, title: 'Dart Basics', duration: '22:45', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 4, title: 'State Management with Provider', duration: '28:10', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 5, title: 'Building UI with Widgets', duration: '35:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 6, title: 'Navigation & Routing', duration: '20:15', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 7, title: 'API Integration', duration: '30:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
    ]
  },
  3: {
    id: 3,
    title: 'Complete Web Design: from Figma to Webflow',
    instructor: 'Emily Rodriguez',
    lessons: [
      { id: 1, title: 'Design Principles', duration: '16:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 2, title: 'Color Theory', duration: '20:20', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 3, title: 'Typography', duration: '18:45', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 4, title: 'Webflow Basics', duration: '25:10', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 5, title: 'Responsive Design', duration: '30:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: true },
      { id: 6, title: 'Animations & Interactions', duration: '28:15', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
      { id: 7, title: 'Launch Your Site', duration: '22:00', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', completed: false },
    ]
  }
};

const ClassRoom = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    // লোড কোর্স ডেটা
    const courseData = COURSE_LESSONS[courseId];
    if (courseData) {
      setCourse(courseData);
      // প্রথম অসম্পূর্ণ লেসন খুঁজে বের করা
      const firstIncompleteIndex = courseData.lessons.findIndex(l => !l.completed);
      const startIndex = firstIncompleteIndex !== -1 ? firstIncompleteIndex : 0;
      setCurrentLessonIndex(startIndex);
      setCurrentLesson(courseData.lessons[startIndex]);
      
      // কমপ্লিটেড লেসন ট্র্যাক করা
      const completed = courseData.lessons
        .filter(l => l.completed)
        .map(l => l.id);
      setCompletedLessons(completed);
      
      // প্রোগ্রেস ক্যালকুলেশন
      const completedCount = completed.length;
      const total = courseData.lessons.length;
      setProgress(Math.round((completedCount / total) * 100));
    }
  }, [courseId]);

  // ভিডিও শেষ হলে পরবর্তী লেসনে যাওয়া
  const handleVideoEnd = () => {
    if (currentLesson && !currentLesson.completed) {
      // বর্তমান লেসন কমপ্লিটেড মার্ক করা
      const updatedCourse = { ...course };
      updatedCourse.lessons[currentLessonIndex].completed = true;
      setCourse(updatedCourse);
      
      // কমপ্লিটেড লেসনে যোগ করা
      setCompletedLessons(prev => [...prev, currentLesson.id]);
      
      // প্রোগ্রেস আপডেট
      const completedCount = completedLessons.length + 1;
      const total = course.lessons.length;
      setProgress(Math.round((completedCount / total) * 100));
    }

    // পরবর্তী লেসনে যাওয়া
    const nextIndex = currentLessonIndex + 1;
    if (nextIndex < course?.lessons.length) {
      setCurrentLessonIndex(nextIndex);
      setCurrentLesson(course.lessons[nextIndex]);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.load();
      }
    } else {
      // সব লেসন শেষ
      alert('🎉 Congratulations! You have completed all lessons!');
    }
  };

  // লেসন সিলেক্ট করা
  const selectLesson = (index) => {
    const lesson = course?.lessons[index];
    if (lesson) {
      setCurrentLessonIndex(index);
      setCurrentLesson(lesson);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.load();
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!course || !currentLesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 sm:h-12 sm:w-12 animate-spin rounded-full border-4 border-teal-500 border-t-transparent"></div>
          <p className="text-sm sm:text-base text-gray-500">Loading course...</p>
        </div>
      </div>
    );
  }

  const totalLessons = course.lessons.length;
  const completedCount = completedLessons.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-3 sm:px-4 py-3 sm:py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <Link
              to="/my-class"
              className="flex items-center gap-1 sm:gap-2 text-gray-600 transition hover:text-teal-500 flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 sm:h-5 sm:w-5">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs sm:text-sm">Back</span>
            </Link>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 truncate">
                {course.title}
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 truncate">
                Instructor: {course.instructor}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="text-right">
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-teal-500">{progress}% Complete</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">{completedCount}/{totalLessons} lessons</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
          {/* Left: Video Player */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-black shadow-xl">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  className="h-full w-full"
                  controls
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={currentLesson.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 sm:p-4 backdrop-blur-sm transition hover:bg-white/30"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Video Info */}
              <div className="bg-white px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 line-clamp-2">
                  {currentLesson.title}
                </h2>
                <div className="mt-1.5 sm:mt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                  <span>Lesson {currentLessonIndex + 1} of {totalLessons}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Duration: {currentLesson.duration}</span>
                  {currentLesson.completed && (
                    <span className="ml-0 sm:ml-2 rounded-full bg-emerald-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-emerald-700">
                      ✅ Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Lesson List */}
          <div className="lg:w-96 w-full">
            <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">Course Content</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {completedCount} of {totalLessons} lessons completed
                </p>
                {/* Progress Bar */}
                <div className="mt-1.5 sm:mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-teal-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] overflow-y-auto p-3 sm:p-4">
                <ul className="space-y-1.5 sm:space-y-2">
                  {course.lessons.map((lesson, index) => {
                    const isActive = index === currentLessonIndex;
                    const isCompleted = lesson.completed;
                    
                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => selectLesson(index)}
                          className={`w-full rounded-lg sm:rounded-xl p-2.5 sm:p-3 text-left transition-all duration-200 ${
                            isActive
                              ? 'bg-teal-50 ring-2 ring-teal-500'
                              : isCompleted
                              ? 'bg-emerald-50 hover:bg-emerald-100/50'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center">
                              {isCompleted ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" className="h-4 w-4 sm:h-5 sm:w-5">
                                  <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              ) : isActive ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" className="h-4 w-4 sm:h-5 sm:w-5">
                                  <path d="M5 3l14 9-14 9V3z" />
                                </svg>
                              ) : (
                                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] sm:text-xs font-semibold text-gray-600">
                                  {index + 1}
                                </span>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-xs sm:text-sm font-medium truncate ${
                                isActive ? 'text-teal-700' : isCompleted ? 'text-emerald-700' : 'text-gray-700'
                              }`}>
                                {lesson.title}
                              </p>
                              <p className="text-[10px] sm:text-xs text-gray-400">{lesson.duration}</p>
                            </div>
                            {isCompleted && (
                              <span className="shrink-0 text-[10px] sm:text-xs text-emerald-600">✓ Done</span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
              <button
                onClick={() => {
                  if (currentLessonIndex > 0) {
                    selectLesson(currentLessonIndex - 1);
                  }
                }}
                disabled={currentLessonIndex === 0}
                className={`flex-1 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold transition ${
                  currentLessonIndex === 0
                    ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  if (currentLessonIndex < totalLessons - 1) {
                    selectLesson(currentLessonIndex + 1);
                  }
                }}
                disabled={currentLessonIndex === totalLessons - 1}
                className={`flex-1 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-center text-xs sm:text-sm font-semibold transition ${
                  currentLessonIndex === totalLessons - 1
                    ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'bg-teal-500 text-white hover:bg-teal-600'
                }`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;