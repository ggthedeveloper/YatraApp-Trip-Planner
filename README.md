# 🌍 YatraApp – Smart Trip Planner

A modern, lightweight **client-side trip planner** designed to help users explore and organize trips across India efficiently.  
Built using **HTML, CSS, and JavaScript**, YatraApp delivers an interactive travel experience powered by **Dynamic Programming (0/1 Knapsack algorithm)** to generate optimized itineraries based on time and budget constraints.

🔗 **Live Demo:**  
https://ggthedeveloper.github.io/YatraApp-Trip-Planner/

---

## ✨ Features

- 🧭 **Multi-City Travel Planning**  
  Explore destinations like Delhi, Jaipur, Mumbai, Varanasi, Kerala, and Goa

- ⚙️ **Smart Itinerary Optimization**  
  Uses a **0/1 Knapsack algorithm** to optimize travel plans based on:
  - Time constraints
  - Budget limits

- 🗺️ **Interactive Map Integration**  
  Visualize locations using **Leaflet.js**

- 🧠 **AI-Inspired Travel Tips**  
  Get helpful suggestions for attractions

- 👤 **User Profile System**  
  - Save trips locally using `localStorage`
  - Manage preferences (name, theme, saved trips)

- 💾 **Save & Load Trips**  
  Easily store and revisit your travel plans

- 🌙 **Dark Mode Support**  
  Clean and responsive UI across themes

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

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Maps:** Leaflet.js  
- **Storage:** Browser LocalStorage  
- **Deployment:** GitHub Pages  

---

## 📁 Project Structure
YatraApp-Trip-Planner/
│
├── index.html      # Main application UI
├── style.css       # Styling and responsive design
├── script.js       # Core logic (planner, auth, map, UI)
└── README.md       # Project documentation

---

## 🚀 How It Works

1. Select a city  
2. Choose attractions  
3. Set your:
   - Time limit  
   - Budget  
4. The system generates an **optimized itinerary**  
5. Save your trip for later use  

---

## 🌐 Deployment

This is a **fully static project**, so deployment is simple:

### Using GitHub Pages:
1. Go to repository **Settings**  
2. Navigate to **Pages**  
3. Select:
   - Branch: `main`  
   - Folder: `/root`  
4. Save and access your live site  

---

## 🎯 Future Improvements

- Backend integration (user authentication & cloud storage)  
- Real-time travel data (weather, traffic)  
- Mobile app version  
- Recommendation system using ML  
- More cities & dynamic APIs  

---

## 👨‍💻 Author

**Gaurav Gautam**  
---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## ⭐ Support

If you like this project:
- ⭐ Star the repo  
- 🍴 Fork it  
- 🛠️ Contribute improvements  
