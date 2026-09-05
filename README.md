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

- ⚙️ **Smart 0/1 Knapsack Optimization + Must-Visit Pinning**  
  - Dynamic programming algorithm guarantees optimal experience within time and budget constraints.
  - ⭐ **Pin Must-Visit Places**: Guarantee your favorite spots while optimizing the rest of your day around them.

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
  - Numbered stop markers (`1`, `2`, `3`...) connected by directional dashed route polylines.
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

1. **Select a City:** Pick from Delhi, Jaipur, Mumbai, Varanasi, Kerala, or Goa.
2. **Browse & Pin:** Search attractions, filter by category, and pin must-visit places with the star icon.
3. **Set Constraints:** Adjust available sightseeing hours and budget in ₹.
4. **Optimise:** The 0/1 Knapsack algorithm computes the optimal itinerary with transit times and lunch.
5. **Explore & Export:** View the route on the map, listen to audio guides, export to PDF or your calendar, and save the trip!

---

## 🎯 Future Improvements

- Backend cloud synchronization (Firebase / Supabase)
- Multi-day trip planning (2-day and 3-day itineraries)
- Crowd estimation & live traffic integration
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
