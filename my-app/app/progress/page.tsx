'use client';

import { useState } from 'react';
import Footer from '../components/Footer';

const languages = [
  { 
    name: 'Spanish', 
    flag: '🇪🇸', 
    level: 'Intermediate', 
    progress: 65, 
    streak: 7, 
    totalTime: '24h 30m',
    wordsLearned: 234,
    lessonsCompleted: 12,
    accuracy: 87,
    xp: 1250,
    nextMilestone: 'Advanced (80%)',
    weeklyGoal: 5,
    weeklyProgress: 4
  },
  { 
    name: 'French', 
    flag: '🇫🇷', 
    level: 'Beginner', 
    progress: 35, 
    streak: 3, 
    totalTime: '12h 15m',
    wordsLearned: 89,
    lessonsCompleted: 6,
    accuracy: 78,
    xp: 650,
    nextMilestone: 'Intermediate (50%)',
    weeklyGoal: 3,
    weeklyProgress: 2
  },
  { 
    name: 'Hindi', 
    flag: '🇮🇳', 
    level: 'Advanced', 
    progress: 85, 
    streak: 12, 
    totalTime: '45h 20m',
    wordsLearned: 456,
    lessonsCompleted: 18,
    accuracy: 92,
    xp: 2100,
    nextMilestone: 'Expert (95%)',
    weeklyGoal: 7,
    weeklyProgress: 7
  }
];

const achievements = [
  { id: 1, title: 'First Steps', description: 'Complete your first lesson', icon: '🎯', earned: true, date: '2024-01-15' },
  { id: 2, title: 'Week Warrior', description: 'Practice for 7 days in a row', icon: '🔥', earned: true, date: '2024-01-22' },
  { id: 3, title: 'Vocabulary Master', description: 'Learn 100 new words', icon: '📚', earned: false, date: null },
  { id: 4, title: 'Grammar Guru', description: 'Complete 10 grammar exercises', icon: '📝', earned: false, date: null },
  { id: 5, title: 'Conversation Starter', description: 'Complete 5 speaking exercises', icon: '🗣️', earned: false, date: null },
  { id: 6, title: 'Reading Champion', description: 'Read 10 articles', icon: '📖', earned: false, date: null }
];

const weeklyStats = [
  { day: 'Mon', lessons: 2, time: '30m', streak: true },
  { day: 'Tue', lessons: 1, time: '15m', streak: true },
  { day: 'Wed', lessons: 3, time: '45m', streak: true },
  { day: 'Thu', lessons: 2, time: '30m', streak: true },
  { day: 'Fri', lessons: 1, time: '20m', streak: true },
  { day: 'Sat', lessons: 4, time: '60m', streak: true },
  { day: 'Sun', lessons: 2, time: '25m', streak: true }
];

export default function ProgressPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Your Progress
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Language Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Language Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Language Progress
              </h2>
              <div className="space-y-4">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    onClick={() => setSelectedLanguage(language.name)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedLanguage === language.name
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {language.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {language.level} • {language.totalTime} studied
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {language.progress}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {language.streak} day streak
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${language.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                This Week&apos;s Activity
              </h2>
              <div className="grid grid-cols-7 gap-2">
                {weeklyStats.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      {day.day}
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs ${
                      day.streak 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      <div className="font-semibold">{day.lessons}</div>
                      <div className="text-xs">{day.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Study Time</span>
                  <span className="font-semibold text-gray-900 dark:text-white">95h 45m</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Streak</span>
                  <span className="font-semibold text-gray-900 dark:text-white">12 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Lessons Completed</span>
                  <span className="font-semibold text-gray-900 dark:text-white">67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Words Learned</span>
                  <span className="font-semibold text-gray-900 dark:text-white">1,069</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.earned
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <div className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        achievement.earned 
                          ? 'text-green-800 dark:text-green-400' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`text-sm ${
                        achievement.earned 
                          ? 'text-green-600 dark:text-green-500' 
                          : 'text-gray-500 dark:text-gray-500'
                      }`}>
                        {achievement.description}
                      </p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                          Earned on {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Goals */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                This Week&apos;s Goals
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Daily Practice</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">7/7</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Study Time</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">3.5/4h</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">New Words</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">30/50</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
