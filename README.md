# YatraApp Trip Planner

A lightweight, client-side trip planner for India built with HTML, CSS, and JavaScript.

## Features

- 5 city destinations: Delhi, Jaipur, Mumbai, Varanasi, Kerala, plus Goa in the hero section
- 0/1 Knapsack-based itinerary optimizer for time and budget constraints
- Interactive attraction cards with AI-informed tips
- Map view via Leaflet
- User account support with localStorage persistence
- Profile settings panel for name, theme, and saved trip management
- Save and load trips locally

## Files

- `index.html` — application shell and markup
- `style.css` — visual styling and responsive layout
- `script.js` — app logic, authentication, optimizer, map, and UI behavior

## Getting Started

1. Open `index.html` in a browser, or serve the project with a local static server:
   ```bash
   python3 -m http.server 8000
   ```
2. Open `http://localhost:8000` in your browser.

## Notes

- This project stores user accounts and saved trips in browser `localStorage`.
- The profile panel lets users update their name, toggle theme, clear saved trips, and sign out.
- The app can be extended with a backend, real authentication, and external APIs for live travel data.

## License

Use this project freely for personal or demo purposes.
