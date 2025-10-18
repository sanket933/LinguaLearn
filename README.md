# LinguaLearn - Language Learning Platform

A modern, interactive language learning website built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🏠 **Homepage**
- Beautiful hero section with language selection
- Interactive language cards with difficulty levels
- Statistics and call-to-action buttons
- Responsive design with dark mode support

### 📚 **Interactive Lessons**
- Structured lesson progression (Beginner → Intermediate → Advanced)
- Vocabulary learning with pronunciation guides
- Practice exercises with immediate feedback
- Sample conversations and grammar examples
- Progress tracking for each lesson

### 🎯 **Practice Mode**
- Multiple practice types:
  - Vocabulary Builder
  - Grammar Practice
  - Listening Comprehension
  - Speaking Practice
  - Reading Comprehension
  - Writing Exercises
- Interactive quizzes with explanations
- Score tracking and performance feedback

### 📊 **Progress Tracking**
- Multi-language progress monitoring
- Weekly activity visualization
- Achievement system with badges
- Study goals and streak tracking
- Detailed statistics and analytics

### 🎨 **Design Features**
- Modern, clean UI with gradient accents
- Fully responsive design
- Dark mode support
- Smooth animations and transitions
- Custom scrollbars and hover effects
- Mobile-first approach

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons
- **State Management**: React useState hooks

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
my-app/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navigation.tsx   # Main navigation with language selector
│   │   ├── HeroSection.tsx  # Homepage hero section
│   │   └── Footer.tsx       # Site footer
│   ├── lessons/             # Lessons page
│   │   └── page.tsx
│   ├── practice/            # Practice exercises page
│   │   └── page.tsx
│   ├── progress/            # Progress tracking page
│   │   └── page.tsx
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets (currently empty)
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Language Support
**Available Languages:**
- Spanish 🇪🇸
- French 🇫🇷
- Hindi 🇮🇳

### Interactive Elements
- Language selection dropdown
- Lesson progress bars
- Practice quiz system
- Achievement badges
- Weekly activity calendar
- Responsive navigation

### Custom Styling
- Gradient backgrounds and text
- Custom animations (fadeIn, slideIn, pulse)
- Hover effects and transitions
- Dark mode compatibility
- Custom scrollbars
- Card-based layouts

## Future Enhancements

- User authentication and profiles
- Real-time progress synchronization
- Audio pronunciation features
- Social learning features
- Advanced analytics
- Mobile app integration
- AI-powered personalized learning paths

## Contributing

This is a demo project showcasing modern web development practices for language learning applications.

## License

This project is for educational and demonstration purposes.
