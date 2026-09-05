# 🌍 YatraApp – Smart Trip Planner

A modern, lightweight **client-side trip planner** designed to help users explore and organize trips across India efficiently.  
Built using **HTML, CSS, and JavaScript**, YatraApp delivers an interactive travel experience powered by **Dynamic Programming (0/1 Knapsack algorithm)** to generate optimized itineraries based on time and budget constraints.

🔗 **Live Demo:**  
https://ggthedeveloper.github.io/YatraApp-Trip-Planner/

---

## 🧠 Algorithm & Optimization Approach

YatraApp uses a **smart optimization technique** to generate the best travel itinerary based on user constraints.

### 🎯 Problem Framing
The trip planning problem is modeled as a **0/1 Knapsack Problem**, where:

- Each attraction = an item  
- Time/Cost = weight  
- Experience/priority = value  
- Constraints = total available time or budget  

### ⚙️ Technique Used

- **Dynamic Programming (DP)** is used to efficiently compute the optimal selection of attractions.
- Ensures:
  - ✅ Maximum travel value (best experience)
  - ✅ Within user-defined constraints (time/budget)

### 💡 Why This Approach?

- Avoids brute-force combinations (which are exponential)
- Provides optimal results in **O(n × capacity)** time
- Scales well as the number of attractions increases

### 🚀 Outcome

Users get:
- A **balanced itinerary**
- Maximum utilization of time and budget
- Intelligent selection of places instead of random planning

---

## ✨ Features

- 🧭 **Multi-City Travel Planning**  
  Explore destinations like Delhi, Jaipur, Mumbai, Varanasi, Kerala, and Goa with 60+ verified attractions.

- 🗓️ **Multi-Day Itinerary Engine (1, 2, or 3 Days)**  
  Plan single-day or multi-day tours with tabbed daily schedules (`Day 1`, `Day 2`, `Day 3`). Uses spatial clustering and Dynamic Programming so attractions each day are geographically coherent and practical to travel between.

- ⚡ **Travel Pace Customization**  
  Choose between **Relaxed** (longer lingering, higher buffers), **Balanced** (standard exploration), or **Packed** (maximum sights covered) pacing.

- ⚙️ **Smart 0/1 Knapsack Optimization + Must-Visit Pinning**  
  - Dynamic programming algorithm guarantees optimal experience within time and budget constraints.
  - ⭐ **Pin Must-Visit Places**: Guarantee your favorite spots while optimizing the rest of your day around them.

- 🛣️ **True Road Routing (OSRM Driving Engine)**  
  Connected to the **Open Source Routing Machine (OSRM)** to fetch and draw actual turn-by-turn curved street paths between consecutive stops on Leaflet, with geodesic fallback.

- 🔃 **Interactive Stop Reordering & Removal**  
  Drag/reorder stops up and down or remove any unwanted stop directly from the itinerary timeline with instant, automatic recalculation of arrival times, transit durations, and route polylines.

- 📍 **One-Click Google Maps Navigation**  
  Direct links on each itinerary stop to launch turn-by-turn navigation or attraction lookup in Google Maps.

- ➕ **Add Custom Places & Hotels**  
  Add custom attractions, restaurants, or your hotel directly to the day's itinerary with custom timing, categories, and costs.

- 💱 **Multi-Currency Conversion**  
  Switch instantly between **₹ INR**, **$ USD**, **€ EUR**, and **£ GBP** across all cards, budgets, and generated itineraries.

- 🛡️ **Tourist Safety Essentials & Emergency Helplines**  
  Comprehensive safety modal with 24x7 India Tourist Helpline (1363), Emergency (112), Women Helpline (1091), Ambulance (102), local scam avoidance tips, and an interactive persistent safety checklist.

- 🌤️ **Live Real-Time Weather**  
  Integrated with **Open-Meteo API** to display real-time temperature, condition forecasts, and packing tips for each destination.

- 🚕 **Realistic Transit & Travel Time Estimation**  
  Calculates distance between sequential stops via the **Haversine formula**, estimating realistic transit duration, transit modes (Metro/Auto/Taxi), and transit fares in Indian urban traffic.

