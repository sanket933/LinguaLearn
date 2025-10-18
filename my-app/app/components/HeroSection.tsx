'use client';

import { useState } from 'react';
import Link from 'next/link';

const languageStats = [
  { language: 'Spanish', learners: '500M+', difficulty: 'Easy', color: 'from-red-500 to-orange-500' },
  { language: 'French', learners: '280M+', difficulty: 'Medium', color: 'from-blue-500 to-indigo-500' },
  { language: 'Hindi', learners: '600M+', difficulty: 'Medium', color: 'from-orange-500 to-yellow-500' },
];

export default function HeroSection() {
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn Languages
            <span className="block text-blue-600 dark:text-blue-400">
              Made Simple
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Master new languages with interactive lessons and practice exercises.
          </p>

          {/* Language Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {languageStats.map((lang) => (
              <div
                key={lang.language}
                onClick={() => setSelectedLanguage(lang.language)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedLanguage === lang.language
                    ? 'ring-2 ring-blue-500 shadow-lg scale-105'
                    : 'hover:shadow-md hover:scale-102'
                } bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${lang.color} mx-auto mb-3 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">
                    {lang.language.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {lang.language}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/lessons"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/practice"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-colors"
            >
              Practice
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">15M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
