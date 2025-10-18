// Sample lessonContents data for language lessons
interface Vocabulary {
  word: string;
  translation: string;
  pronunciation: string;
  audio?: string;
}

interface Example {
  sentence: string;
  meaning: string;
}

interface LessonSection {
  title: string;
  type: 'vocabulary' | 'grammar' | 'examples' | 'practice';
  vocabulary?: Vocabulary[];
  content?: string;
  examples?: Example[];
  question?: string;
  options?: string[];
  correct?: number;
  explanation?: string;
}

export const lessonContents: Record<string, LessonSection[]> = {
  spanish: [
    {
      title: "Spanish Vocabulary Basics",
      type: "vocabulary",
      vocabulary: [
        { word: "Hola", translation: "Hello", pronunciation: "OH-lah", audio: "/chopin_guitar.mp3.mp3" },
        { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-see-ahs", audio: "/myword.mp3.mp3" }
      ]
    },
    {
      title: "Simple Sentences",
      type: "examples",
      examples: [
        { sentence: "Mi nombre es Juan.", meaning: "My name is Juan." },
        { sentence: "¿Cómo estás?", meaning: "How are you?" },
      ]
    },
    {
      title: "Grammar: Gender Agreement",
      type: "grammar",
      content: "In Spanish, nouns and adjectives must agree in gender (masculine/feminine) and number (singular/plural)."
    },
    {
      title: "Practice Quiz",
      type: "practice",
      question: "What is the Spanish word for 'Thank you'?",
      options: ["Hola", "Gracias", "Adiós", "Por favor"],
      correct: 1,
      explanation: "'Gracias' means 'Thank you' in Spanish."
    }
  ],
  french: [
    {
      title: "French Vocabulary Basics",
      type: "vocabulary",
      vocabulary: [
        { word: "Bonjour", translation: "Hello", pronunciation: "bon-ZHOOR" },
        { word: "Merci", translation: "Thank you", pronunciation: "mer-SEE" }
      ]
    },
    {
      title: "Simple Sentences",
      type: "examples",
      examples: [
        { sentence: "Je m'appelle Marie.", meaning: "My name is Marie." },
        { sentence: "Comment allez-vous?", meaning: "How are you?" }
      ]
    },
    {
      title: "Grammar: Articles",
      type: "grammar",
      content: "French uses definite (le, la, les) and indefinite (un, une, des) articles that must agree with the noun's gender and number."
    },
    {
      title: "Practice Quiz",
      type: "practice",
      question: "What is the French word for 'Hello'?",
      options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"],
      correct: 0,
      explanation: "'Bonjour' means 'Hello' in French."
    }
  ],
  hindi: [
    {
      title: "Hindi Vocabulary Basics",
      type: "vocabulary",
      vocabulary: [
        { word: "नमस्ते", translation: "Hello", pronunciation: "Namaste", audio: "/chopin_guitar.mp3.mp3" },
        { word: "धन्यवाद", translation: "Thank you", pronunciation: "Dhanyavaad", audio: "/myword.mp3.mp3" }
      ]
    },
    {
      title: "Simple Sentences",
      type: "examples",
      examples: [
        { sentence: "मेरा नाम राम है।", meaning: "My name is Ram." },
        { sentence: "आप कैसे हैं?", meaning: "How are you?" },
      ]
    },
    {
      title: "Grammar: Subject-Verb Agreement",
      type: "grammar",
      content: "In Hindi, verbs agree with the subject in gender and number."
    },
    {
      title: "Practice Quiz",
      type: "practice",
      question: "What is the Hindi word for 'Thank you'?",
      options: ["नमस्ते", "धन्यवाद", "शुभकामनाएँ", "अलविदा"],
      correct: 1,
      explanation: "'धन्यवाद' means 'Thank you' in Hindi."
    }
  ]
};
