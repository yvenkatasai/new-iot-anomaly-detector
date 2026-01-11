# IoT Detector App

## Overview
A React-based IoT sensor data dashboard that displays real-time data from Firebase Firestore. The application visualizes sensor readings with animated statistics, time-series charts, and anomaly detection tables.

## Project Structure
```
├── src/
│   ├── components/       # React UI components
│   │   ├── AnimatedStat.jsx
│   │   ├── AnomalyTable.jsx
│   │   ├── ConnectionStatus.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Header.jsx
│   │   ├── StatsCards.jsx
│   │   └── TimeSeriesChart.jsx
│   ├── firebase/         # Firebase configuration
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   ├── Dashboard.jsx     # Dashboard layout
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── scripts/              # Utility scripts
```

## Tech Stack
- React 19 with Vite 7
- Firebase/Firestore for real-time data
- Chart.js & Recharts for data visualization
- Tailwind CSS 4 for styling

## Environment Variables Required
The app requires the following Firebase environment variables:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

## Running the App
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Preview: `npm run preview`

## Recent Changes
- 2026-01-11: Initial import and Replit environment setup
