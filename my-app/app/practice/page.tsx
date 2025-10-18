
'use client';

// import AudioPlayer from '../components/AudioPlayer';

import { useState } from 'react';
import Footer from '../components/Footer';

const languages = [
  { code: 'spanish', name: 'Spanish', flag: '🇪🇸' },
  { code: 'french', name: 'French', flag: '🇫🇷' },
  { code: 'hindi', name: 'Hindi', flag: '🇮🇳' },
];

const practiceTypes = [
  { id: 'vocabulary', title: 'Vocabulary Builder', description: 'Learn and memorize new words', icon: '📚', color: 'from-blue-500 to-blue-600' },
  { id: 'grammar', title: 'Grammar Practice', description: 'Master grammar rules and structures', icon: '📝', color: 'from-green-500 to-green-600' },
  { id: 'listening', title: 'Listening Comprehension', description: 'Improve your listening skills', icon: '🎧', color: 'from-purple-500 to-purple-600' },
  { id: 'speaking', title: 'Speaking Practice', description: 'Practice pronunciation and conversation', icon: '🗣️', color: 'from-orange-500 to-orange-600' },
  { id: 'reading', title: 'Reading Comprehension', description: 'Enhance your reading skills', icon: '📖', color: 'from-pink-500 to-pink-600' },
  { id: 'writing', title: 'Writing Exercises', description: 'Practice writing in your target language', icon: '✍️', color: 'from-indigo-500 to-indigo-600' },
];

// Sample questions for each language and practice type
interface PracticeType {
  [key: string]: Array<{
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }>;
}

interface PracticeQuestions {
  [language: string]: PracticeType;
}

const practiceQuestions: PracticeQuestions = {
  spanish: {
    vocabulary: [
      {
        question: 'What is the Spanish word for "apple"?',
        options: ['Manzana', 'Casa', 'Libro', 'Perro'],
        correct: 0,
        explanation: 'Manzana means apple in Spanish.',
      },
    ],
    grammar: [
      {
        question: 'Select the correct definite article for "libro" (book):',
        options: ['La', 'El', 'Los', 'Las'],
        correct: 1,
        explanation: '"El libro" is correct because "libro" is masculine.',
      },
    ],
    listening: [
      {
        question: 'Listen and choose the word you hear: (audio not implemented)',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correct: 0,
        explanation: 'The audio says "Hola".',
      },
    ],
    speaking: [
      {
        question: 'How do you say "Good morning" in Spanish?',
        options: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'],
        correct: 1,
        explanation: '"Buenos días" means "Good morning".',
      },
    ],
    reading: [
      {
        question: 'What does "El gato duerme" mean?',
        options: ['The cat sleeps', 'The dog eats', 'The bird sings', 'The boy runs'],
        correct: 0,
        explanation: '"El gato duerme" means "The cat sleeps".',
      },
    ],
    writing: [
      {
        question: 'Type the Spanish word for "book".',
        options: ['Libro'],
        correct: 0,
        explanation: '"Libro" means "book" in Spanish.',
      },
    ],
  },
  french: {
    vocabulary: [
      {
        question: 'What is the French word for "water"?',
        options: ['Eau', 'Pain', 'Fromage', 'Vin'],
        correct: 0,
        explanation: '"Eau" means "water" in French.',
      },
    ],
    grammar: [
      {
        question: 'Select the correct definite article for "fille" (girl):',
        options: ['Le', 'La', 'Les', 'Un'],
        correct: 1,
        explanation: '"La fille" is correct because "fille" is feminine.',
      },
    ],
    listening: [
      {
        question: 'Listen and choose the word you hear: (audio not implemented)',
        options: ['Bonjour', 'Merci', 'Au revoir', 'Salut'],
        correct: 0,
        explanation: 'The audio says "Bonjour".',
      },
    ],
    speaking: [
      {
        question: 'How do you say "Thank you" in French?',
        options: ['Merci', 'Bonjour', 'Pardon', 'Salut'],
        correct: 0,
        explanation: '"Merci" means "Thank you".',
      },
    ],
    reading: [
      {
        question: 'What does "Le chien mange" mean?',
        options: ['The dog eats', 'The cat sleeps', 'The bird sings', 'The boy runs'],
        correct: 0,
        explanation: '"Le chien mange" means "The dog eats".',
      },
    ],
    writing: [
      {
        question: 'Type the French word for "bread".',
        options: ['Pain'],
        correct: 0,
        explanation: '"Pain" means "bread" in French.',
      },
    ],
  },
  hindi: {
    vocabulary: [
      {
        question: 'What is the Hindi word for "water"?',
        options: ['पानी', 'दूध', 'चाय', 'नमक'],
        correct: 0,
        explanation: '"पानी" means "water" in Hindi.',
      },
    ],
    grammar: [
      {
        question: 'Select the correct pronoun for "I" in Hindi:',
        options: ['तुम', 'मैं', 'आप', 'वह'],
        correct: 1,
        explanation: '"मैं" means "I" in Hindi.',
      },
    ],
    listening: [
      {
        question: 'Listen and choose the word you hear: (audio not implemented)',
        options: ['नमस्ते', 'धन्यवाद', 'शुभकामनाएँ', 'अलविदा'],
        correct: 0,
        explanation: 'The audio says "नमस्ते".',
      },
    ],
    speaking: [
      {
        question: 'How do you say "Thank you" in Hindi?',
        options: ['नमस्ते', 'धन्यवाद', 'कृपया', 'शुभकामनाएँ'],
        correct: 1,
        explanation: '"धन्यवाद" means "Thank you".',
      },
    ],
    reading: [
      {
        question: 'What does "बिल्ली सोती है" mean?',
        options: ['The cat sleeps', 'The dog eats', 'The bird sings', 'The boy runs'],
        correct: 0,
        explanation: '"बिल्ली सोती है" means "The cat sleeps".',
      },
    ],
    writing: [
      {
        question: 'Type the Hindi word for "milk".',
        options: ['दूध'],
        correct: 0,
        explanation: '"दूध" means "milk" in Hindi.',
      },
    ],
  },
};

export default function PracticePage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('spanish');
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  type Question = {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };

  const questions: Question[] =
    selectedLanguage && selectedPractice
      ? (practiceQuestions[selectedLanguage]?.[selectedPractice] as Question[]) ?? []
      : [];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetPractice = () => {
    setSelectedPractice(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Language Selector */}
        <div className="flex justify-center mb-8 space-x-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLanguage(lang.code);
                setSelectedPractice(null);
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
                setSelectedAnswer(null);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedLanguage === lang.code
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>

        {/* Practice Type Selection */}
        {!selectedPractice ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceTypes.map((practice) => (
              <div
                key={practice.id}
                onClick={() => setSelectedPractice(practice.id)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${practice.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {practice.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Practice Header */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {practiceTypes.find((p) => p.id === selectedPractice)?.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {score}/{questions.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Score
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {questions[currentQuestion].question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showResult && handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      showResult
                        ? index === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                          : selectedAnswer === index
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'
                        : selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="font-medium">{option}</span>
                  </button>
                ))}
              </div>
              {/* Result */}
              {showResult && (
                <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Explanation:</strong> {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}
              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={resetPractice}
                  className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  ← Back to Practice Types
                </button>
                <div className="space-x-3">
                  {!showResult ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      disabled={currentQuestion === questions.length - 1}
                    >
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Practice'}
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* Final Results */}
            {showResult && currentQuestion === questions.length - 1 && (
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Practice Complete!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You scored {score} out of {questions.length} questions
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={resetPractice}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={resetPractice}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Choose Another Practice
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
