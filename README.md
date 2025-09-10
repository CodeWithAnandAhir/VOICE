# Voice Command Shopping Assistant

A minimalist, multilingual voice-first shopping list with smart suggestions.

## Demo
- Hosted URL: <ADD_LINK>
- Tech Stack: React + TypeScript, Vite, Tailwind, Web Speech API (with Vosk fallback), localStorage

## Features
- Voice commands to add/remove/update items (English + Hindi)
- NLP intent parsing (add/remove/find/quantity/filters)
- Smart suggestions: frequent items, seasonal picks, and substitutes
- Auto-categorized list (dairy, produce, snacks, etc.)
- Voice-activated search with price/brand filters
- Mobile-friendly, real-time visual feedback

## Getting Started
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build
# Vercel
vercel --prod
# or Firebase
firebase deploy
```

## Configuration
- `src/lib/seasonal.ts` – monthly items
- `src/lib/substitutes.ts` – substitute map
- `src/lib/categories.ts` – keyword→category

## License
MIT
