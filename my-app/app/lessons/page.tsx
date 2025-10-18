"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { lessonContents } from "../data/lessonContents";
// import AudioPlayer from "../components/AudioPlayer";

const lessons = [
  { id: "spanish", title: "Spanish Fundamentals", description: "Master Spanish basics and pronunciation", level: "Beginner", duration: "35 min", flag: "🇪🇸" },
  { id: "french", title: "French Essentials", description: "Learn French vocabulary and grammar", level: "Beginner", duration: "30 min", flag: "🇫🇷" },
  { id: "hindi", title: "Hindi Basics", description: "Comprehensive Hindi fundamentals", level: "Beginner", duration: "28 min", flag: "🇮🇳" }
];

type Section = {
  title: string;
  type: "vocabulary" | "grammar" | "examples" | "practice";
  vocabulary?: Array<{ word: string; translation: string; pronunciation: string; audio?: string }>;
  content?: string;
  examples?: Array<{ sentence: string; meaning: string }>;
  question?: string;
  options?: string[];
  correct?: number;
  explanation?: string;
};

export default function LessonsPage() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10 tracking-tight">
          Interactive Lessons
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar - Lesson List */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 text-center">Available Lessons</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all duration-200
                    ${selectedLesson === lesson.id
                      ? "border-blue-500 shadow-lg bg-blue-50 dark:bg-blue-900/30"
                      : "border-transparent bg-gray-100 dark:bg-gray-700 hover:border-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/40"
                    }`}
                >
                  <span className="text-3xl">{lesson.flag}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{lesson.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{lesson.description}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {lesson.level} • {lesson.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 min-h-[500px] flex flex-col">
            {selectedLesson ? (
              <>
                <div className="flex items-center mb-6">
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="mr-4 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800 transition"
                  >
                    ← Back
                  </button>
                  <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                    <span>
                      {lessons.find((l) => l.id === selectedLesson)?.flag}
                    </span>
                    {lessons.find((l) => l.id === selectedLesson)?.title}
                  </h2>
                </div>
                <div className="space-y-8">
                  {lessonContents[selectedLesson as string]?.map((section: Section, i: number) => (
                    <div
                      key={i}
                      className="mb-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow"
                    >
                      <h3 className="font-semibold text-xl mb-4 text-blue-600 dark:text-blue-400">
                        {section.title}
                      </h3>
                      {/* Vocabulary */}
                      {section.type === "vocabulary" && (
                        <ul className="space-y-3">
                          {section.vocabulary?.map((v, j) => (
                            <li
                              key={j}
                              className="flex flex-col gap-1 p-3 bg-white dark:bg-gray-800 rounded-lg shadow"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-lg">{v.word}</span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  {v.translation} <span className="italic">({v.pronunciation})</span>
                                </span>
                              </div>
                              {/* If you want to support audio, add v.audio and AudioPlayer here */}
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Grammar */}
                      {section.type === "grammar" && (
                        <p className="text-gray-800 dark:text-gray-200 text-lg">{section.content}</p>
                      )}
                      {/* Examples */}
                      {section.type === "examples" && (
                        <div className="space-y-4">
                          {section.examples?.map((ex, j) => (
                            <div
                              key={j}
                              className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow"
                            >
                              <p className="font-medium text-lg">{ex.sentence}</p>
                              <p className="text-gray-600 dark:text-gray-400 text-base">
                                → {ex.meaning}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Practice Quiz */}
                      {section.type === "practice" && (
                        <div>
                          <p className="mb-3 font-medium text-lg">{section.question}</p>
                          <ul className="space-y-2">
                            {section.options?.map((opt, j) => (
                              <li
                                key={j}
                                className={`p-2 rounded-md text-base ${
                                  j === section.correct
                                    ? "bg-green-100 dark:bg-green-800"
                                    : "bg-red-100 dark:bg-red-800"
                                }`}
                              >
                                {opt}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            {section.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-24">
                <span className="text-6xl mb-6">📚</span>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">
                  Select a lesson to see the content.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
