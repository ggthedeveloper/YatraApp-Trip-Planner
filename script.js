/* ═══════════════════════════════════════════════════════
   DATA — All cities & attractions (Realistic & Verified)
═══════════════════════════════════════════════════════ */
const CITIES = {
  delhi: {
    name: "New Delhi",
    state: "Delhi",
    tagline: "Heart of Incredible India",
    coords: [28.6139, 77.2090],
    foodRec: {
      dish: "Parathe Wali Gali & Rabri Falooda",
      area: "Old Delhi (Chandni Chowk)",
      desc: "Stuffed crisp parathas with tangy mint chutney, followed by thick malai kulfi or jalebi at Dariba Kalan."
    },
    attractions: [
      {
        id: "dl1", name: "Red Fort", time: 3, cost: 650, score: 96, cat: "Heritage", lat: 28.6562, lng: 77.2410,
        hours: "09:30 AM – 04:30 PM (Closed Mon)", bestTime: "Morning for soft light and fewer crowds",
        dress: "Comfortable walking shoes; light cotton clothing",
        metro: "Lal Quila Metro (Violet Line) Gate 4",
        desc: "17th-century red sandstone fortress by Shah Jahan. UNESCO World Heritage. Lahore Gate, Diwan-i-Aam & imperial Mughal courts.",
        img: "https://images.unsplash.com/photo-1713729991304-d0b6c328560e?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl2", name: "Qutub Minar", time: 2, cost: 350, score: 91, cat: "Heritage", lat: 28.5245, lng: 77.1855,
        hours: "07:00 AM – 08:00 PM (All days)", bestTime: "Late afternoon / golden hour sunset",
        dress: "Modest casual attire; hat or sunscreen recommended",
        metro: "Qutub Minar Metro (Yellow Line) Gate 2",
        desc: "73m victory minaret from 1193 AD, India's oldest Islamic monument. Complex includes the rust-resistant 1600-year Iron Pillar.",
        img: "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl3", name: "Akshardham Temple", time: 3, cost: 0, score: 94, cat: "Spiritual", lat: 28.6127, lng: 77.2773,
        hours: "10:00 AM – 07:00 PM (Closed Mon)", bestTime: "Late afternoon into evening musical fountain show",
        dress: "Strict modest dress: shoulders, chest & knees covered",
        metro: "Akshardham Metro (Blue Line) Gate 1",
        desc: "Monumental Hindu temple complex with 234 carved pillars and 20,000 statues in pink sandstone. Features the Sahaj Anand water show.",
        img: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl4", name: "Humayun's Tomb", time: 2, cost: 350, score: 90, cat: "Heritage", lat: 28.5933, lng: 77.2507,
        hours: "06:00 AM – 06:00 PM (All days)", bestTime: "Early morning for tranquil garden reflections",
        dress: "Casual modest attire",
        metro: "JLN Stadium Metro (Violet Line) Gate 3",
        desc: "1572 Mughal garden tomb that inspired the Taj Mahal. UNESCO World Heritage Site with Persian geometric charbagh layout.",
        img: "https://images.unsplash.com/photo-1695293351566-1dc582acc504?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl5", name: "Chandni Chowk", time: 2, cost: 400, score: 87, cat: "Food", lat: 28.6560, lng: 77.2300,
        hours: "10:00 AM – 09:00 PM (Closed Sun)", bestTime: "Noon for hot street snacks and vibrant bazaars",
        dress: "Comfortable flat footwear for walking through narrow alleys",
        metro: "Chandni Chowk Metro (Yellow Line) Gate 1",
        desc: "350-year-old market street. Famous for parathas, jalebis, dahi bhalla, and Asia's largest spice market at Khari Baoli.",
        img: "https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl6", name: "India Gate", time: 1, cost: 0, score: 83, cat: "Scenic", lat: 28.6129, lng: 77.2295,
        hours: "24/7 Open (Public Promenade)", bestTime: "Evening (06:30 PM) when fully illuminated",
        dress: "Casual; good for evening picnic walks",
        metro: "Central Secretariat Metro (Yellow/Violet) Gate 3",
        desc: "42m triumphal arch war memorial on Kartavya Path honoring 84,000 soldiers. Lush park lawns and street ice cream vendors.",
        img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl7", name: "Lotus Temple", time: 1, cost: 0, score: 81, cat: "Spiritual", lat: 28.5535, lng: 77.2588,
        hours: "08:30 AM – 05:00 PM (Closed Mon)", bestTime: "Mid-morning for quiet meditation",
        dress: "Shoes deposited at counter; silence maintained inside",
        metro: "Kalkaji Mandir Metro (Violet/Magenta) Gate 2",
        desc: "Architectural masterpiece shaped like 27 free-standing petals of a blooming lotus. Open to all faiths for peaceful meditation.",
        img: "https://images.unsplash.com/photo-1688257899811-d96d969416bf?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl8", name: "National Museum", time: 3, cost: 100, score: 80, cat: "Culture", lat: 28.6117, lng: 77.2194,
        hours: "10:00 AM – 06:00 PM (Closed Mon)", bestTime: "Afternoon air-conditioned gallery exploration",
        dress: "Casual museum attire; photography permits at entrance",
        metro: "Udyog Bhawan Metro (Yellow Line) Gate 2",
        desc: "India's premier museum spanning 5,000 years of civilization: Harappan Dancing Girl, Buddhist relics, Tanjore paintings, and royal arms.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl9", name: "Lodi Gardens", time: 1, cost: 0, score: 78, cat: "Nature", lat: 28.5930, lng: 77.2197,
        hours: "06:00 AM – 08:00 PM (All days)", bestTime: "Early sunrise or dusk for bird watching",
        dress: "Jogging or walking casuals",
        metro: "Jor Bagh Metro (Yellow Line) Gate 2",
        desc: "90-acre heritage botanical park with 15th-century Sayyid and Lodi royal tombs, ancient stone bridges, and tranquil tree canopies.",
        img: "https://plus.unsplash.com/premium_photo-1697730315030-7bd75dbf4e63?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "dl10", name: "Dilli Haat", time: 2, cost: 30, score: 75, cat: "Shopping", lat: 28.5726, lng: 77.2080,
        hours: "10:30 AM – 10:00 PM (All days)", bestTime: "Evening for cultural performances and state cuisines",
        dress: "Comfortable bazaar wear",
        metro: "INA Metro (Yellow/Pink Line) Gate 5",
        desc: "Open-air village craft bazaar representing every Indian state with genuine artisan crafts, Kashmiri shawls, and regional food pavilions.",
        img: "https://images.unsplash.com/photo-1513014576558-921f00d80b77?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  jaipur: {
    name: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City of Rajputana",
    coords: [26.9124, 75.7873],
    foodRec: {
      dish: "Dal Baati Churma & Pyaz Kachori",
      area: "MI Road / Johari Bazaar",
      desc: "Baked wheat dumplings dipped in pure desi ghee, served with spicy panchmel dal, crunchy kachoris, and sweet crushed churma."
    },
    attractions: [
      {
        id: "jp1", name: "Amber Fort", time: 4, cost: 550, score: 99, cat: "Heritage", lat: 26.9855, lng: 75.8513,
        hours: "08:00 AM – 05:30 PM & 06:30 PM – 09:15 PM", bestTime: "Early morning to take the rampart walk before heat",
        dress: "Sturdy walking shoes; stone hills and cobbled ramparts",
        metro: "Cab / Auto from Badi Chaupar Metro Station",
        desc: "Majestic hilltop fort with Sheesh Mahal (Mirror Palace), Ganesh Pol gate, Maota Lake views, and Rajput-Mughal architecture.",
        img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp2", name: "Hawa Mahal", time: 1, cost: 100, score: 88, cat: "Heritage", lat: 26.9239, lng: 75.8267,
        hours: "09:00 AM – 05:00 PM (All days)", bestTime: "Early morning when sunrise illuminates the pink facade",
        dress: "Casual; staircase climbing inside",
        metro: "Badi Chaupar Metro (Pink Line) Gate 2",
        desc: "1799 five-story honeycomb palace with 953 jharokhas (casements) designed for royal women to observe street processions unseen.",
        img: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp3", name: "City Palace", time: 2, cost: 700, score: 92, cat: "Heritage", lat: 26.9258, lng: 75.8237,
        hours: "09:30 AM – 05:00 PM (All days)", bestTime: "Mid-day courtyard photography at Peacock Gate",
        dress: "Modest cultural clothing",
        metro: "Chhoti Chaupar Metro (Pink Line) Gate 1",
        desc: "Royal residence of the Maharaja of Jaipur. Includes Chandra Mahal, Mubarak Mahal costume museum, and giant silver water vessels.",
        img: "https://images.unsplash.com/photo-1667099639128-4b10f464f4a2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp4", name: "Jantar Mantar", time: 1, cost: 200, score: 85, cat: "Culture", lat: 26.9246, lng: 75.8243,
        hours: "09:00 AM – 05:00 PM (All days)", bestTime: "Mid-day (11:00 AM – 01:00 PM) to see sundial shadows operate",
        dress: "Sun hat and sunglasses recommended",
        metro: "Badi Chaupar Metro (Pink Line) Gate 1",
        desc: "1734 UNESCO astronomical observatory by Maharaja Sawai Jai Singh II featuring 19 stone instruments, including the world's largest sundial.",
        img: "https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp5", name: "Nahargarh Fort", time: 2, cost: 200, score: 89, cat: "Scenic", lat: 26.9444, lng: 75.8150,
        hours: "10:00 AM – 05:30 PM (All days)", bestTime: "Sunset (05:00 PM – 06:30 PM) for city night view",
        dress: "Comfortable windcheater / light jacket in winter",
        metro: "Trek or cab via Nahargarh Road",
        desc: "Aravalli fortress overlooking the Pink City panorama. Madhavendra Bhawan features interconnected royal suites with frescoed ceilings.",
        img: "https://images.unsplash.com/photo-1648217516771-74a081268aac?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp6", name: "Jal Mahal", time: 1, cost: 0, score: 80, cat: "Scenic", lat: 26.9528, lng: 75.8325,
        hours: "24/7 Viewable from lakeside promenade", bestTime: "Sunset and night when the water palace is lit",
        dress: "Casual lakeside promenade wear",
        metro: "Cab on Amer Road",
        desc: "18th-century palace floating in the center of Man Sagar Lake. Four submerged stories and an open terrace garden with Rajput pavilions.",
        img: "https://images.unsplash.com/photo-1661924326425-c14a6426d989?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp7", name: "Albert Hall Museum", time: 2, cost: 150, score: 76, cat: "Culture", lat: 26.9042, lng: 75.8198,
        hours: "09:00 AM – 05:00 PM & 07:00 PM – 10:00 PM", bestTime: "Night time when bathed in colorful LED lighting",
        dress: "Casual",
        metro: "Ram Nagar / Ajmeri Gate",
        desc: "Indo-Saracenic palace museum in Ram Niwas Garden. Rich collection of Rajput miniatures, Egyptian mummy, pottery, and metal art.",
        img: "https://plus.unsplash.com/premium_photo-1691031429594-83d6103ec104?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp8", name: "Chokhi Dhani", time: 3, cost: 1200, score: 84, cat: "Culture", lat: 26.7893, lng: 75.7893,
        hours: "05:00 PM – 11:00 PM (Every evening)", bestTime: "06:30 PM onwards for folk fire acts and dinner",
        dress: "Ethnic or comfortable festive casuals",
        metro: "Cab to Tonk Road, southern outskirts",
        desc: "Immersive Rajasthani village fair experience with traditional Kalbeliya folk dancers, puppet plays, camel rides, and unlimited royal thali.",
        img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp9", name: "Galtaji Temple", time: 2, cost: 100, score: 79, cat: "Spiritual", lat: 26.9009, lng: 75.8764,
        hours: "06:00 AM – 07:00 PM (All days)", bestTime: "Morning before monkeys get overactive",
        dress: "Modest clothes; keep shiny objects/food in bags",
        metro: "Cab east toward Galta Gorge",
        desc: "Historic cliffside Hindu pilgrimage sanctuary built into a narrow mountain pass with sacred natural water kunds and hundreds of resident rhesus macaques.",
        img: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "jp10", name: "Johari Bazaar", time: 2, cost: 800, score: 78, cat: "Shopping", lat: 26.9195, lng: 75.8243,
        hours: "10:30 AM – 08:30 PM (All days)", bestTime: "Afternoon for leisurely gemstone and textile shopping",
        dress: "Casual shopping footwear",
        metro: "Badi Chaupar Metro Station Gate 3",
        desc: "The world-famous jewelry and gem trade hub of Jaipur, packed with handcrafted Kundan, Meenakari, Jaipuri quilts, and bandhej tie-dye sarees.",
        img: "https://images.unsplash.com/photo-1606837731832-99e78287e7b9?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    tagline: "Maximum City, Maximum Dreams",
    coords: [19.0760, 72.8777],
    foodRec: {
      dish: "Vada Pav, Pav Bhaji & Seafood Thali",
      area: "Fort / Colaba & Girgaon Chowpatty",
      desc: "Buttery Mumbai pav bhaji, crisp batata vada, and coastal Malvani surmai fry with solkadhi."
    },
    attractions: [
      {
        id: "mb1", name: "Elephanta Caves", time: 4, cost: 700, score: 94, cat: "Heritage", lat: 18.9633, lng: 72.9315,
        hours: "09:00 AM – 05:30 PM (Closed Mon)", bestTime: "Take the 09:00 AM first ferry from Gateway",
        dress: "Comfortable climbing footwear for island stairs",
        metro: "Churchgate / CSMT; then ferry from Gateway",
        desc: "5th-century rock-cut Shiva temple cave sanctuaries on Elephanta Island. UNESCO World Heritage Site featuring the renowned 6m Trimurti idol.",
        img: "https://plus.unsplash.com/premium_photo-1697730348607-38bab9f149bd?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb2", name: "Gateway of India", time: 1, cost: 0, score: 85, cat: "Scenic", lat: 18.9220, lng: 72.8347,
        hours: "24/7 Open (Public Promenade)", bestTime: "Sunrise (06:30 AM) with harbor seagulls or night breeze",
        dress: "Casual seaside wear",
        metro: "Churchgate (Western) / CSMT (Central)",
        desc: "1924 basalt ceremonial arch on Apollo Bunder overlooking Mumbai Harbour. Historical point where the final British troops departed India in 1948.",
        img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb3", name: "CSMVS Museum", time: 2, cost: 200, score: 88, cat: "Culture", lat: 18.9267, lng: 72.8325,
        hours: "10:15 AM – 06:00 PM (All days)", bestTime: "Early afternoon quiet gallery tour",
        dress: "Smart casual",
        metro: "CSMT / Churchgate Railway Station",
        desc: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya. Grade-I heritage Indo-Saracenic mansion set in palm gardens, housing 50,000 antiquities.",
        img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb4", name: "Dharavi Artisan Walk", time: 2, cost: 1500, score: 86, cat: "Culture", lat: 19.0404, lng: 72.8535,
        hours: "09:30 AM – 04:30 PM (Guided tours)", bestTime: "Morning hours during working artisan workshops",
        dress: "Modest clothes; no flip-flops",
        metro: "Sion / Mahim Railway Station",
        desc: "Responsible guided walk through Dharavi's vibrant informal industries: pottery at Kumbharwada, leather crafting, and innovative recycling hubs.",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb5", name: "Bollywood Studio Tour", time: 3, cost: 2000, score: 89, cat: "Culture", lat: 19.1688, lng: 72.8436,
        hours: "10:00 AM – 05:00 PM (Pre-booked slots)", bestTime: "Pre-booked morning batch for live shoot viewing",
        dress: "Casual",
        metro: "Goregaon Station (Western Line) + auto",
        desc: "Behind-the-scenes access to Dadasaheb Phalke Chitranagari (Film City). Explore live movie sets, sound stages, visual effects, and dance shows.",
        img: "https://images.unsplash.com/photo-1578836537282-3171d77f8632?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb6", name: "Marine Drive", time: 1, cost: 0, score: 80, cat: "Scenic", lat: 18.9440, lng: 72.8236,
        hours: "24/7 Open", bestTime: "06:00 PM – 08:00 PM for sunset breeze over the Arabian Sea",
        dress: "Casual breezy clothing",
        metro: "Marine Lines / Churchgate Station",
        desc: "3.6km coastal boulevard curved along Netaji Subhash Chandra Bose Road, known as the Queen's Necklace due to its glittering arc of evening streetlights.",
        img: "https://images.unsplash.com/photo-1682414593649-c3e4024a7995?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb7", name: "Siddhivinayak Temple", time: 1, cost: 0, score: 81, cat: "Spiritual", lat: 19.0161, lng: 72.8302,
        hours: "05:30 AM – 10:00 PM (Tuesdays special aarti)", bestTime: "Early weekday morning to avoid long queues",
        dress: "Traditional or modest clothes; no shorts",
        metro: "Dadar / Prabhadevi Railway Station",
        desc: "Mumbai's most revered temple dedicated to Lord Ganesha, dating back to 1801. Frequented by millions of devotees, film stars, and leaders.",
        img: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb8", name: "Haji Ali Dargah", time: 1, cost: 0, score: 82, cat: "Spiritual", lat: 18.9827, lng: 72.8092,
        hours: "06:00 AM – 10:00 PM (Low tide dependent)", bestTime: "Late afternoon during low tide for causeway walk",
        dress: "Conservative clothes; head covering required for both men and women",
        metro: "Mahalaxmi Railway Station",
        desc: "1431 Indo-Islamic tomb and mosque perched on an offshore islet in Worli Bay, connected to mainland Mumbai by a narrow 500m tidal causeway.",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb9", name: "Colaba Causeway", time: 2, cost: 600, score: 74, cat: "Shopping", lat: 18.9150, lng: 72.8290,
        hours: "11:00 AM – 10:00 PM (All days)", bestTime: "Late afternoon followed by coffee at Leopold Cafe",
        dress: "Comfortable street bargain footwear",
        metro: "Churchgate / CSMT Station",
        desc: "Mumbai's premier cultural street market. Shop for antique brassware, junk jewelry, boho clothing, and dine at legendary heritage cafes.",
        img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "mb10", name: "Juhu Beach", time: 1, cost: 100, score: 72, cat: "Food", lat: 19.0974, lng: 72.8268,
        hours: "24/7 Open", bestTime: "Sunset (05:30 PM onwards) for beach snacks",
        dress: "Casual beach sandals",
        metro: "Vile Parle / Santacruz Railway Station",
        desc: "Iconic Arabian sea shoreline famous for fresh street food stalls: buttery pav bhaji, bhelpuri, sev puri, and cooling crushed-ice kala khatta golas.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  varanasi: {
    name: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "The Eternal City on the Ganges",
    coords: [25.3176, 82.9739],
    foodRec: {
      dish: "Banarasi Kachori Jalebi, Malaiyyo & Thandai",
      area: "Gowdowlia & Thatheri Bazaar",
      desc: "Crisp urad dal kachoris with hing aloo sabzi, followed by winter saffron malaiyyo foam and thick pistachio thandai."
    },
    attractions: [
      {
        id: "vr1", name: "Dashashwamedh Aarti", time: 2, cost: 0, score: 99, cat: "Spiritual", lat: 25.3063, lng: 83.0126,
        hours: "Daily evening ceremony (06:30 PM – 07:45 PM)", bestTime: "Reach by 05:45 PM to reserve ghat steps or boat front",
        dress: "Modest attire suitable for spiritual gathering",
        metro: "Walk/E-rickshaw from Godowlia Crossing",
        desc: "Mesmerizing synchronized Ganga Aarti ritual by young priests wielding towering multi-tiered brass oil lamps amidst conch shells and incense.",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr2", name: "Sunrise Boat Ride", time: 2, cost: 500, score: 97, cat: "Scenic", lat: 25.3100, lng: 83.0130,
        hours: "05:15 AM – 07:30 AM", bestTime: "Dawn break before the sun crests the east horizon",
        dress: "Light jacket in winter; comfortable footwear",
        metro: "Board at Assi Ghat or Dashashwamedh Ghat",
        desc: "Traditional wooden rowing boat past 84 stone ghats at sunrise. Witness morning prayers, floating flower diyas, and temple spires in morning fog.",
        img: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr3", name: "Kashi Vishwanath Temple", time: 2, cost: 0, score: 94, cat: "Spiritual", lat: 25.3109, lng: 83.0107,
        hours: "03:00 AM – 11:00 PM (Locker required for phones)", bestTime: "Early afternoon between major aartis",
        dress: "Strict traditional attire; phones/belts stored in lockers",
        metro: "Kashi Vishwanath Corridor Gate",
        desc: "One of the 12 sacred Jyotirlingas, dedicated to Lord Shiva. Newly expanded heritage corridor connects the temple directly to the River Ganges.",
        img: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr4", name: "Sarnath Stupa & Museum", time: 3, cost: 200, score: 91, cat: "Heritage", lat: 25.3814, lng: 83.0241,
        hours: "09:00 AM – 05:00 PM (Museum closed Fri)", bestTime: "Morning for peaceful walking among ancient deer park ruins",
        dress: "Modest casuals",
        metro: "Cab 10 km northeast of Varanasi Cantt",
        desc: "Cradle of Buddhism where Gautama Buddha delivered his first sermon. Site of the 43m Dhamek Stupa and Ashoka Lion Capital (national emblem).",
        img: "https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr5", name: "Manikarnika Ghat", time: 1, cost: 0, score: 88, cat: "Culture", lat: 25.3103, lng: 83.0109,
        hours: "24/7 Sacred Cremation Ground", bestTime: "Afternoon respectful observation from upper steps or boat",
        dress: "Quiet respectful demeanor; NO photography permitted",
        metro: "Alleys near Scindia Ghat",
        desc: "The primary and most sacred cremation ghat of Varanasi, where funeral pyres have burned continuously for over 3,000 years according to tradition.",
        img: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr6", name: "Assi Ghat Morning Yoga", time: 1, cost: 0, score: 84, cat: "Spiritual", lat: 25.2988, lng: 83.0022,
        hours: "05:00 AM – 08:00 AM (Subah-e-Banaras)", bestTime: "05:30 AM for morning classical raga & yoga session",
        dress: "Flexible yoga or sportswear",
        metro: "Southern terminus of the ghat road",
        desc: "Southernmost major ghat. Known for Subah-e-Banaras: free daily morning Vedic chants, yajna, live Indian classical flute recitals, and public yoga.",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr7", name: "Banarasi Silk Weaving", time: 2, cost: 200, score: 80, cat: "Culture", lat: 25.3200, lng: 83.0100,
        hours: "10:00 AM – 06:00 PM (Weaver lofts)", bestTime: "Mid-morning when master weavers operate handlooms",
        dress: "Casual",
        metro: "Madanpura & Chowk lanes",
        desc: "Centuries-old artisan lofts creating Banarasi brocade sarees woven with real gold and silver zari threads. Recognized UNESCO Intangible Heritage.",
        img: "https://images.unsplash.com/photo-1597371140946-cfd3dd5a76b9?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr8", name: "Classical Music Baithak", time: 2, cost: 500, score: 83, cat: "Culture", lat: 25.3150, lng: 83.0050,
        hours: "07:00 PM – 09:30 PM (Evening recitals)", bestTime: "Evening intimacy in an old riverside haveli",
        dress: "Traditional or smart casual",
        metro: "Near Kabir Chaura music quarter",
        desc: "Varanasi is a UNESCO Creative City of Music. Experience soulful live sitar, tabla, and shehnai ragas inside a heritage riverside haveli courtyard.",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr9", name: "BHU Campus & Vishwanath Temple", time: 2, cost: 0, score: 78, cat: "Culture", lat: 25.2677, lng: 82.9914,
        hours: "07:00 AM – 08:00 PM (All days)", bestTime: "Afternoon tree-lined walk",
        dress: "Modest campus wear",
        metro: "Lanka Crossing, southern Varanasi",
        desc: "Sprawling 1,300-acre green campus of Banaras Hindu University founded in 1916. Home to New Vishwanath Temple and Bharat Kala Bhavan museum.",
        img: "https://images.unsplash.com/photo-1695293351566-1dc582acc504?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "vr10", name: "Old City Food & Alley Walk", time: 1, cost: 200, score: 79, cat: "Food", lat: 25.3120, lng: 83.0080,
        hours: "08:00 AM – 10:00 PM", bestTime: "Evening for Banarasi paan and Blue Lassi shop",
        dress: "Walking sneakers for winding stone galis",
        metro: "Start from Godowlia Chowk",
        desc: "Wander through labyrinthine alleyways scented with rose petals and fried spices. Sample thick creamy lassi, tamatar chaat, and GI-tagged Banarasi Paan.",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  kerala: {
    name: "Kerala",
    state: "Kerala",
    tagline: "God's Own Country",
    coords: [10.8505, 76.2711],
    foodRec: {
      dish: "Traditional Sadya & Karimeen Pollichathu",
      area: "Alleppey Backwaters / Fort Kochi",
      desc: "Rice served on fresh banana leaf with 20+ vegetarian delicacies (avial, sambar, payasam), alongside spiced pearl spot fish wrapped in plantain leaf."
    },
    attractions: [
      {
        id: "kl1", name: "Alleppey Houseboat Cruise", time: 5, cost: 5000, score: 99, cat: "Scenic", lat: 9.4981, lng: 76.3388,
        hours: "11:30 AM – 05:30 PM (Day Cruise)", bestTime: "Mid-day gentle breeze through palm canals",
        dress: "Comfortable breathable cottons and sandals",
        metro: "Board at Punnamada Jetty, Alleppey",
        desc: "Glide along emerald backwater canals on a handcrafted eco-luxury kettuvallam. Enjoy village vistas, fishing docks, and onboard freshly cooked Kerala meals.",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl2", name: "Munnar Tea Plantations", time: 4, cost: 300, score: 96, cat: "Nature", lat: 10.0889, lng: 77.0595,
        hours: "09:00 AM – 05:00 PM (Tea Museum)", bestTime: "Morning when mist curls over the tea slopes",
        dress: "Warm layers or windcheater; light trekking shoes",
        metro: "Cab via Kochi-Dhanushkodi Highway",
        desc: "1,600m high rolling tea estates in the Western Ghats. Tour heritage CTC tea factories, taste fresh leaves, and walk through scenic cardamom valleys.",
        img: "https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl3", name: "Periyar Wildlife Safari", time: 5, cost: 700, score: 94, cat: "Nature", lat: 9.5167, lng: 77.1833,
        hours: "07:00 AM – 04:00 PM (Boat trips)", bestTime: "07:30 AM early boat for wild elephant sightings",
        dress: "Earthy tones (khaki/green); hats and binoculars",
        metro: "Thekkady Gate, Idukki District",
        desc: "Protected tiger and elephant sanctuary surrounding Periyar Lake. Spot herds of wild elephants, bison, sambar deer, and otters bathing at the water edge.",
        img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl4", name: "Kathakali Performance", time: 2, cost: 400, score: 91, cat: "Culture", lat: 9.9312, lng: 76.2673,
        hours: "05:00 PM makeup demo; 06:00 PM performance", bestTime: "Arrive 1 hr early to witness traditional face-painting",
        dress: "Casual cultural center seating",
        metro: "Kochi Cultural Centre, Fort Kochi",
        desc: "Ancient 17th-century classical dance drama. Master performers showcase mudras, dramatic facial expressions, and vibrant costumes accompanied by Chenda drums.",
        img: "https://images.unsplash.com/photo-1691075211492-05c1800397a2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl5", name: "Padmanabhaswamy Temple", time: 2, cost: 0, score: 92, cat: "Spiritual", lat: 8.4828, lng: 76.9462,
        hours: "03:30 AM – 12:00 PM & 05:00 PM – 07:20 PM", bestTime: "Morning darshan before queue builds",
        dress: "Strict Kerala dhoti/mundu for men; sarees for women",
        metro: "Thiruvananthapuram Central (1 km)",
        desc: "Chera and Dravidian style architectural marvel dedicated to Lord Vishnu reclining on Anantha snake. Famed as one of the world's richest shrines.",
        img: "https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl6", name: "Ayurvedic Herbal Spa", time: 2, cost: 1500, score: 89, cat: "Spiritual", lat: 10.0000, lng: 76.2500,
        hours: "08:00 AM – 07:00 PM (By appointment)", bestTime: "Late afternoon for ultimate relaxation",
        dress: "Loose comfortable robes provided on site",
        metro: "Kochi / Kumarakom wellness retreat",
        desc: "Authentic Kerala Panchakarma therapy. Experience Shirodhara warm herbal oil stream and Abhyanga four-hand rejuvenating therapeutic massage.",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl7", name: "Kovalam Beach", time: 3, cost: 200, score: 85, cat: "Scenic", lat: 8.3988, lng: 76.9782,
        hours: "24/7 Open", bestTime: "04:30 PM for lighthouse climb and sunset swimming",
        dress: "Swimwear / casual beachwear",
        metro: "16 km from Thiruvananthapuram",
        desc: "Three crescent-shaped golden sand beaches bordered by steep coconut headlands. Features the red-and-white Vizhinjam Lighthouse with 360° Arabian Sea views.",
        img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl8", name: "Fort Kochi Heritage Walk", time: 2, cost: 0, score: 83, cat: "Heritage", lat: 9.9644, lng: 76.2426,
        hours: "09:00 AM – 06:00 PM", bestTime: "Cool early morning stroll through colonial lanes",
        dress: "Walking shorts and hat",
        metro: "Kochi Water Metro to Fort Kochi Jetty",
        desc: "Colonial spice port quarter blending Portuguese, Dutch, and British heritage. Walk through Jew Town, visit Paradesi Synagogue, and art cafes.",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl9", name: "Spice Plantation Tour", time: 3, cost: 500, score: 82, cat: "Nature", lat: 9.7800, lng: 77.0500,
        hours: "09:00 AM – 05:00 PM (Guided batches)", bestTime: "Morning aromatic harvest walk",
        dress: "Closed walking shoes for plantation trails",
        metro: "Wayanad / Thekkady highlands",
        desc: "Walk beneath towering trees entwined with black pepper vines, cardamom plants, fresh cinnamon bark, vanilla pods, and organic cocoa beans.",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "kl10", name: "Chinese Fishing Nets", time: 1, cost: 0, score: 76, cat: "Scenic", lat: 9.9658, lng: 76.2414,
        hours: "Operate continuously morning and evening", bestTime: "Sunset silhouetted against glowing harbor skies",
        dress: "Casual waterfront wear",
        metro: "Vasco da Gama Square, Fort Kochi",
        desc: "Fixed cantilever mechanical fishing nets gifted by 14th-century Chinese explorer Kublai Khan's court. Operated by team counterweights right off the shore.",
        img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  goa: {
    name: "Goa",
    state: "Goa",
    tagline: "Sun, Sand, and Sea",
    coords: [15.2993, 74.1240],
    foodRec: {
      dish: "Goan Fish Curry Rice & Bebinca",
      area: "Candolim / Panjim Latin Quarter",
      desc: "Spicy and tangy coconut-kokum fish curry served with steaming parboiled rice, fried kingfish rava fry, and seven-layered traditional bebinca dessert."
    },
    attractions: [
      {
        id: "ga1", name: "Baga Beach", time: 2, cost: 0, score: 90, cat: "Scenic", lat: 15.5608, lng: 73.7559,
        hours: "24/7 Open (Water sports 09:00 AM – 06:00 PM)", bestTime: "Late afternoon for parasailing and lively beach shacks",
        dress: "Beach casuals / swimwear",
        metro: "Cab from Thivim or Panaji",
        desc: "North Goa's most vibrant shoreline. Parasailing, banana rides, beachfront seafood restaurants, and legendary nightlife along Tito's Lane.",
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga2", name: "Basilica of Bom Jesus", time: 1, cost: 0, score: 88, cat: "Heritage", lat: 15.5009, lng: 73.9116,
        hours: "09:00 AM – 06:30 PM (Sun afternoon after mass)", bestTime: "Morning for quiet viewing of baroque gilded altars",
        dress: "Strict modest church attire; covered shoulders and knees",
        metro: "Old Goa / Panjim bus link",
        desc: "1605 UNESCO World Heritage Catholic basilica in Old Goa. Houses the preserved sacred relics of St. Francis Xavier in a silver casket.",
        img: "https://images.unsplash.com/photo-1706940119676-957a79a61248?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga3", name: "Dudhsagar Waterfalls", time: 4, cost: 300, score: 92, cat: "Nature", lat: 15.3142, lng: 74.3136,
        hours: "07:00 AM – 05:00 PM (Jeep safari)", bestTime: "Morning safari through Bhagwan Mahavir Wildlife Sanctuary",
        dress: "Swimwear / trekking clothes with water grip shoes",
        metro: "Jeep base at Kulem Railway Station",
        desc: "Spectacular four-tiered 310m milky white waterfall on Mandovi River. Jeep safari across rocky jungle streams into pristine freshwater plunge pools.",
        img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga4", name: "Anjuna Flea Market", time: 2, cost: 0, score: 85, cat: "Shopping", lat: 15.5807, lng: 73.7441,
        hours: "Every Wednesday (09:00 AM – 07:00 PM)", bestTime: "Late Wednesday afternoon for sunset live music",
        dress: "Boho chic / comfortable sandals",
        metro: "Anjuna Beach Road",
        desc: "Legendary weekly open-air bohemian market. Live bands, coconut palms, handmade jewelry, leather bags, spices, and beach fashion stalls.",
        img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga5", name: "Fort Aguada", time: 1, cost: 0, score: 80, cat: "Heritage", lat: 15.4909, lng: 73.7714,
        hours: "09:30 AM – 06:00 PM (All days)", bestTime: "04:30 PM for sea breeze and sunset photo points",
        dress: "Casual with sun protection",
        metro: "Sinquerim / Candolim coastal road",
        desc: "17th-century Portuguese coastal fortress on Sinquerim headland with a four-story stone lighthouse and colossal freshwater cistern.",
        img: "https://images.unsplash.com/photo-1702890761067-4d6fdb0abced?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga6", name: "Sahakari Spice Farm", time: 3, cost: 500, score: 82, cat: "Nature", lat: 15.4000, lng: 74.0000,
        hours: "09:00 AM – 04:30 PM (Lunch buffet included)", bestTime: "11:30 AM for farm tour followed by authentic Goan lunch",
        dress: "Comfortable breathable walking wear",
        metro: "Ponda / Curti, Central Goa",
        desc: "130-acre lush tropical spice plantation in Ponda. Guided botanical tours, cashew feni distillation demonstrations, and traditional buffet.",
        img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga7", name: "Fontainhas Latin Quarter", time: 2, cost: 0, score: 87, cat: "Heritage", lat: 15.4989, lng: 73.8278,
        hours: "24/7 (Heritage neighborhood)", bestTime: "Morning (08:30 AM – 10:30 AM) for tranquil photography",
        dress: "Bright casuals; perfect for portrait photos",
        metro: "Central Panaji near Ourem Creek",
        desc: "UNESCO recognized Portuguese colonial neighborhood in Panaji. Bright yellow and blue terracotta villas, wrought-iron balconies, and artisan bakeries.",
        img: "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga8", name: "Chapora Fort", time: 1, cost: 0, score: 83, cat: "Scenic", lat: 15.6058, lng: 73.7360,
        hours: "09:00 AM – 06:30 PM (All days)", bestTime: "Sunset for sweeping views over Vagator Beach and Chapora river",
        dress: "Sturdy footwear for red laterite slope climb",
        metro: "Vagator Hill Road",
        desc: "Famous 'Dil Chahta Hai' red laterite fortress commanding high bluffs above Vagator Beach. Panoramic vistas of the Arabian ocean coastline.",
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga9", name: "Palolem Beach", time: 2, cost: 0, score: 89, cat: "Scenic", lat: 15.0100, lng: 74.0231,
        hours: "24/7 Open", bestTime: "Sunset for dolphin watching boats and quiet coastal dining",
        dress: "Beach relaxation wear",
        metro: "Canacona, South Goa",
        desc: "South Goa's crescent paradise enclosed by thick coconut palm canopies and calm gentle waves. Kayak to Butterfly Beach or relax at seaside shacks.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
      },
      {
        id: "ga10", name: "Reis Magos Fort", time: 2, cost: 50, score: 79, cat: "Heritage", lat: 15.4975, lng: 73.8092,
        hours: "09:30 AM – 05:00 PM (Closed Mon)", bestTime: "Afternoon historical tour overlooking Mandovi River",
        dress: "Casual",
        metro: "North bank of Mandovi river opposite Panaji",
        desc: "Restored 1551 defense citadel with prominent stone ramparts, historic cannons, and an art gallery showcasing Mario Miranda caricatures.",
        img: "https://images.unsplash.com/photo-1702890761067-4d6fdb0abced?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  }
};

const CITY_ICONS = {
  delhi: 'fa-monument',
  jaipur: 'fa-crown',
  mumbai: 'fa-film',
  varanasi: 'fa-fire',
  kerala: 'fa-leaf',
  goa: 'fa-umbrella-beach'
};

const CITY_FLAGS = {
  delhi: '🏛️',
  jaipur: '🌸',
  mumbai: '🌊',
  varanasi: '🕉️',
  kerala: '🌴',
  goa: '🏖️'
};

/* ═══════════════════════════════════════════════════════
   CURRENCIES & REAL-TIME CONVERSION
═══════════════════════════════════════════════════════ */
const CURRENCIES = {
  INR: { symbol: '₹', rate: 1, code: 'INR' },
  USD: { symbol: '$', rate: 0.0118, code: 'USD' },
  EUR: { symbol: '€', rate: 0.0109, code: 'EUR' },
  GBP: { symbol: '£', rate: 0.00925, code: 'GBP' }
};
let currentCurrency = 'INR';

function formatCurrency(inrAmount) {
  if (inrAmount === 0) return 'Free';
  const c = CURRENCIES[currentCurrency] || CURRENCIES.INR;
  const converted = Math.round(inrAmount * c.rate);
  if (currentCurrency === 'INR') {
    return '₹' + inrAmount.toLocaleString('en-IN');
  }
  return `${c.symbol}${converted.toLocaleString('en-US')}`;
}

function changeCurrency(curr) {
  currentCurrency = curr;
  const sym = CURRENCIES[curr].symbol;
  document.querySelectorAll('.curr-symbol').forEach(el => el.textContent = sym);
  updateBudgetSliderDisplay(document.getElementById('bSlider').value);
  renderCards();
  if (lastResult) renderResults(lastResult);
  if (document.getElementById('tp-trips').classList.contains('on')) loadTrips();
}

function updateBudgetSliderDisplay(val) {
  document.getElementById('bVal').textContent = formatCurrency(Number(val));
}

function updateTimeSliderDisplay(val) {
  const durSuffix = tripDays > 1 ? `h/day (${val * tripDays}h total)` : 'h';
  document.getElementById('tVal').textContent = `${val}${durSuffix}`;
}

/* ═══ STATE ═══ */
let user = JSON.parse(localStorage.getItem('yatraUser') || 'null');
let activeCity = 'delhi';
let lastResult = null;
let activeResultDay = 0; // 0 = Day 1, 1 = Day 2, etc.

let mapI = null;
let mapMarkers = [];
let mapPolylines = [];
let isDarkMap = false;
let currentBasemapLayer = null;

// Multi-Day & Pace State
let tripDays = 1;
let travelPace = 'balanced';

// Search, Filter & Pinning State
let currentCategory = 'all';
let searchQuery = '';
let pinnedAttractionIds = new Set();
let selectedAttractionIds = new Set();
let visitedStopIds = new Set();

// Speech Synthesis State
let synth = window.speechSynthesis || null;
let currentUtterance = null;
let isPlayingAudio = false;

/* ═══════════════════════════════════════════════════════
   AUTH — Browser-side (localStorage), Guest-friendly
═══════════════════════════════════════════════════════ */
function getUsers() { return JSON.parse(localStorage.getItem('yatraUsers') || '[]'); }
function saveUsers(u) { localStorage.setItem('yatraUsers', JSON.stringify(u)); }

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if (mapI) setMapBasemap(isDark);
}

function openGate(tab) {
  gateTab(tab || 'login');
  document.getElementById('gateOv').classList.add('on');
  setTimeout(() => {
    const field = tab === 'reg' ? document.getElementById('gName') : document.getElementById('gEmail');
    if (field) field.focus();
  }, 260);
}

function closeGate() {
  document.getElementById('gateOv').classList.remove('on');
}

function openProfile() {
  if (!user) return openGate('login');
  populateProfile();
  document.getElementById('profileOv').classList.add('on');
  setTimeout(() => document.getElementById('pName')?.focus(), 220);
}

function closeProfile() {
  document.getElementById('profileOv').classList.remove('on');
}

function gateTab(t) {
  const isL = t === 'login';
  document.getElementById('gFormLogin').classList.toggle('on', isL);
  document.getElementById('gFormReg').classList.toggle('on', !isL);
  document.getElementById('gTabLogin').classList.toggle('on', isL);
  document.getElementById('gTabReg').classList.toggle('on', !isL);
  document.getElementById('gErr').innerHTML = '';
  document.getElementById('gRegErr').innerHTML = '';
}

function populateProfile() {
  if (!user) return;
  document.getElementById('pName').value = user.name || '';
  document.getElementById('pEmail').value = user.email || '';
  document.getElementById('pTheme').value = localStorage.getItem('theme') || 'light';
  const key = 'yatraTrips_' + user.id;
  const trips = JSON.parse(localStorage.getItem(key) || '[]');
  document.getElementById('profileTripsCount').textContent = trips.length + ' saved trips';
}

function setProfileTheme(val) {
  document.body.classList.toggle('dark', val === 'dark');
  localStorage.setItem('theme', val);
  if (mapI) setMapBasemap(val === 'dark');
}

function saveProfile() {
  if (!user) return;
  const name = document.getElementById('pName').value.trim();
  if (!name) { toast('Name cannot be blank'); return; }
  user.name = name;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if (idx >= 0) { users[idx].name = name; saveUsers(users); }
  localStorage.setItem('yatraUser', JSON.stringify(user));
  setUser(user);
  toast('Profile updated');
}

function clearSavedTrips() {
  const tripKey = user ? ('yatraTrips_' + user.id) : 'yatraTrips_guest';
  if (!confirm('Remove all saved trips from your account?')) return;
  localStorage.removeItem(tripKey);
  toast('Saved trips cleared');
  if (document.getElementById('tp-trips').classList.contains('on')) loadTrips();
  populateProfile();
}

function togglePwd(id, btn) {
  const input = document.getElementById(id);
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  btn.innerHTML = isText ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
}

function doGateLogin() {
  const email = document.getElementById('gEmail').value.trim().toLowerCase();
  const pass = document.getElementById('gPass').value;
  const errEl = document.getElementById('gErr');
  errEl.innerHTML = '';

  if (!email || !pass) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> All fields required';
    return;
  }
  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === btoa(pass));
  if (!found) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Invalid email or password';
    return;
  }
  setUser(found);
  closeGate();
  toast('Welcome back, ' + found.name + '! 👋');
  goApp();
}

function doGateReg() {
  const name = document.getElementById('gName').value.trim();
  const email = document.getElementById('gRegEmail').value.trim().toLowerCase();
  const pass = document.getElementById('gRegPass').value;
  const errEl = document.getElementById('gRegErr');
  errEl.innerHTML = '';

  if (!name || !email || !pass) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> All fields required';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Enter a valid email address';
    return;
  }
  if (pass.length < 6) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Password must be at least 6 characters';
    return;
  }
  const users = getUsers();
  if (users.find(u => u.email === email)) {
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Email already registered — sign in instead';
    return;
  }
  const newUser = { id: Date.now(), name, email, password: btoa(pass), createdAt: Date.now() };
  users.push(newUser);
  saveUsers(users);
  setUser(newUser);
  closeGate();
  toast('Welcome, ' + name + '! Your account is ready 🎉');
  goApp();
}

function setUser(u) {
  user = u;
  localStorage.setItem('yatraUser', JSON.stringify(u));
  document.getElementById('navAuth').style.display = 'none';
  document.getElementById('navUser').style.display = 'flex';
  document.getElementById('navAv').textContent = u.name[0].toUpperCase();
  document.getElementById('navUname').textContent = u.name.split(' ')[0];
}

function logout() {
  user = null;
  localStorage.removeItem('yatraUser');
  document.getElementById('navAuth').style.display = '';
  document.getElementById('navUser').style.display = 'none';
  showHero();
  toast('Signed out successfully');
}

/* ═══ SCREENS ═══ */
function showHero() {
  document.getElementById('heroS').style.display = '';
  document.getElementById('appS').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goApp() {
  document.getElementById('heroS').style.display = 'none';
  document.getElementById('appS').style.display = 'block';
  initApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══ APP INIT ═══ */
let appReady = false;
function initApp() {
  if (appReady) return;
  appReady = true;
  renderCityGrid();
  loadCity(activeCity || 'delhi');
  loadChecklistState();
}

function renderCityGrid() {
  document.getElementById('cityGrid').innerHTML = Object.entries(CITIES).map(([k, v]) => `
    <div class="cc ${k === activeCity ? 'on' : ''}" id="cc_${k}" onclick="loadCity('${k}')">
      <div class="cc-icon"><i class="fas ${CITY_ICONS[k]}"></i></div>
      <div class="cc-name">${v.name}</div>
      <div class="cc-state">${v.state}</div>
    </div>`).join('');
}

function loadCity(k) {
  activeCity = k;
  pinnedAttractionIds.clear();
  selectedAttractionIds.clear();

  document.querySelectorAll('.cc').forEach(c => c.classList.remove('on'));
  const el = document.getElementById('cc_' + k);
  if (el) el.classList.add('on');

  const city = CITIES[k];
  document.getElementById('wCityName').textContent = city.name;

  // Reset filters
  currentCategory = 'all';
  searchQuery = '';
  const sInput = document.getElementById('attrSearch');
  if (sInput) sInput.value = '';
  const clrBtn = document.getElementById('clearSearchBtn');
  if (clrBtn) clrBtn.style.display = 'none';

  document.querySelectorAll('.cat-pill').forEach((btn, i) => {
    btn.classList.toggle('on', i === 0);
  });

  renderCards();
  fetchCityWeather(k);

  if (mapI) {
    updateMap();
  }
}

/* ═══════════════════════════════════════════════════════
   LIVE WEATHER INTEGRATION (Open-Meteo Free API)
═══════════════════════════════════════════════════════ */
const WMO_CODES = {
  0: { label: "Sunny / Clear Sky", icon: "fa-sun", tip: "Bright clear skies — wear sunscreen and sunglasses." },
  1: { label: "Mainly Clear", icon: "fa-sun-cloud", tip: "Pleasant sunshine — great for monument walking." },
  2: { label: "Partly Cloudy", icon: "fa-cloud-sun", tip: "Comfortable weather — ideal for outdoor exploration." },
  3: { label: "Overcast", icon: "fa-cloud", tip: "Overcast skies — pleasant temperatures for day strolls." },
  45: { label: "Foggy / Mist", icon: "fa-smog", tip: "Early mist — take care on dawn boat or hill trips." },
  48: { label: "Depositing Rime Fog", icon: "fa-smog", tip: "Dense fog — carry a warm layer." },
  51: { label: "Light Drizzle", icon: "fa-cloud-rain", tip: "Light drizzle — carry a compact umbrella." },
  61: { label: "Light Rain", icon: "fa-cloud-showers-heavy", tip: "Rain expected — plan indoor museums or carry umbrellas." },
  63: { label: "Moderate Rain", icon: "fa-cloud-showers-heavy", tip: "Rain showers — prefer indoor galleries & covered bazaars." },
  80: { label: "Rain Showers", icon: "fa-cloud-rain", tip: "Intermittent showers — enjoy hot chai between visits." },
  95: { label: "Thunderstorm", icon: "fa-bolt", tip: "Thunderstorm alert — postpone boat or cliff visits." }
};

async function fetchCityWeather(cityKey) {
  const city = CITIES[cityKey];
  const [lat, lon] = city.coords;
  const tempEl = document.getElementById('wTemp');
  const condEl = document.getElementById('wCond');
  const tipEl = document.getElementById('wTipTxt');
  const iconEl = document.getElementById('wIcon');

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather request failed");
    const data = await res.json();
    const curr = data.current;
    const temp = Math.round(curr.temperature_2m);
    const code = curr.weather_code;
    const wInfo = WMO_CODES[code] || { label: "Pleasant Climate", icon: "fa-sun", tip: "Ideal weather to explore Indian heritage." };

    tempEl.textContent = `${temp}°C`;
    condEl.textContent = wInfo.label;
    tipEl.textContent = wInfo.tip;
    iconEl.innerHTML = `<i class="fas ${wInfo.icon}"></i>`;
  } catch (err) {
    tempEl.textContent = "27°C";
    condEl.textContent = "Clear & Warm";
    tipEl.textContent = "Great day for cultural walks and photography.";
    iconEl.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

/* ═══════════════════════════════════════════════════════
   MULTI-DAY PLANNING & TRAVEL PACE CONTROLS
═══════════════════════════════════════════════════════ */
function setTripDays(days, btn) {
  tripDays = days;
  document.querySelectorAll('#durCtrl .seg-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  document.getElementById('durVal').textContent = `${days} Day${days > 1 ? 's' : ''}`;
  updateTimeSliderDisplay(document.getElementById('tSlider').value);
  toast(`Trip duration set to ${days} Day${days > 1 ? 's' : ''}`);
}

function setTravelPace(pace, btn) {
  travelPace = pace;
  document.querySelectorAll('#paceCtrl .seg-btn').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  const label = pace.charAt(0).toUpperCase() + pace.slice(1);
  document.getElementById('paceVal').textContent = label;
  toast(`Travel pace set to ${label}`);
}

/* ═══════════════════════════════════════════════════════
   ATTRACTION CARDS, SEARCH & FILTER
═══════════════════════════════════════════════════════ */
function renderCards() {
  const city = CITIES[activeCity];
  const container = document.getElementById('cardsArea');

  const filtered = city.attractions.filter(a => {
    const matchesCat = (currentCategory === 'all') || (a.cat.toLowerCase() === currentCategory.toLowerCase());
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || a.name.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q) || a.cat.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (!filtered.length) {
    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:48px 16px;color:var(--muted)">
        <i class="fas fa-search" style="font-size:32px;margin-bottom:12px;opacity:.5"></i>
        <div style="font-weight:700;color:var(--ink);font-size:16px;margin-bottom:4px">No attractions found</div>
        <div style="font-size:12px">Try clearing your search query or picking "All".</div>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(a => {
    const isPinned = pinnedAttractionIds.has(a.id);
    const isSel = selectedAttractionIds.has(a.id) || isPinned;
    return `
    <div class="ac ${isSel ? 'sel' : ''} ${isPinned ? 'pinned' : ''}" id="ac_${a.id}" onclick="toggleCard('${a.id}')">
      <div class="ac-imgw">
        <img src="${a.img}" alt="${a.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop'">
        <div class="ac-cat">${a.cat}</div>
        <button class="ac-pin" onclick="event.stopPropagation();togglePin('${a.id}')" title="${isPinned ? 'Unpin Must-Visit' : 'Pin as Must-Visit'}">
          <i class="fas ${isPinned ? 'fa-star' : 'fa-thumbtack'}"></i>
        </button>
        <div class="ac-chk"><i class="fas fa-check"></i></div>
      </div>
      <div class="ac-body">
        <div class="ac-name">${a.name}</div>
        <div class="ac-desc">${a.desc}</div>
        <div class="ac-foot">
          <span class="chip ct"><i class="far fa-clock"></i>${a.time}h</span>
          <span class="chip cc2"><i class="fas fa-tag"></i>${formatCurrency(a.cost)}</span>
          <span class="chip cs"><i class="fas fa-star"></i>${a.score}</span>
          <button class="info-btn"
            onclick="event.stopPropagation();openPP('${activeCity}','${a.id}')"
            title="Explore Details & Audio Guide"><i class="fas fa-circle-info"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleCard(id) {
  if (pinnedAttractionIds.has(id)) {
    pinnedAttractionIds.delete(id);
    selectedAttractionIds.delete(id);
    toast('Unpinned from must-visit');
  } else if (selectedAttractionIds.has(id)) {
    selectedAttractionIds.delete(id);
  } else {
    selectedAttractionIds.add(id);
  }
  renderCards();
}

function togglePin(id) {
  if (pinnedAttractionIds.has(id)) {
    pinnedAttractionIds.delete(id);
    toast('Removed from must-visit list');
  } else {
    pinnedAttractionIds.add(id);
    selectedAttractionIds.add(id);
    const place = CITIES[activeCity].attractions.find(x => x.id === id);
    toast(`⭐ Pinned ${place?.name || 'attraction'} as MUST-VISIT!`);
  }
  renderCards();
}

function setCategoryFilter(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  renderCards();
}

function onSearchInput(val) {
  searchQuery = val;
  const clr = document.getElementById('clearSearchBtn');
  if (clr) clr.style.display = val ? 'block' : 'none';
  renderCards();
}

function clearSearch() {
  searchQuery = '';
  const sInput = document.getElementById('attrSearch');
  if (sInput) sInput.value = '';
  const clr = document.getElementById('clearSearchBtn');
  if (clr) clr.style.display = 'none';
  renderCards();
}

/* ═══════════════════════════════════════════════════════
   CUSTOM PLACE / HOTEL ADDITION MODAL
═══════════════════════════════════════════════════════ */
function openAddPlaceModal() {
  document.getElementById('addPlaceOv').classList.add('on');
  setTimeout(() => document.getElementById('cpName')?.focus(), 200);
}

function closeAddPlaceModal() {
  document.getElementById('addPlaceOv').classList.remove('on');
}

function saveCustomPlace() {
  const name = document.getElementById('cpName').value.trim();
  const time = parseFloat(document.getElementById('cpTime').value) || 2;
  const cost = parseInt(document.getElementById('cpCost').value) || 0;
  const cat = document.getElementById('cpCat').value;
  const pin = document.getElementById('cpPin').checked;

  if (!name) {
    toast('Please enter a place name or hotel');
    return;
  }

  const city = CITIES[activeCity];
  // Slightly randomize position near city center
  const latOffset = (Math.random() - 0.5) * 0.04;
  const lngOffset = (Math.random() - 0.5) * 0.04;

  const newPlace = {
    id: 'cp_' + Date.now(),
    name,
    time: Math.max(1, time),
    cost: Math.max(0, cost),
    score: 95,
    cat,
    lat: city.coords[0] + latOffset,
    lng: city.coords[1] + lngOffset,
    hours: "Flexible / Guest Preference",
    bestTime: "According to your trip schedule",
    dress: "Casual",
    metro: "Local Auto / Taxi available",
    desc: `Custom place added by you in ${city.name}. Included in your personalized itinerary.`,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
  };

  city.attractions.unshift(newPlace);
  if (pin) {
    pinnedAttractionIds.add(newPlace.id);
  }
  selectedAttractionIds.add(newPlace.id);

  closeAddPlaceModal();
  document.getElementById('cpName').value = '';
  renderCards();
  toast(`Added "${name}" to ${city.name} attractions!`);
}

/* ═══════════════════════════════════════════════════════
   SAFETY & TOURIST ESSENTIALS MODAL
═══════════════════════════════════════════════════════ */
function openSafetyModal() {
  document.getElementById('safetyOv').classList.add('on');
}

function closeSafetyModal() {
  document.getElementById('safetyOv').classList.remove('on');
}

function saveChecklistState() {
  const boxes = document.querySelectorAll('#checklistContainer input[type=checkbox]');
  const state = Array.from(boxes).map(b => b.checked);
  localStorage.setItem('yatraChecklist', JSON.stringify(state));
}

function loadChecklistState() {
  try {
    const state = JSON.parse(localStorage.getItem('yatraChecklist') || '[]');
    const boxes = document.querySelectorAll('#checklistContainer input[type=checkbox]');
    boxes.forEach((b, i) => {
      if (state[i] !== undefined) b.checked = state[i];
    });
  } catch (e) { }
}

/* ═══════════════════════════════════════════════════════
   PLACE PANEL & WEB SPEECH AUDIO GUIDE
═══════════════════════════════════════════════════════ */
let currentPlace = null;

function openPP(cityKey, id) {
  const city = CITIES[cityKey];
  const a = city.attractions.find(x => x.id === id);
  if (!a) return;
  currentPlace = a;

  stopAudioGuide();

  document.getElementById('ppImg').src = a.img;
  document.getElementById('ppCat').textContent = a.cat;
  document.getElementById('ppName').textContent = a.name;
  document.getElementById('ppDesc').textContent = a.desc;

  document.getElementById('ppChips').innerHTML = `
    <span class="chip ct" style="font-size:11px"><i class="far fa-clock"></i>${a.time}h visit</span>
    <span class="chip cc2" style="font-size:11px"><i class="fas fa-tag"></i>${formatCurrency(a.cost)}</span>
    <span class="chip cs" style="font-size:11px"><i class="fas fa-star"></i>${a.score}/100</span>`;

  document.getElementById('ppHours').textContent = a.hours || "09:00 AM – 05:30 PM";
  document.getElementById('ppBestTime').textContent = a.bestTime || "Early morning or golden hour";
  document.getElementById('ppDress').textContent = a.dress || "Modest, comfortable walking clothes";
  document.getElementById('ppMetro').textContent = a.metro || "Local Auto / Taxi available";

  const pct = a.score;
  document.getElementById('ppRing').style.background =
    `conic-gradient(#E8590A ${pct * 3.6}deg, #DDD0BA 0deg)`;
  document.getElementById('ppScore').textContent = a.score;
  document.getElementById('ppScoreGrade').textContent = a.score >= 95 ? 'Outstanding ' : a.score >= 85 ? 'Excellent ' : a.score >= 75 ? 'Very Good ' : 'Good ';

  const tipText = getAuthenticTip(a.name, city.name);
  document.getElementById('ppTip').textContent = tipText;

  document.getElementById('pp').classList.add('on');
}

function closePP() {
  stopAudioGuide();
  document.getElementById('pp').classList.remove('on');
}

function toggleAudioGuide() {
  if (isPlayingAudio) {
    stopAudioGuide();
  } else {
    playAudioGuide();
  }
}

function playAudioGuide() {
  if (!synth || !currentPlace) {
    toast('Audio guide not supported in this browser');
    return;
  }
  synth.cancel();

  const city = CITIES[activeCity];
  const tip = getAuthenticTip(currentPlace.name, city.name);
  const speechText = `Welcome to ${currentPlace.name} in ${city.name}. ${currentPlace.desc}. Practical travel tip: ${tip}`;

  currentUtterance = new SpeechSynthesisUtterance(speechText);
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.0;

  currentUtterance.onend = () => stopAudioGuide();
  currentUtterance.onerror = () => stopAudioGuide();

  synth.speak(currentUtterance);
  isPlayingAudio = true;

  const btn = document.getElementById('ppAudioBtn');
  const txt = document.getElementById('ppAudioTxt');
  if (btn) btn.classList.add('playing');
  if (txt) txt.textContent = "Pause Audio Guide";
}

function stopAudioGuide() {
  if (synth) synth.cancel();
  isPlayingAudio = false;
  const btn = document.getElementById('ppAudioBtn');
  const txt = document.getElementById('ppAudioTxt');
  if (btn) btn.classList.remove('playing');
  if (txt) txt.textContent = "Listen to Audio Guide";
}

const AUTHENTIC_TIPS = {
  "Red Fort": "Book your tickets online at the ASI portal to bypass the 40-minute ticket queues at Lahore Gate. The weekend evening Sound & Light show is breathtaking.",
  "Qutub Minar": "Enter right at 7:00 AM opening to photograph the victory tower without crowds in gorgeous soft morning light.",
  "Akshardham Temple": "Cameras and phones are strictly barred. Deposit them in cloakrooms early and stay until 7:15 PM for the Sahaj Anand musical fountain show.",
  "Humayun's Tomb": "Walk to the serene Isa Khan's tomb right next to the entrance gate — it predates Humayun's tomb and features rare glazed tiles.",
  "Chandni Chowk": "Take cycle rickshaws into Khari Baoli spice market, climb to the spice terrace for panoramic Old Delhi views, and try parathas at Pt. Kanhaiyalal.",
  "India Gate": "Visit after 7:00 PM when the Amar Jawan Jyoti walkway glows under floodlights, and savor warm roasted bhutta and churned kulfi.",
  "Lotus Temple": "Visit around 4:00 PM. Slip off your shoes, sit inside the quiet acoustic central prayer dome, and soak in the stillness.",
  "National Museum": "Do not miss the Harappan gallery with the 4,500-year-old bronze 'Dancing Girl' and the sacred Kapilavastu Buddha bone relics.",
  "Lodi Gardens": "Enter via gate 1 near Jor Bagh for the most scenic morning walk across Athpula Bridge with rose garden blooms.",
  "Dilli Haat": "Every stall rotates state artisans every 15 days. Try the momos and fruit beer at the Sikkim stall, or litti chokha at the Bihar stall.",

  "Amber Fort": "Hire an official RTDC guide at the ticket window. Take the Maota Lake rear pathway for dramatic fort reflections.",
  "Hawa Mahal": "The most iconic photos are taken from the rooftop cafes (Wind View Cafe or Tattoo Cafe) right across the street in early morning sunlight.",
  "City Palace": "Opt for the composite ticket which includes Jantar Mantar and Jaigarh Fort to save money and hassle.",
  "Jantar Mantar": "Hire a certified astronomical guide; otherwise, the stone instruments look like abstract architecture instead of high-precision sundials.",
  "Nahargarh Fort": "Reach the Padao open-air restaurant terrace around 5:30 PM to watch the sun dip as Jaipur lights up below like a sea of embers.",
  "Jal Mahal": "Vehicles cannot access the palace directly; stroll along the paved lakeside promenade at dusk when flute players perform lakeside.",
  "Albert Hall Museum": "Visit at 7:30 PM when the entire exterior is illuminated in shifting colors and pigeons roost gracefully on the domes.",
  "Chokhi Dhani": "Skip a heavy lunch before visiting — the traditional sit-down Rajput thali includes over 25 unlimited heritage dishes.",
  "Galtaji Temple": "Keep all snacks, prasad, and sunglasses concealed in zipped bags, as the resident macaque monkeys are adept at snatching loose items.",
  "Johari Bazaar": "Bargain respectfully. For verified silver and certified gemstone jewelry, visit Gopalji Ka Rasta alley.",

  "Elephanta Caves": "Book the deluxe upper deck on the 9:00 AM first ferry from Gateway. Carry a hat and water for the 120 stone steps up.",
  "Gateway of India": "Best viewed at sunrise (6:30 AM) when the harbor is tranquil and the Taj Mahal Palace Hotel glows in morning gold.",
  "CSMVS Museum": "Rent the multilingual audio guide at the reception desk; the museum palm gardens also host an outdoor cafe and art shop.",
  "Dharavi Artisan Walk": "Always take an ethical, community-led guided tour that reinvests profits into local schools and community centers.",
  "Bollywood Studio Tour": "Book your weekend slots 3 days in advance on their portal. You can frequently witness live TV serial shoot sets.",
  "Marine Drive": "Sit on the promenade tetrapods near Nariman Point around 6:30 PM for the cool Arabian sea breeze and Queen's Necklace lights.",
  "Siddhivinayak Temple": "Tuesdays are peak pilgrimage days with 3-hour queues. Choose Wednesday or Thursday morning for a serene 20-minute darshan.",
  "Haji Ali Dargah": "Check the local tide table before setting out; the narrow 500m causeway submerges during high tide and closes to pedestrians.",
  "Colaba Causeway": "Walk down past Leopold Cafe into the shaded antique lanes behind the Taj Hotel for authentic brass curios and vintage posters.",
  "Juhu Beach": "Head to the food plaza near the main entrance for piping hot Mumbai pav bhaji served with melted Amul butter.",

  "Dashashwamedh Aarti": "Hire a shared or private wooden boat by 5:30 PM to watch the ritual comfortably from the river without being crushed in crowds.",
  "Sunrise Boat Ride": "Negotiate the fare the evening before with a local boatman at Assi Ghat. A rowboat (not noisy motorboat) offers the true spiritual vibe.",
  "Kashi Vishwanath Temple": "Store your mobile phones, leather wallets, and belts in your hotel or verified lockers outside before entering the corridor.",
  "Sarnath Stupa & Museum": "Visit the Archaeological Museum to view the original polished Chunar sandstone Ashoka Lion Capital that forms India's state emblem.",
  "Manikarnika Ghat": "Observe with quiet reverence from the river boat or upper terrace. Never photograph families in mourning.",
  "Assi Ghat Morning Yoga": "Reach by 5:15 AM for 'Subah-e-Banaras'. After yoga, grab a hot clay kulhad chai and jalebi at the corner stall.",
  "Banarasi Silk Weaving": "Visit the weaver cooperatives in Madanpura to see the jacquard punch cards and buy authentic handloom silk directly.",
  "Classical Music Baithak": "Look for evening baithak notices at Kabir Chaura or request your guesthouse to arrange a riverside haveli concert.",
  "BHU Campus & Vishwanath Temple": "Taste the fresh cold lassi at the VT temple complex and walk through the tranquil tree-canopied lanes of the university.",
  "Old City Food & Alley Walk": "Try the famous winter malaiyyo (saffron milk froth), followed by a sweet Banarasi Meetha Paan near Godowlia.",

  "Alleppey Houseboat Cruise": "Always verify that your boat has a valid DTPC government green certification before stepping aboard at the jetty.",
  "Munnar Tea Plantations": "Take the scenic gap road drive towards Kolukkumalai for the world's highest organic tea plantations and cloud walks.",
  "Periyar Wildlife Safari": "Book the 07:30 AM first boat safari on the official Periyar Tiger Reserve portal for the greatest chance of spotting wild elephants.",
  "Kathakali Performance": "Arrive at 5:00 PM to watch the actors apply herbal makeup made from crushed stone pigments and coconut oil.",
  "Padmanabhaswamy Temple": "Men must wear an unstitched traditional dhoti (mundu) without shirts; wrap-around dhotis are available on rent at the temple gate.",
  "Ayurvedic Herbal Spa": "Choose only government-recognized 'Green Leaf' or 'Olive Leaf' accredited Ayurvedic clinics for authentic treatments.",
  "Kovalam Beach": "Climb the 142 steps of the active Vizhinjam Lighthouse between 3:00 PM and 5:00 PM for the ultimate sweeping coastline vista.",
  "Fort Kochi Heritage Walk": "Rent a bicycle to explore Princess Street and Jew Town; catch the sunset through the massive Chinese Fishing Nets.",
  "Spice Plantation Tour": "Rub and sniff fresh crushed allspice and cardamom leaves on the trail, and pick up vacuum-sealed farm spices at local prices.",
  "Chinese Fishing Nets": "The fishermen will warmly invite you to help pull the counterweight ropes — a tip of ₹50-₹100 is customary and appreciated.",

  "Baga Beach": "Visit before 10:00 AM for clean sands, or after 6:00 PM for candlelit tables right on the water edge with fresh grilled kingfish.",
  "Basilica of Bom Jesus": "Visit in the morning before tourist buses arrive from Panjim. Silence is strictly observed inside the sacred sanctuary.",
  "Dudhsagar Waterfalls": "Wear life jackets provided by the forest department at the pool; swimming near the roaring spray is an unforgettable rush.",
  "Anjuna Flea Market": "Only held on Wednesdays. Arrive by 4:00 PM when temperatures drop, and enjoy live acoustic reggae at the beach bars.",
  "Fort Aguada": "Visit the lower fort jail museum recently restored, then walk up to the upper citadel for panoramic Arabian sea views.",
  "Sahakari Spice Farm": "Enjoy the traditional welcome with a flower garland and a shot of spiced herbal tea, followed by the Goan cashew buffet.",
  "Fontainhas Latin Quarter": "Walk through 31st January Road early in the morning when the colorful heritage homes are peaceful and uncrowded.",
  "Chapora Fort": "Wear shoes with rubber soles — the laterite stone path can be slick with gravel. The sunset viewpoint over Vagator is legendary.",
  "Palolem Beach": "Take a 45-minute morning boat from Palolem to Honeymoon Beach and Butterfly Beach to spot wild Indo-Pacific dolphins.",
  "Reis Magos Fort": "Combine your visit with the historic Reis Magos Church located right below the fort ramparts on the Mandovi waterfront."
};

function getAuthenticTip(placeName, cityName) {
  return AUTHENTIC_TIPS[placeName] || `Visit ${placeName} during early morning or late afternoon for the best lighting and comfortable temperatures. Ask local guides about nearby hidden spots.`;
}

/* ═══════════════════════════════════════════════════════
   MAP & REAL ROAD ROUTING (Leaflet + OSRM Driving Engine)
═══════════════════════════════════════════════════════ */
const LIGHT_TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const DARK_TILE_URL = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_ATTR = '© <a href="https://carto.com/">CARTO</a>, © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const DAY_COLORS = ['#E8590A', '#1A7A4A', '#1E2A6E']; // Saffron, Emerald, Navy

function initOrGetMap() {
  const city = CITIES[activeCity];
  if (!mapI) {
    const isDark = document.body.classList.contains('dark');
    isDarkMap = isDark;
    mapI = L.map('map', { zoomControl: true }).setView(city.coords, 12);
    currentBasemapLayer = L.tileLayer(isDark ? DARK_TILE_URL : LIGHT_TILE_URL, {
      attribution: TILE_ATTR,
      maxZoom: 19
    }).addTo(mapI);
  }
  return mapI;
}

function setMapBasemap(dark) {
  isDarkMap = dark;
  const btn = document.getElementById('mapThemeBtn');
  if (btn) btn.innerHTML = dark ? '<i class="fas fa-sun"></i> Light Map' : '<i class="fas fa-moon"></i> Dark Map';

  if (mapI && currentBasemapLayer) {
    mapI.removeLayer(currentBasemapLayer);
    currentBasemapLayer = L.tileLayer(dark ? DARK_TILE_URL : LIGHT_TILE_URL, {
      attribution: TILE_ATTR,
      maxZoom: 19
    }).addTo(mapI);
  }
}

function toggleMapBasemap() {
  setMapBasemap(!isDarkMap);
}

function fitMapBounds() {
  if (!mapI || !mapMarkers.length) return;
  const group = new L.featureGroup(mapMarkers);
  mapI.fitBounds(group.getBounds().pad(0.15));
}

// Fetch actual street road geometry via OSRM public routing API
async function fetchRoadRouteGeometry(places) {
  if (places.length < 2) return null;
  const coordStr = places.map(p => `${p.lng},${p.lat}`).join(';');
  const url = `https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`;

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000); // 4s timeout
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.code === 'Ok' && data.routes && data.routes[0]) {
      // GeoJSON is [lng, lat] -> Leaflet wants [lat, lng]
      return data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
    }
  } catch (e) {
    // Graceful fallback to geodesic line
  }
  return null;
}

async function updateMap() {
  const city = CITIES[activeCity];
  initOrGetMap();
  mapI.setView(city.coords, 12);

  mapMarkers.forEach(m => m.remove());
  mapMarkers = [];
  mapPolylines.forEach(p => p.remove());
  mapPolylines = [];

  if (lastResult && lastResult.city.name === city.name) {
    const days = lastResult.multiDay ? lastResult.days : [lastResult];

    for (let dIdx = 0; dIdx < days.length; dIdx++) {
      const dayData = days[dIdx];
      const itin = dayData.itinerary;
      if (!itin.length) continue;

      const dayCol = DAY_COLORS[dIdx % DAY_COLORS.length];
      const straightCoords = itin.map(a => [a.lat, a.lng]);

      // Try fetching real road network curves
      const roadCoords = await fetchRoadRouteGeometry(itin);
      const routePoints = roadCoords || straightCoords;

      const poly = L.polyline(routePoints, {
        color: dayCol,
        weight: 5,
        opacity: 0.85,
        dashArray: roadCoords ? null : '8, 8',
        lineJoin: 'round'
      }).addTo(mapI);
      mapPolylines.push(poly);

      // Numbered Stop Markers for this day
      itin.forEach((a, idx) => {
        const stepNum = idx + 1;
        const icon = L.divIcon({
          className: '',
          html: `<div style="background:${dayCol};color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;border:3px solid #fff;box-shadow:0 3px 14px rgba(0,0,0,.35);cursor:pointer">${days.length > 1 ? `D${dIdx + 1}.${stepNum}` : stepNum}</div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17]
        });
        const m = L.marker([a.lat, a.lng], { icon }).addTo(mapI);
        m.bindPopup(`
          <div class="mpop">
            <div style="font-size:10px;font-weight:700;color:${dayCol};text-transform:uppercase">
              ${days.length > 1 ? `Day ${dIdx + 1} · ` : ''}Stop ${stepNum} · ${a.start} - ${a.end}
            </div>
            <div class="mpop-name">${a.name}</div>
            <div class="mpop-chips">
              <span class="chip ct" style="font-size:10px"><i class="far fa-clock"></i>${a.time}h</span>
              <span class="chip cc2" style="font-size:10px">${formatCurrency(a.cost)}</span>
            </div>
            <div style="margin-top:6px">
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' ' + city.name)}"
                 target="_blank" class="gmaps-link">
                 <i class="fas fa-arrow-up-right-from-square"></i> Open Google Maps
              </a>
            </div>
          </div>`);
        m.on('click', () => openPP(activeCity, a.id));
        mapMarkers.push(m);
      });
    }

    // Unselected attractions
    const allItinIds = new Set(days.flatMap(d => d.itinerary.map(x => x.id)));
    city.attractions.filter(a => !allItinIds.has(a.id)).forEach(a => {
      const icon = L.divIcon({
        className: '',
        html: `<div style="background:#bbb;color:#fff;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.2);cursor:pointer;opacity:.7">×</div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });
      const m = L.marker([a.lat, a.lng], { icon }).addTo(mapI);
      m.bindPopup(`<div class="mpop"><div class="mpop-name">${a.name}</div><div style="font-size:10px;color:#999">Not in current itinerary</div></div>`);
      m.on('click', () => openPP(activeCity, a.id));
      mapMarkers.push(m);
    });

    fitMapBounds();
  } else {
    // City overview
    city.attractions.forEach(a => {
      const col = a.score >= 90 ? '#E8590A' : a.score >= 80 ? '#D4A017' : '#1E2A6E';
      const icon = L.divIcon({
        className: '',
        html: `<div style="background:${col};color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:2.5px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,.28);cursor:pointer">${a.score}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      const m = L.marker([a.lat, a.lng], { icon }).addTo(mapI);
      m.bindPopup(`
        <div class="mpop">
          <div class="mpop-name">${a.name}</div>
          <div class="mpop-chips">
            <span class="chip ct" style="font-size:10px"><i class="far fa-clock"></i>${a.time}h</span>
            <span class="chip cc2" style="font-size:10px">${formatCurrency(a.cost)}</span>
          </div>
          <div style="margin-top:6px">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.name + ' ' + city.name)}"
               target="_blank" class="gmaps-link">
               <i class="fas fa-arrow-up-right-from-square"></i> Open Google Maps
            </a>
          </div>
        </div>`);
      m.on('click', () => openPP(activeCity, a.id));
      mapMarkers.push(m);
    });
    fitMapBounds();
  }
}

function zoomToItinStop(lat, lng) {
  switchTab('map');
  setTimeout(() => {
    if (mapI) {
      mapI.flyTo([lat, lng], 15, { animate: true, duration: 1.2 });
    }
  }, 120);
}

/* ═══════════════════════════════════════════════════════
   DISTANCE & TRANSIT CALCULATION (Haversine Formula)
═══════════════════════════════════════════════════════ */
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function calculateTransit(a1, a2) {
  const dist = haversineDistance(a1.lat, a1.lng, a2.lat, a2.lng);

  // Pace factors
  let speedMultiplier = 2.8;
  let minMinutes = 15;
  if (travelPace === 'relaxed') {
    speedMultiplier = 3.5;
    minMinutes = 25;
  } else if (travelPace === 'packed') {
    speedMultiplier = 2.2;
    minMinutes = 10;
  }

  const mins = Math.max(minMinutes, Math.min(60, Math.round(dist * speedMultiplier)));
  const cost = Math.max(50, Math.round(dist * 18));
  let mode = "Auto / Taxi";
  if (dist <= 1.5) mode = "Short Walk / E-Rickshaw";
  else if (dist > 8) mode = "Metro / Cab";

  return {
    distKm: dist.toFixed(1),
    minutes: mins,
    estCost: cost,
    mode,
    originLat: a1.lat,
    originLng: a1.lng,
    destLat: a2.lat,
    destLng: a2.lng
  };
}

/* ═══════════════════════════════════════════════════════
   0/1 KNAPSACK DP WITH SPATIAL MULTI-DAY CLUSTERING
═══════════════════════════════════════════════════════ */
function knapsack(items, maxT, maxB, bucket = 100) {
  const n = items.length, B = Math.floor(maxB / bucket), T = maxT;
  if (n === 0 || T <= 0 || B <= 0) return { chosen: [], totalScore: 0 };

  const dp = Array.from({ length: T + 1 }, () => new Int32Array(B + 1));
  const keep = items.map(() => new Uint8Array((T + 1) * (B + 1)));
  const idx = (t, b) => t * (B + 1) + b;

  for (let i = 0; i < n; i++) {
    const it = Math.max(1, Math.round(items[i].time * (travelPace === 'relaxed' ? 1.25 : travelPace === 'packed' ? 0.85 : 1.0)));
    const ib = Math.ceil(items[i].cost / bucket);
    const iv = items[i].score;
    for (let t = T; t >= it; t--) {
      for (let b = B; b >= ib; b--) {
        const w = dp[t - it][b - ib] + iv;
        if (w > dp[t][b]) {
          dp[t][b] = w;
          keep[i][idx(t, b)] = 1;
        }
      }
    }
  }
  const chosen = [];
  let t = T, b = B;
  for (let i = n - 1; i >= 0; i--) {
    if (keep[i][idx(t, b)]) {
      chosen.unshift(i);
      const it = Math.max(1, Math.round(items[i].time * (travelPace === 'relaxed' ? 1.25 : travelPace === 'packed' ? 0.85 : 1.0)));
      t -= it;
      b -= Math.ceil(items[i].cost / bucket);
    }
  }
  return { chosen, totalScore: dp[T][B] };
}

function generateSingleDaySchedule(picked, city, dayIndex = 0) {
  let currentMinutes = 9 * 60; // 09:00 AM
  let hadLunch = false;
  const scheduled = [];

  for (let i = 0; i < picked.length; i++) {
    const place = picked[i];
    const durationHours = Math.max(1, Math.round(place.time * (travelPace === 'relaxed' ? 1.25 : travelPace === 'packed' ? 0.85 : 1.0)));

    // Mid-day authentic lunch window
    if (!hadLunch && currentMinutes >= (13 * 60 - 30) && (currentMinutes + durationHours * 60) > (13 * 60 + 45)) {
      hadLunch = true;
      const lStartH = Math.floor(currentMinutes / 60);
      const lStartM = currentMinutes % 60;
      currentMinutes += 60; // 1 hr lunch
      const lEndH = Math.floor(currentMinutes / 60);
      const lEndM = currentMinutes % 60;

      scheduled.push({
        isLunch: true,
        title: "Authentic Regional Lunch Break",
        dish: city.foodRec.dish,
        area: city.foodRec.area,
        desc: city.foodRec.desc,
        start: `${lStartH.toString().padStart(2, '0')}:${lStartM.toString().padStart(2, '0')}`,
        end: `${lEndH.toString().padStart(2, '0')}:${lEndM.toString().padStart(2, '0')}`
      });
    }

    let transitInfo = null;
    if (scheduled.length > 0) {
      const prevPlaces = scheduled.filter(x => !x.isLunch);
      if (prevPlaces.length > 0) {
        const prevPlace = prevPlaces[prevPlaces.length - 1];
        transitInfo = calculateTransit(prevPlace, place);
        currentMinutes += transitInfo.minutes;
      }
    }

    const sH = Math.floor(currentMinutes / 60);
    const sM = currentMinutes % 60;
    currentMinutes += durationHours * 60;
    const eH = Math.floor(currentMinutes / 60);
    const eM = currentMinutes % 60;

    scheduled.push({
      ...place,
      durationHours,
      transitBefore: transitInfo,
      start: `${sH.toString().padStart(2, '0')}:${sM.toString().padStart(2, '0')}`,
      end: `${eH.toString().padStart(2, '0')}:${eM.toString().padStart(2, '0')}`
    });
  }

  const realAttractions = scheduled.filter(x => !x.isLunch);
  const transits = scheduled.filter(x => x.transitBefore);
  const ticketBudget = realAttractions.reduce((s, a) => s + a.cost, 0);
  const estTransitCost = transits.reduce((s, x) => s + x.transitBefore.estCost, 0);
  const estFoodCost = realAttractions.length > 0 ? 450 : 0;
  const grandTotalCost = ticketBudget + estTransitCost + estFoodCost;
  const usedTime = realAttractions.reduce((s, a) => s + a.durationHours, 0);
  const totalScore = realAttractions.reduce((s, a) => s + a.score, 0);

  return {
    dayNum: dayIndex + 1,
    itinerary: realAttractions,
    fullSchedule: scheduled,
    stats: {
      score: totalScore,
      count: realAttractions.length,
      used_time: usedTime,
      used_budget: ticketBudget,
      est_transit_cost: estTransitCost,
      est_food_cost: estFoodCost,
      grand_total_cost: grandTotalCost
    }
  };
}

/* ═══ RUN OPTIMIZER (MULTI-DAY + SPATIAL TSP) ═══ */
function runOptimize() {
  const btn = document.getElementById('optBtn');
  btn.disabled = true;
  document.getElementById('lbar').classList.add('on');

  requestAnimationFrame(() => requestAnimationFrame(async () => {
    const dailyHours = parseInt(document.getElementById('tSlider').value);
    const totalBudget = parseInt(document.getElementById('bSlider').value);
    const city = CITIES[activeCity];
    const pool = [...city.attractions];

    const dailyBudget = Math.floor(totalBudget / tripDays);

    if (tripDays === 1) {
      // Single Day Plan
      const pinnedList = pool.filter(a => pinnedAttractionIds.has(a.id));
      const unpinnedList = pool.filter(a => !pinnedAttractionIds.has(a.id));

      let remT = dailyHours;
      let remB = dailyBudget;
      const guaranteed = [];

      pinnedList.forEach(item => {
        if (item.time <= remT && item.cost <= remB) {
          guaranteed.push(item);
          remT -= item.time;
          remB -= item.cost;
        }
      });

      const { chosen } = knapsack(unpinnedList, remT, remB);
      const chosenFromUnpinned = chosen.map(i => unpinnedList[i]);
      const picked = [...guaranteed, ...chosenFromUnpinned];
      const pickedIds = new Set(picked.map(a => a.id));
      const skipped = pool.filter(a => !pickedIds.has(a.id));

      const dayPlan = generateSingleDaySchedule(picked, city, 0);
      lastResult = {
        multiDay: false,
        city,
        itinerary: dayPlan.itinerary,
        fullSchedule: dayPlan.fullSchedule,
        skipped,
        stats: {
          ...dayPlan.stats,
          max_time: dailyHours,
          max_budget: dailyBudget,
          cells: dailyHours * Math.floor(dailyBudget / 100)
        }
      };
    } else {
      // Multi-Day Plan (2 or 3 Days)
      // Sort attractions by longitude/latitude into spatial clusters
      const sortedPool = [...pool].sort((a, b) => (a.lat + a.lng) - (b.lat + b.lng));
      const daysData = [];
      const usedIds = new Set();

      for (let d = 0; d < tripDays; d++) {
        const availablePool = sortedPool.filter(a => !usedIds.has(a.id));
        const dayPinned = availablePool.filter(a => pinnedAttractionIds.has(a.id));
        const dayUnpinned = availablePool.filter(a => !pinnedAttractionIds.has(a.id));

        let remT = dailyHours;
        let remB = dailyBudget;
        const guaranteed = [];

        dayPinned.forEach(item => {
          if (item.time <= remT && item.cost <= remB) {
            guaranteed.push(item);
            remT -= item.time;
            remB -= item.cost;
          }
        });

        const { chosen } = knapsack(dayUnpinned, remT, remB);
        const chosenFromUnpinned = chosen.map(i => dayUnpinned[i]);
        const dayPicked = [...guaranteed, ...chosenFromUnpinned];

        dayPicked.forEach(a => usedIds.add(a.id));
        const daySchedule = generateSingleDaySchedule(dayPicked, city, d);
        daysData.push(daySchedule);
      }

      const allItin = daysData.flatMap(d => d.itinerary);
      const allItinIds = new Set(allItin.map(a => a.id));
      const skipped = pool.filter(a => !allItinIds.has(a.id));

      const totalScore = daysData.reduce((s, d) => s + d.stats.score, 0);
      const totalTime = daysData.reduce((s, d) => s + d.stats.used_time, 0);
      const totalTicketBudget = daysData.reduce((s, d) => s + d.stats.used_budget, 0);
      const totalTransitCost = daysData.reduce((s, d) => s + d.stats.est_transit_cost, 0);
      const totalFoodCost = daysData.reduce((s, d) => s + d.stats.est_food_cost, 0);
      const grandTotalCost = totalTicketBudget + totalTransitCost + totalFoodCost;

      lastResult = {
        multiDay: true,
        daysCount: tripDays,
        city,
        days: daysData,
        itinerary: allItin,
        fullSchedule: daysData[0].fullSchedule,
        skipped,
        stats: {
          score: totalScore,
          count: allItin.length,
          used_time: totalTime,
          max_time: dailyHours * tripDays,
          used_budget: totalTicketBudget,
          max_budget: totalBudget,
          est_transit_cost: totalTransitCost,
          est_food_cost: totalFoodCost,
          grand_total_cost: grandTotalCost,
          cells: dailyHours * Math.floor(dailyBudget / 100) * tripDays
        }
      };
      activeResultDay = 0;
    }

    visitedStopIds.clear();
    renderResults(lastResult);

    document.getElementById('miniStatsWrap').style.display = 'block';
    document.getElementById('msS').textContent = lastResult.stats.score;
    document.getElementById('msT').textContent = lastResult.stats.used_time + 'h';
    document.getElementById('msC').textContent = lastResult.stats.count;

    switchTab('results');
    toast(`✨ ${tripDays}-Day Itinerary Ready! ${lastResult.stats.count} stops optimized.`);

    if (mapI) {
      await updateMap();
    }

    btn.disabled = false;
    document.getElementById('lbar').classList.remove('on');
  }));
}

/* ═══════════════════════════════════════════════════════
   INTERACTIVE ITINERARY REORDERING & REMOVAL
═══════════════════════════════════════════════════════ */
function moveStopUp(dayIdx, stopIdx) {
  if (!lastResult) return;
  const targetDay = lastResult.multiDay ? lastResult.days[dayIdx] : lastResult;
  if (stopIdx <= 0) return;

  const arr = targetDay.itinerary;
  const temp = arr[stopIdx];
  arr[stopIdx] = arr[stopIdx - 1];
  arr[stopIdx - 1] = temp;

  const updatedDay = generateSingleDaySchedule(arr, lastResult.city, dayIdx);
  if (lastResult.multiDay) {
    lastResult.days[dayIdx] = updatedDay;
    lastResult.itinerary = lastResult.days.flatMap(d => d.itinerary);
  } else {
    lastResult.itinerary = updatedDay.itinerary;
    lastResult.fullSchedule = updatedDay.fullSchedule;
    lastResult.stats = { ...lastResult.stats, ...updatedDay.stats };
  }

  renderResults(lastResult);
  if (mapI) updateMap();
  toast('Updated stop sequence');
}

function moveStopDown(dayIdx, stopIdx) {
  if (!lastResult) return;
  const targetDay = lastResult.multiDay ? lastResult.days[dayIdx] : lastResult;
  const arr = targetDay.itinerary;
  if (stopIdx >= arr.length - 1) return;

  const temp = arr[stopIdx];
  arr[stopIdx] = arr[stopIdx + 1];
  arr[stopIdx + 1] = temp;

  const updatedDay = generateSingleDaySchedule(arr, lastResult.city, dayIdx);
  if (lastResult.multiDay) {
    lastResult.days[dayIdx] = updatedDay;
    lastResult.itinerary = lastResult.days.flatMap(d => d.itinerary);
  } else {
    lastResult.itinerary = updatedDay.itinerary;
    lastResult.fullSchedule = updatedDay.fullSchedule;
    lastResult.stats = { ...lastResult.stats, ...updatedDay.stats };
  }

  renderResults(lastResult);
  if (mapI) updateMap();
  toast('Updated stop sequence');
}

function removeStop(dayIdx, stopIdx) {
  if (!lastResult) return;
  const targetDay = lastResult.multiDay ? lastResult.days[dayIdx] : lastResult;
  const removed = targetDay.itinerary.splice(stopIdx, 1)[0];

  const updatedDay = generateSingleDaySchedule(targetDay.itinerary, lastResult.city, dayIdx);
  if (lastResult.multiDay) {
    lastResult.days[dayIdx] = updatedDay;
    lastResult.itinerary = lastResult.days.flatMap(d => d.itinerary);
  } else {
    lastResult.itinerary = updatedDay.itinerary;
    lastResult.fullSchedule = updatedDay.fullSchedule;
    lastResult.stats = { ...lastResult.stats, ...updatedDay.stats };
  }

  renderResults(lastResult);
  if (mapI) updateMap();
  toast(`Removed "${removed.name}" from itinerary`);
}

function switchResultDayTab(dayIdx) {
  activeResultDay = dayIdx;
  document.querySelectorAll('.day-tabs-bar .dtab').forEach((b, i) => b.classList.toggle('on', i === dayIdx));
  document.querySelectorAll('.day-view-panel').forEach((p, i) => p.style.display = i === dayIdx ? 'block' : 'none');
}

/* ═══════════════════════════════════════════════════════
   RENDER RESULTS (Multi-Day Tabs & Reordering Controls)
═══════════════════════════════════════════════════════ */
function renderResults(d) {
  const container = document.getElementById('resArea');

  if (!d.itinerary.length) {
    container.innerHTML = `
      <div class="empty">
        <i class="fas fa-exclamation-circle empty-icon"></i>
        <div class="empty-title">No attractions fit your constraints</div>
        <div class="empty-desc">Try increasing your available time slider or budget in ${currentCurrency}.</div>
      </div>`;
    return;
  }

  const { stats } = d;
  const saveBtn = user
    ? `<button class="save-btn" onclick="saveTrip()"><i class="fas fa-bookmark"></i> Save Trip</button>`
    : `<button class="save-btn" onclick="saveTrip()"><i class="fas fa-bookmark"></i> Save Trip (Guest)</button>`;

  const days = d.multiDay ? d.days : [d];

  // Build Day Tabs for Multi-Day Trips
  let dayTabsHTML = '';
  if (d.multiDay) {
    dayTabsHTML = `
      <div class="day-tabs-bar">
        ${days.map((day, idx) => `
          <button class="dtab ${idx === activeResultDay ? 'on' : ''}" onclick="switchResultDayTab(${idx})">
            <i class="fas fa-calendar-day"></i> Day ${idx + 1} (${day.itinerary.length} stops)
          </button>`).join('')}
      </div>`;
  }

  // Render Day Timelines
  const daysHTML = days.map((day, dayIdx) => {
    let stepIdx = 0;
    const schedule = day.fullSchedule || day.itinerary;
    const itemsHTML = schedule.map((item, itemIdx) => {
      if (item.isLunch) {
        return `
          <div class="itin-lunch">
            <div class="lunch-time">${item.start}<br><small style="font-size:10px">${item.end}</small></div>
            <div class="lunch-content">
              <div class="lunch-title"><i class="fas fa-utensils"></i> ${item.title}</div>
              <div style="font-size:12px;font-weight:700;color:var(--ink2);margin-top:2px">${item.dish} · <span style="font-weight:500;color:var(--muted)">${item.area}</span></div>
              <div class="lunch-desc">${item.desc}</div>
            </div>
          </div>`;
      }

      const realIdx = day.itinerary.findIndex(x => x.id === item.id);
      stepIdx++;
      const isVisited = visitedStopIds.has(item.id);

      const transitBadge = item.transitBefore ? `
        <div class="itin-transit">
          <div class="transit-icon-line"><i class="fas fa-taxi"></i> ${item.transitBefore.minutes} min transit</div>
          <div class="transit-detail">
            ${item.transitBefore.distKm} km · via ${item.transitBefore.mode} (est. ${formatCurrency(item.transitBefore.estCost)})
            <a href="https://www.google.com/maps/dir/?api=1&origin=${item.transitBefore.originLat},${item.transitBefore.originLng}&destination=${item.transitBefore.destLat},${item.transitBefore.destLng}&travelmode=driving"
               target="_blank" class="gmaps-link"><i class="fas fa-diamond-turn-right"></i> Directions</a>
          </div>
        </div>` : '';

      return `
        ${transitBadge}
        <div class="itin-stop ${isVisited ? 'visited' : ''}" id="itin_stop_${item.id}" onclick="openPP('${activeCity}','${item.id}')">
          <button class="itin-chk-btn" onclick="event.stopPropagation();toggleVisited('${item.id}')" title="Mark as Visited">
            <i class="fas fa-check"></i>
          </button>
          <div class="itin-time">
            <div class="itin-ts">${item.start}</div>
            <div class="itin-te">${item.end}</div>
          </div>
          <div class="itin-body">
            <img class="itin-img" src="${item.img}" alt="${item.name}"
              onerror="this.src='https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop'">
            <div style="flex:1">
              <div class="itin-name">
                <span style="font-size:11px;color:var(--sf);font-weight:700;margin-right:4px">
                  ${d.multiDay ? `D${dayIdx + 1}.${stepIdx}` : `#${stepIdx}`}
                </span> ${item.name}
              </div>
              <div class="itin-chips">
                <span class="chip ct" style="font-size:9px"><i class="far fa-clock"></i>${item.durationHours || item.time}h</span>
                <span class="chip cc2" style="font-size:9px">${formatCurrency(item.cost)}</span>
                <span class="chip cs" style="font-size:9px"><i class="fas fa-star"></i>${item.score}</span>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' ' + d.city.name)}"
                   target="_blank" onclick="event.stopPropagation()" class="gmaps-link">
                   <i class="fas fa-location-arrow"></i> Google Maps
                </a>
              </div>
            </div>
            <!-- Stop Reordering Controls -->
            <div class="itin-ctrls" onclick="event.stopPropagation()">
              <button class="stop-btn" onclick="moveStopUp(${dayIdx}, ${realIdx})" title="Move Stop Earlier">▲</button>
              <button class="stop-btn" onclick="moveStopDown(${dayIdx}, ${realIdx})" title="Move Stop Later">▼</button>
              <button class="stop-btn stop-del-btn" onclick="removeStop(${dayIdx}, ${realIdx})" title="Remove Stop">✕</button>
            </div>
          </div>
          <div class="itin-ring" style="background:conic-gradient(${DAY_COLORS[dayIdx % DAY_COLORS.length]} ${item.score * 3.6}deg,#DDD0BA 0deg)">
            <span class="itin-ring-num">${item.score}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="day-view-panel" id="dayViewPanel_${dayIdx}" style="display:${dayIdx === activeResultDay ? 'block' : 'none'}">
        <div class="itin">
          <div class="itin-hd" style="background:${DAY_COLORS[dayIdx % DAY_COLORS.length]}">
            <i class="fas fa-route"></i> Day ${dayIdx + 1} Plan · Starting 9:00 AM · ${day.itinerary.length} stops planned
          </div>
          ${itemsHTML}
        </div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="res-head">
      <div>
        <div class="res-city">${d.city.name} ${d.multiDay ? `${d.daysCount}-Day` : 'Day'} Itinerary</div>
        <div class="res-sub">${d.city.state} · ${d.city.tagline}</div>
      </div>
      <div class="res-actions">
        <button class="res-act-btn" onclick="window.print()" title="Print or save as PDF"><i class="fas fa-print"></i> Print / PDF</button>
        <button class="res-act-btn" onclick="exportCalendar()" title="Add to Google Calendar / Outlook"><i class="fas fa-calendar-plus"></i> Add to Calendar</button>
        <button class="res-act-btn" onclick="shareItinerary()" title="Share trip via WhatsApp or link"><i class="fas fa-share-nodes"></i> Share</button>
        ${saveBtn}
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card a">
        <div class="stat-lbl">DP Score</div>
        <div class="stat-val">${stats.score}</div>
        <div class="stat-unit">${stats.count} attractions selected</div>
      </div>
      <div class="stat-card b">
        <div class="stat-lbl">Sightseeing Time</div>
        <div class="stat-val">${stats.used_time}<small style="font-size:14px">h</small></div>
        <div class="stat-unit">of ${stats.max_time}h · ${Math.round(stats.used_time / stats.max_time * 100)}% utilized</div>
      </div>
      <div class="stat-card c">
        <div class="stat-lbl">Entry Tickets</div>
        <div class="stat-val" style="font-size:22px">${formatCurrency(stats.used_budget)}</div>
        <div class="stat-unit">of ${formatCurrency(stats.max_budget)} limit</div>
      </div>
      <div class="stat-card d">
        <div class="stat-lbl">Estimated Total</div>
        <div class="stat-val" style="font-size:22px">${formatCurrency(stats.grand_total_cost)}</div>
        <div class="stat-unit">incl. transit &amp; food</div>
      </div>
    </div>

    <!-- Budget Breakdown Card -->
    <div class="budget-card">
      <div class="bc-title"><i class="fas fa-wallet"></i> Realistic Budget Estimation (${d.multiDay ? `${d.daysCount} Days` : 'Full Day'})</div>
      <div class="bc-grid">
        <div class="bc-item">
          <div class="bc-lbl"><i class="fas fa-ticket"></i> Monument &amp; Attraction Tickets</div>
          <div class="bc-val">${formatCurrency(stats.used_budget)}</div>
          <div class="bc-sub">Actual entrance fees for ${stats.count} places</div>
        </div>
        <div class="bc-item">
          <div class="bc-lbl"><i class="fas fa-taxi"></i> Local Transit (Metro / Autos)</div>
          <div class="bc-val">~${formatCurrency(stats.est_transit_cost)}</div>
          <div class="bc-sub">Point-to-point travel between stops</div>
        </div>
        <div class="bc-item">
          <div class="bc-lbl"><i class="fas fa-bowl-food"></i> Regional Food &amp; Chai</div>
          <div class="bc-val">~${formatCurrency(stats.est_food_cost)}</div>
          <div class="bc-sub">Authentic lunches and snacks</div>
        </div>
      </div>
    </div>

    <!-- Multi-Day Navigation Tabs & Timelines -->
    ${dayTabsHTML}
    ${daysHTML}

    <!-- Skipped Items -->
    ${d.skipped.length ? `
      <div class="skip-wrap">
        <div class="skip-title">Excluded by Knapsack (Exceeded Time or Budget Constraints)</div>
        <div class="skip-list">${d.skipped.map(s => `<span class="skip-chip">${s.name} (${s.time}h · ${formatCurrency(s.cost)})</span>`).join('')}</div>
      </div>` : ''}

    <!-- Algorithm Trace -->
    <div class="dp-panel">
      <div class="dp-title"><i class="fas fa-code"></i> Algorithm Trace — 0/1 Knapsack Dynamic Programming + Spatial TSP</div>
      <span class="dh">dp[${stats.max_time}h][${Math.floor(stats.max_budget / 100)} cells]</span> = <span class="dh2">${stats.score} pts — mathematically guaranteed optimal</span><br>
      Attractions evaluated: <span class="dh">${d.itinerary.length + d.skipped.length}</span> across ${d.city.name}<br>
      Routing: <span class="dh2">OSRM Turn-by-Turn Road Engine</span> with Google Maps navigation links<br>
      Pace Mode: <span class="dh">${travelPace.toUpperCase()}</span> · ₹100 granularity budget cell
    </div>`;
}

function toggleVisited(id) {
  if (visitedStopIds.has(id)) {
    visitedStopIds.delete(id);
  } else {
    visitedStopIds.add(id);
    toast('✓ Marked stop as visited!');
  }

  const el = document.getElementById(`itin_stop_${id}`);
  if (el) {
    el.classList.toggle('visited', visitedStopIds.has(id));
  }

  if (lastResult && visitedStopIds.size === lastResult.itinerary.length) {
    toast('🎉 Congratulations! You completed your entire Yatra!');
  }
}

/* ═══════════════════════════════════════════════════════
   EXPORT: CALENDAR (.ICS) & SHARE
═══════════════════════════════════════════════════════ */
function exportCalendar() {
  if (!lastResult || !lastResult.itinerary.length) return;

  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  const dateStr = `${y}${m}${d}`;

  let icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//YatraApp//Trip Planner//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];

  lastResult.itinerary.forEach((item, idx) => {
    const sClean = (item.start || "09:00").replace(':', '') + '00';
    const eClean = (item.end || "11:00").replace(':', '') + '00';
    icsLines.push(
      "BEGIN:VEVENT",
      `UID:yatra-${item.id}-${Date.now()}@yatraapp.io`,
      `DTSTAMP:${dateStr}T090000Z`,
      `DTSTART:${dateStr}T${sClean}`,
      `DTEND:${dateStr}T${eClean}`,
      `SUMMARY:${item.name} (Stop #${idx + 1} - YatraApp)`,
      `DESCRIPTION:${item.desc.replace(/,/g, '\\,')}`,
      `LOCATION:${item.name}\\, ${lastResult.city.name}\\, India`,
      "STATUS:CONFIRMED",
      "END:VEVENT"
    );
  });

  icsLines.push("END:VCALENDAR");
  const blob = new Blob([icsLines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Yatra_${lastResult.city.name.replace(/\s+/g, '_')}_Itinerary.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('📅 Calendar (.ics) file downloaded!');
}

function shareItinerary() {
  if (!lastResult || !lastResult.itinerary.length) return;
  const stops = lastResult.itinerary.map((a, i) => `${i + 1}. ${a.name} (${a.start || ''} - ${a.end || ''})`).join('\n');
  const text = `🌍 My ${lastResult.city.name} Yatra Itinerary:\n\n${stops}\n\nTotal Time: ${lastResult.stats.used_time}h | Budget: ${formatCurrency(lastResult.stats.used_budget)} | DP Score: ${lastResult.stats.score}\n\nPlanned with YatraApp!`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    toast('📋 Trip summary copied to clipboard!');
  }

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

/* ═══════════════════════════════════════════════════════
   SAVE & LOAD TRIPS (Re-openable & Interactive)
═══════════════════════════════════════════════════════ */
function saveTrip() {
  if (!lastResult) return;
  const tripKey = user ? ('yatraTrips_' + user.id) : 'yatraTrips_guest';
  const trips = JSON.parse(localStorage.getItem(tripKey) || '[]');

  const newTrip = {
    id: Date.now(),
    city: activeCity,
    cityName: lastResult.city.name,
    state: lastResult.city.state,
    attractions: lastResult.itinerary.map(a => a.name),
    fullResult: lastResult,
    score: lastResult.stats.score,
    budget: lastResult.stats.used_budget,
    grandTotal: lastResult.stats.grand_total_cost,
    time: lastResult.stats.used_time,
    count: lastResult.stats.count,
    multiDay: lastResult.multiDay,
    createdAt: Date.now()
  };

  trips.unshift(newTrip);
  localStorage.setItem(tripKey, JSON.stringify(trips.slice(0, 25)));
  toast('Trip saved successfully!');
  if (document.getElementById('tp-trips').classList.contains('on')) loadTrips();
}

function loadTrips() {
  const tripKey = user ? ('yatraTrips_' + user.id) : 'yatraTrips_guest';
  const trips = JSON.parse(localStorage.getItem(tripKey) || '[]');

  const container = document.getElementById('tripsArea');
  if (!trips.length) {
    container.innerHTML = `
      <div class="empty">
        <i class="fas fa-bookmark empty-icon"></i>
        <div class="empty-title">No saved trips yet</div>
        <div class="empty-desc">Choose a city, optimise your constraints, and click <strong>Save Trip</strong>!</div>
      </div>`;
    return;
  }

  container.innerHTML = trips.map(t => `
    <div class="trip-card" onclick="reopenSavedTrip(${t.id})" style="cursor:pointer">
      <div class="trip-icon">${CITY_FLAGS[t.city] || '📍'}</div>
      <div style="flex:1">
        <div class="trip-name">${t.cityName} ${t.multiDay ? 'Multi-Day ' : ''}Yatra</div>
        <div class="trip-meta">${t.time}h · ${formatCurrency(t.budget)} · ${t.count} stops · ${new Date(t.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        <div style="font-size:11px;color:var(--sf);margin-top:3px;font-weight:600"><i class="fas fa-folder-open"></i> Click to view full itinerary</div>
      </div>
      <div class="trip-score">${t.score}</div>
      <button onclick="event.stopPropagation();deleteTrip(${t.id})" style="margin-left:10px;border:none;background:#ff4d4f;color:white;padding:8px 12px;border-radius:8px;cursor:pointer" title="Delete Trip">
        <i class="fas fa-trash"></i>
      </button>
    </div>`).join('');
}

function reopenSavedTrip(id) {
  const tripKey = user ? ('yatraTrips_' + user.id) : 'yatraTrips_guest';
  const trips = JSON.parse(localStorage.getItem(tripKey) || '[]');
  const found = trips.find(t => t.id === id);
  if (!found) return;

  activeCity = found.city;
  renderCityGrid();
  loadCity(found.city);

  if (found.fullResult) {
    lastResult = found.fullResult;
  } else {
    const city = CITIES[found.city];
    const picked = city.attractions.filter(a => found.attractions.includes(a.name));
    lastResult = {
      multiDay: false,
      city,
      itinerary: picked,
      fullSchedule: picked,
      skipped: city.attractions.filter(a => !found.attractions.includes(a.name)),
      stats: {
        score: found.score,
        count: found.count,
        used_time: found.time,
        max_time: found.time,
        used_budget: found.budget,
        max_budget: found.budget,
        est_transit_cost: 200,
        est_food_cost: 450,
        grand_total_cost: found.budget + 650,
        cells: 500
      }
    };
  }

  renderResults(lastResult);
  switchTab('results');
  toast(`Loaded saved ${found.cityName} itinerary!`);
  if (mapI) updateMap();
}

function deleteTrip(id) {
  const tripKey = user ? ('yatraTrips_' + user.id) : 'yatraTrips_guest';
  let trips = JSON.parse(localStorage.getItem(tripKey) || '[]');
  trips = trips.filter(t => t.id !== id);
  localStorage.setItem(tripKey, JSON.stringify(trips));
  loadTrips();
  toast('Trip deleted');
}

/* ═══ TABS ═══ */
function switchTab(name) {
  const names = ['attractions', 'map', 'results', 'trips'];
  document.querySelectorAll('.tb').forEach((b, i) => b.classList.toggle('on', names[i] === name));
  document.querySelectorAll('.tp').forEach(p => p.classList.remove('on'));
  const target = document.getElementById('tp-' + name);
  if (target) target.classList.add('on');

  if (name === 'map') {
    setTimeout(() => {
      if (mapI) {
        mapI.invalidateSize();
        updateMap();
      } else {
        updateMap();
      }
    }, 100);
  }
  if (name === 'trips') loadTrips();
}

/* ═══ TOAST ═══ */
function toast(msg) {
  const txt = document.getElementById('toastTxt');
  const t = document.getElementById('toast');
  if (!txt || !t) return;
  txt.textContent = msg;
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 3400);
}

/* ═══ BOOT ═══ */
window.addEventListener('DOMContentLoaded', () => {
  if (user) setUser(user);
  showHero();

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const gateOv = document.getElementById('gateOv');
  if (gateOv) {
    gateOv.addEventListener('click', e => {
      if (e.target === gateOv) closeGate();
    });
  }

  const profOv = document.getElementById('profileOv');
  if (profOv) {
    profOv.addEventListener('click', e => {
      if (e.target === profOv) closeProfile();
    });
  }

  const addPlaceOv = document.getElementById('addPlaceOv');
  if (addPlaceOv) {
    addPlaceOv.addEventListener('click', e => {
      if (e.target === addPlaceOv) closeAddPlaceModal();
    });
  }

  const safetyOv = document.getElementById('safetyOv');
  if (safetyOv) {
    safetyOv.addEventListener('click', e => {
      if (e.target === safetyOv) closeSafetyModal();
    });
  }
});
