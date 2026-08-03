// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password, rememberMe });
    alert('Login functionality will be implemented here.');
  };

  return (
    <>
      {/* Login Form - Direct without Hero Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 min-h-[80vh] flex items-center">
        <div className="mx-auto w-full max-w-md px-4 sm:px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Welcome Back
              </h2>
              <p className="mt-1 sm:mt-2 text-sm text-gray-500">
                Sign in to access your courses and continue learning
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 sm:mb-2 block text-sm font-semibold text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1.5 sm:mb-2 block text-sm font-semibold text-slate-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 sm:py-3 pr-12 text-sm sm:text-base text-black transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                  />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-teal-500 transition hover:text-teal-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3 sm:py-4 text-sm font-bold text-white shadow-lg shadow-teal-500/30 transition hover:bg-teal-600 hover:shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Sign In
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/signup" className="font-semibold text-teal-500 transition hover:text-teal-600 hover:underline">
                  Sign up now
                </Link>
              </p>
            </form>

            {/* Divider */}
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons - Only Google */}
            <div className="grid grid-cols-1 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 sm:py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:border-teal-300"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;