- 🍱 **Mid-Day Authentic Lunch Windows**  
  Schedules an authentic culinary lunch break (1:00 PM – 2:00 PM) featuring iconic regional dishes (e.g., Parathe Wali Gali in Delhi, Dal Baati in Jaipur, Sadya in Kerala, Goan Fish Curry).

- 💰 **Comprehensive Budget Breakdown**  
  Detailed estimation covering:
  - Monument & attraction entrance tickets
  - Local transit fares (auto-rickshaws, metro, taxis)
  - Regional meals, snacks & chai

- 🗺️ **Interactive Route Map with Sequential Polylines**  
  - Visualized using **Leaflet.js** and **CartoDB** basemaps.
  - Numbered stop markers (`1`, `2`, `3`...) connected by directional road-following route polylines.
  - Auto-adapts between Light and Dark map themes.

- 🔊 **Voice Audio Guide**  
  Listen to natural voice narration of attraction history, highlights, and local secrets powered by the **Web Speech API**.

- 🔍 **Instant Search & Category Filtering**  
  Filter attractions by categories (*Heritage, Spiritual, Nature, Culture, Food, Scenic, Shopping*) or search by keyword.

- ✅ **Interactive Day Checklist**  
  Check off attractions as you visit them during your trip with dynamic progress tracking.

- 📥 **Export to Print/PDF, Calendar & Sharing**  
  - Export printable travel vouchers formatted for PDF.
  - Download `.ics` iCalendar files for Google Calendar, Apple Calendar, and Outlook.
  - One-click itinerary sharing via WhatsApp and clipboard.

- 👤 **Interactive Profile & Saved Trips**  
  - Re-open saved trips anytime to view the complete itinerary and map route.
  - Guest mode support: plan trips immediately without forced login.
  - LocalStorage persistence.

- 🌙 **Dark Mode Support**  
  Seamless theme toggle with adaptive UI and dark map styling.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Modern JavaScript (ES6+)  
- **Routing Engine:** OSRM (Open Source Routing Machine) API  
- **Maps:** Leaflet.js, CartoDB Basemaps  
- **Weather API:** Open-Meteo API (Live forecast, no key required)  
- **Audio:** Web Speech API (`SpeechSynthesis`)  
- **Calendar:** RFC 5545 iCalendar (`.ics`) Generator  
- **Storage:** Browser LocalStorage  
- **Deployment:** GitHub Pages  

---

## 📁 Project Structure
```text
YatraApp-Trip-Planner/
│
├── index.html      # Application UI, structure, search bar & modals
├── style.css       # Design system, themes, map styling & print rules
├── script.js       # Core engine (Knapsack DP, Leaflet route, weather, audio, trips)
└── README.md       # Project documentation
```

---

## 🚀 How It Works

1. **Select a City & Duration:** Pick from Delhi, Jaipur, Mumbai, Varanasi, Kerala, or Goa, and set trip duration (1, 2, or 3 Days).
2. **Browse, Filter & Pin:** Search attractions, filter by category, and pin must-visit places with the star icon. Add custom places or hotels if desired.
3. **Set Constraints & Pace:** Adjust available sightseeing hours, pace (Relaxed, Balanced, Packed), and budget in your preferred currency (₹, $, €, £).
4. **Optimise:** The multi-day 0/1 Knapsack algorithm clusters and schedules optimal itineraries with real road paths, transit times, and lunch breaks.
5. **Customize & Navigate:** Reorder stops directly in the timeline, open Google Maps directions, listen to voice audio guides, and explore the interactive map.
6. **Export & Save:** Export to PDF/Print, download `.ics` calendar schedules, share via WhatsApp, and access tourist emergency helplines.

---

## 🎯 Future Improvements

- Backend cloud synchronization (Firebase / Supabase)
- Crowd estimation & live transit schedule APIs
- PWA (Progressive Web App) offline support  

---

## 👨‍💻 Author

***Gaurav Gautam***

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Support

If you like this project:
- ⭐ Star the repo  
- 🍴 Fork it  
- 🛠️ Contribute improvements  
