# CollGen.AI / CollIGen

A voice-enabled college information generar enquiry assistant .

CollGen.AI helps students, parents, and guests explore college options, compare institutions, and ask admission-related questions using text or microphone input.

## Why this project is useful

- AI-powered college advisor using the Google Gemini API.
- Voice input support with browser-based speech recognition.
- Text-to-speech responses for an interactive experience.
- Google sign-in and Firestore-backed chat history, role preferences, and settings.
- College database explorer with search, filters, sorting, and side-by-side comparison.

## Features

- Natural language chat interface for college enquiries.
- Real-time voice recording and speech synthesis.
- College dataset lookup and filtering by location, tier, exam, fees, and course level.
- Save user history and preferences via Firebase Authentication and Firestore.
- Maintainable codebase with a clear service layer for AI and speech.

## Getting started

### Prerequisites

- Node.js 18+ or newer
- npm
- A Google Gemini API key
- Firebase setup for auth and Firestore

### Installation

1. Install dependencies:

```bash
npm install
```

2. Copy the environment example and configure secrets:

```bash
cp .env.example .env
```

3. Open `.env` and set your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
APP_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

5. Open the app in your browser at:

```bash
http://localhost:3000
```

### Build for production

```bash
npm run build
```

### Preview a production build locally

```bash
npm run preview
```

### Type checking

```bash
npm run lint
```

## Usage

- Sign in with Google to save chat history and preferences.
- Type a college question or click the microphone button to ask by voice.
- Use the database explorer to search, filter, and compare colleges.
- Provide feedback on AI responses with upvote/downvote buttons.

## Project structure

- `src/App.tsx` — main chat UI, voice controls, database explorer, and college comparison.
- `src/AuthProvider.tsx` — Firebase auth, user profile, and preference management.
- `src/services/geminiService.ts` — Gemini AI request handling and prompt construction.
- `src/services/speechService.ts` — browser speech recognition and text-to-speech helpers.
- `src/data/colleges.ts` — offline college dataset used by the app.
- `src/firebase.ts` — Firebase initialization and shared Firestore helpers.
- `vite.config.ts` — Vite configuration for environment injection and plugins.

## Configuration notes

- The app reads `GEMINI_API_KEY` from environment variables via Vite.
- `firebase-applet-config.json` contains the Firebase app configuration.
- `firebase-blueprint.json` and `firestore.rules` are included for Firestore security and deployment guidance.

## Getting help

If you need help or want to report an issue:

- Open an issue in this repository.
- Review `src/services/geminiService.ts` for AI behavior.
- Review `src/App.tsx` for UI and feature implementation.

## Contributing

Contributions are welcome.

- Fork the repo and create a branch for your changes.
- Submit a pull request with a clear description of the change.
- If you want help before coding, open an issue first.

## Maintainers

Maintained by the CollGen.AI project owner.

> Note: This repository does not include a dedicated `LICENSE` file. Check repository metadata or owner guidance for licensing details.
