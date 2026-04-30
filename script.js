/* ═══════════════════════════════════════════════════════
   DATA — All cities & attractions (no backend needed)
═══════════════════════════════════════════════════════ */
const CITIES = {
  delhi:{name:"New Delhi",state:"Delhi",tagline:"Heart of Incredible India",coords:[28.6139,77.2090],
    attractions:[
      {id:"dl1",name:"Red Fort",time:3,cost:650,score:96,cat:"Heritage",lat:28.6562,lng:77.2410,
       desc:"17th-century Mughal fortress by Shah Jahan. UNESCO World Heritage. Lahore Gate, Diwan-i-Aam & stunning palace complexes.",
       img:"https://images.unsplash.com/photo-1713729991304-d0b6c328560e?q=80&w=2586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl2",name:"Qutub Minar",time:2,cost:350,score:91,cat:"UNESCO",lat:28.5245,lng:77.1855,
       desc:"73m victory minaret from 1193 AD, India's oldest Islamic monument. Complex includes Quwwat-ul-Islam mosque ruins.",
       img:"https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl3",name:"Akshardham Temple",time:3,cost:0,score:94,cat:"Spiritual",lat:28.6127,lng:77.2773,
       desc:"World's largest Hindu temple complex (2005). 234 ornate pillars, 20,000 statues in pink sandstone. No entry fee.",
       img:"https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl4",name:"Humayun's Tomb",time:2,cost:350,score:90,cat:"Heritage",lat:28.5933,lng:77.2507,
       desc:"1572 Mughal mausoleum that inspired the Taj Mahal. First garden-tomb in India. UNESCO World Heritage Site.",
       img:"https://images.unsplash.com/photo-1695293351566-1dc582acc504?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl5",name:"Chandni Chowk",time:2,cost:400,score:87,cat:"Food",lat:28.6560,lng:77.2300,
       desc:"350-year-old market street. Street food paradise — parathas, jalebis, chaat. Old Delhi's beating commercial heart.",
       img:"https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl6",name:"India Gate",time:1,cost:0,score:83,cat:"Landmark",lat:28.6129,lng:77.2295,
       desc:"42m war memorial on Kartavya Path. Eternal flame for 1971 martyrs. Lush lawns for evening walks. Free entry.",
       img:"https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl7",name:"Lotus Temple",time:1,cost:0,score:81,cat:"Spiritual",lat:28.5535,lng:77.2588,
       desc:"Award-winning Bahá'í temple shaped like a blooming lotus. Open to all religions. Architect Fariborz Sahba's masterpiece.",
       img:"https://images.unsplash.com/photo-1688257899811-d96d969416bf?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},

      {id:"dl8",name:"National Museum",time:3,cost:100,score:80,cat:"Culture",lat:28.6117,lng:77.2194,
       desc:"5,000 years of Indian art under one roof. Harappan seals to Mughal miniatures. 200,000+ artefacts.",
       img:"https://s7ap1.scene7.com/is/image/incredibleindia/national-museum-delhi-2-attr-hero?qlt=82&ts=1742170067339.jpg"},

      {id:"dl9",name:"Lodi Garden",time:1,cost:0,score:72,cat:"Nature",lat:28.5930,lng:77.2197,
       desc:"90-acre park with 15th-century Sayyid and Lodi tombs. Beloved morning walk spot in central Delhi.",
       img:"https://plus.unsplash.com/premium_photo-1697730315030-7bd75dbf4e63?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
       
      {id:"dl10",name:"Dilli Haat",time:2,cost:30,score:75,cat:"Shopping",lat:28.5726,lng:77.2080,
       desc:"Open-air craft bazaar showcasing all Indian states. Authentic handicrafts, regional food stalls, folk performances.",
       img:"https://images.unsplash.com/photo-1513014576558-921f00d80b77?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
    ]
  },
  jaipur:{name:"Jaipur",state:"Rajasthan",tagline:"The Pink City of Rajputana",coords:[26.9124,75.7873],
    attractions:[
      {id:"jp1",name:"Amber Fort",time:4,cost:550,score:99,cat:"Heritage",lat:26.9855,lng:75.8513,
       desc:"Magnificent 16th-century hillfort by Raja Man Singh. Sheesh Mahal mirror hall, elephant rides, light & sound show.",
       img:"https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp2",name:"Hawa Mahal",time:1,cost:100,score:88,cat:"Heritage",lat:26.9239,lng:75.8267,
       desc:"1799 Palace of Winds with 953 latticed windows. Built for royal women to observe street life unseen. Jaipur's iconic facade.",
       img:"https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?q=80&w=1002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp3",name:"City Palace",time:2,cost:700,score:92,cat:"Heritage",lat:26.9258,lng:75.8237,
       desc:"Royal complex blending Mughal and Rajput styles. Mubarak Mahal, Chandra Mahal, costumes, royal armoury.",
       img:"https://images.unsplash.com/photo-1667099639128-4b10f464f4a2?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp4",name:"Jantar Mantar",time:1,cost:200,score:85,cat:"UNESCO",lat:26.9246,lng:75.8243,
       desc:"1734 astronomical observatory with world's largest stone sundial. 19 instruments still accurate today. UNESCO site.",
       img:"https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp5",name:"Nahargarh Fort",time:2,cost:200,score:89,cat:"Scenic",lat:26.9444,lng:75.8150,
       desc:"18th-century fort on Aravalli Hills. Panoramic Jaipur cityscape. Spectacular sunset viewpoint.",
       img:"https://images.unsplash.com/photo-1648217516771-74a081268aac?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp6",name:"Jal Mahal",time:1,cost:0,score:80,cat:"Scenic",lat:26.9528,lng:75.8325,
       desc:"18th-century palace floating on Man Sagar Lake. Mughal-Rajput blend. Best photographed from the lakeside.",
       img:"https://images.unsplash.com/photo-1661924326425-c14a6426d989?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp7",name:"Albert Hall Museum",time:2,cost:150,score:76,cat:"Culture",lat:26.9042,lng:75.8198,
       desc:"1887 Indo-Saracenic museum. Egyptian mummy, miniature paintings, decorative arts. Illuminated beautifully at night.",
       img:"https://plus.unsplash.com/premium_photo-1691031429594-83d6103ec104?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp8",name:"Chokhi Dhani",time:3,cost:1200,score:84,cat:"Culture",lat:26.7893,lng:75.7893,
       desc:"Authentic Rajasthani village resort. Folk dance, camel rides, puppet shows, fire acts, traditional thali dinner.",
       img:"https://chokhidhani.com/village-fair-restaurant-jaipur/wp-content/uploads/elementor/thumbs/Slider-2-qkiqnz3odzoejwd9ouup98z3m8iqnrl9eqidd8r6s0.jpg"},
      {id:"jp9",name:"Galtaji Temple",time:2,cost:100,score:79,cat:"Spiritual",lat:26.9009,lng:75.8764,
       desc:"7th-century pilgrimage site with natural springs. Hundreds of monkeys roam freely. Hidden in Aravalli hills.",
       img:"https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"jp10",name:"Johari Bazaar",time:2,cost:800,score:78,cat:"Shopping",lat:26.9195,lng:75.8243,
       desc:"Jaipur's jewellery hub. Kundan, meenakari, gemstones. Also famed for Bandhani fabric, blue pottery, lac bangles.",
       img:"https://images.unsplash.com/photo-1606837731832-99e78287e7b9?q=80&w=1710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
    ]
  },
  mumbai:{name:"Mumbai",state:"Maharashtra",tagline:"Maximum City, Maximum Dreams",coords:[19.0760,72.8777],
    attractions:[
      {id:"mb1",name:"Elephanta Caves",time:4,cost:700,score:94,cat:"UNESCO",lat:18.9633,lng:72.9315,
       desc:"5th-century rock-cut Shiva temples on Elephanta Island. 1hr ferry from Gateway. UNESCO World Heritage Site.",
       img:"https://plus.unsplash.com/premium_photo-1697730348607-38bab9f149bd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"mb2",name:"Gateway of India",time:1,cost:0,score:85,cat:"Landmark",lat:18.9220,lng:72.8347,
       desc:"1924 colonial basalt arch on Apollo Bunder. Last British troops departed India through this gate in 1948.",
       img:"https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"mb3",name:"CSMVS Museum",time:2,cost:200,score:88,cat:"Culture",lat:18.9267,lng:72.8325,
       desc:"Indo-Saracenic masterpiece housing 50,000+ artefacts spanning 5,000 years of Indian civilization.",
       img:"https://culture360.asef.org/media/2023/8/CSMVS.jpg"},
      {id:"mb4",name:"Dharavi Walk",time:2,cost:1500,score:86,cat:"Experience",lat:19.0404,lng:72.8535,
       desc:"Guided tour of Asia's largest informal economy. Thriving leather, pottery and recycling industries. Eye-opening.",
       img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dharavi_India.jpg/1280px-Dharavi_India.jpg"},
      {id:"mb5",name:"Bollywood Studio",time:3,cost:2000,score:89,cat:"Culture",lat:19.1688,lng:72.8436,
       desc:"Film City behind-the-scenes. Live sets, costumes, props. India produces 1,000+ films annually here.",
       img:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/bb/44/86.jpg"},
      {id:"mb6",name:"Marine Drive",time:1,cost:0,score:80,cat:"Scenic",lat:18.9440,lng:72.8236,
       desc:"3.6km Queen's Necklace. Art Deco buildings, iconic skyline, Arabian Sea breeze at dusk. Free.",
       img:"https://images.unsplash.com/photo-1682414593649-c3e4024a7995?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"mb7",name:"Siddhivinayak Temple",time:1,cost:0,score:81,cat:"Spiritual",lat:19.0161,lng:72.8302,
       desc:"One of India's richest temples. Black stone Ganesh idol with trunk turned right. Bollywood celebrities flock here.",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXUM0OHnYMSqA16vcrrH-7BIzpt0o2zh7sw&s.jpg"},
      {id:"mb8",name:"Haji Ali Dargah",time:1,cost:0,score:82,cat:"Spiritual",lat:18.9827,lng:72.8092,
       desc:"1431 mosque and dargah on a tidal islet 500m offshore. Accessible only at low tide. Qawwali music evenings.",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49-EZwfxTFUpaKL1B9m9-RrGvGeFw3LgEig&s.jpg"},
      {id:"mb9",name:"Colaba Causeway",time:2,cost:600,score:74,cat:"Shopping",lat:18.9150,lng:72.8290,
       desc:"Vibrant street market. Antiques, silver jewellery, leather bags. Leopold Cafe — a Mumbaikar institution — is nearby.",
       img:"https://traveleva.gumlet.io/activities/1954/1954_colaba-causeway.jpg?w=1244&h=312.jpg"},
      {id:"mb10",name:"Juhu Beach",time:1,cost:100,score:72,cat:"Food",lat:19.0974,lng:72.8268,
       desc:"Famous for vada pav, bhel puri, pani puri. Bollywood neighbourhood. Beautiful Arabian Sea sunset views.",
       img:"https://visitplacesindia.com/wp-content/uploads/2024/11/juhu-beach-mumbaidd.jpg"},
    ]
  },
  varanasi:{name:"Varanasi",state:"Uttar Pradesh",tagline:"The Eternal City on the Ganges",coords:[25.3176,82.9739],
    attractions:[
      {id:"vr1",name:"Dashashwamedh Aarti",time:2,cost:0,score:99,cat:"Spiritual",lat:25.3063,lng:83.0126,
       desc:"Nightly Ganga fire ritual. Priests perform synchronized aarti with brass lamps, incense and chants. Unmissable.",
       img:"https://images.bhaskarassets.com/thumb/730x0/web2images/521/2023/12/31/e6ab8239-17aa-4e66-b6fd-817e762fdfdb_1704039408563.jpg"},
      {id:"vr2",name:"Sunrise Boat Ride",time:2,cost:500,score:97,cat:"Experience",lat:25.3100,lng:83.0130,
       desc:"Row boat at dawn past 88 ghats. Bathing rituals, floating diyas, fog, bells and chants — otherworldly.",
       img:"https://images.unsplash.com/photo-1677047760488-3cb44e916553?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"vr3",name:"Kashi Vishwanath",time:2,cost:0,score:94,cat:"Spiritual",lat:25.3109,lng:83.0107,
       desc:"Holiest Shiva temple, one of 12 Jyotirlingas. Golden spire by Maharaja Ranjit Singh. Rebuilt 1780.",
       img:"https://kashi.gov.in/cmsadmin/getApiFile/CMS/68c3e3daadb281757668314~jpg"},
      {id:"vr4",name:"Sarnath",time:3,cost:200,score:91,cat:"Heritage",lat:25.3814,lng:83.0241,
       desc:"Where Buddha gave his first sermon after enlightenment. Dhamek Stupa, Ashoka Pillar, archaeological museum.",
       img:"https://www.tripsavvy.com/thmb/nAutKnpCRkUPxY7awFfAzQEkz-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-11277274181-f11cfdb1a6514121aa39eea112917faf.jpg"},
      {id:"vr5",name:"Manikarnika Ghat",time:1,cost:0,score:88,cat:"Spiritual",lat:25.3103,lng:83.0109,
       desc:"Holiest cremation ghat, fires burning continuously for 3,500 years. Hindus believe dying here grants moksha.",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwtL4ypCAEpRwQcbVGJBUjkSw6Gq8rx2t_ug&s.jpg"},
      {id:"vr6",name:"Assi Ghat at Dawn",time:1,cost:0,score:84,cat:"Wellness",lat:25.2988,lng:83.0022,
       desc:"Southernmost major ghat. Morning yoga, meditation, Puja. More relaxed than northern ghats. Scholar's corner.",
       img:"https://live.staticflickr.com/7526/15609742464_e37ae8cf1e_b.jpg"},
      {id:"vr7",name:"Silk Weaving Workshop",time:2,cost:200,score:80,cat:"Craft",lat:25.3200,lng:83.0100,
       desc:"Banarasi silk 2,000 years old. Watch master weavers on handlooms. UNESCO Intangible Cultural Heritage.",
       img:"https://images.unsplash.com/photo-1597371140946-cfd3dd5a76b9?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"vr8",name:"Classical Music Evening",time:2,cost:500,score:83,cat:"Culture",lat:25.3150,lng:83.0050,
       desc:"Varanasi is India's classical music capital. Evening raga concerts — sitar, santoor, tabla near the ghats.",
       img:"https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/14/90/69/77.jpg"},
      {id:"vr9",name:"BHU Campus",time:2,cost:0,score:78,cat:"Culture",lat:25.2677,lng:82.9914,
       desc:"Banaras Hindu University, 1,400-acre campus founded 1916. Own Vishwanath temple. Bharat Kala Bhavan museum.",
       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSp4Kr05jGh6jt0Y4SuZjQzYjRxaO3EZ1p7g&s.jpg"},
      {id:"vr10",name:"Old City Food Walk",time:1,cost:200,score:79,cat:"Food",lat:25.3120,lng:83.0080,
       desc:"Kashi lassi, Banarasi paan, thandai, malaiyyo in winter. Centuries-old sweet shops in winding old-city lanes.",
       img:"https://media1.thrillophilia.com/filestore/ps09ksoqcuyocrbiy8yg8dmcghvr_1569587550_shutterstock_1090664156.jpg"},
    ]
  },
  kerala:{name:"Kerala",state:"Kerala",tagline:"God's Own Country",coords:[10.8505,76.2711],
    attractions:[
      {id:"kl1",name:"Alleppey Houseboat",time:5,cost:5000,score:99,cat:"Experience",lat:9.4981,lng:76.3388,
       desc:"Cruise Kerala's 900km backwater network on a traditional kettuvallam. Paddy fields, coconut groves, village life.",
       img:"https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"kl2",name:"Munnar Tea Gardens",time:4,cost:300,score:96,cat:"Nature",lat:10.0889,lng:77.0595,
       desc:"1,700m high Western Ghats plantations. Endless green carpet of tea. Cool mist mornings in Cardamom Hills.",
       img:"https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"kl3",name:"Periyar Wildlife Safari",time:5,cost:700,score:94,cat:"Wildlife",lat:9.5167,lng:77.1833,
       desc:"Boat safari on Periyar Lake. Elephants, gaur, sambar deer at water's edge. Tiger Reserve dense jungle.",
       img:"https://media1.thrillophilia.com/filestore/zcmnhidaurkgxp39582ywz036yk3_Periyar%20National%20Park.jpg?w=400&dpr=2.jpg"},
      {id:"kl4",name:"Kathakali Performance",time:2,cost:400,score:91,cat:"Culture",lat:9.9312,lng:76.2673,
       desc:"2,000-year-old classical dance-drama. Elaborate face paint, expressive eye movements. Stories from Ramayana.",
       img:"https://images.unsplash.com/photo-1691075211492-05c1800397a2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"kl5",name:"Padmanabhaswamy Temple",time:2,cost:0,score:92,cat:"Spiritual",lat:8.4828,lng:76.9462,
       desc:"World's wealthiest temple. 5.5m reclining Vishnu idol. Treasury estimated at $22 billion. Travancore royals.",
       img:"https://images.unsplash.com/photo-1644773182204-f0bf03cae0cb?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"kl6",name:"Ayurvedic Spa",time:2,cost:1500,score:89,cat:"Wellness",lat:10.0,lng:76.25,
       desc:"Traditional Panchakarma treatments. Shirodhara, Abhyangam. Kerala — birthplace of Ayurveda. 3,000 years old.",
       img:".jpg"},
      {id:"kl7",name:"Kovalam Beach",time:3,cost:200,score:85,cat:"Nature",lat:8.3988,lng:76.9782,
       desc:"Three crescent beaches with iconic lighthouse. Surfing, Ayurvedic massage on shore, seafood restaurants.",
       img:"https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fkovalam-beach-1728485231_0ea3611f4ad1209cd58a.webp&w=1920&q=75.jpg"},
      {id:"kl8",name:"Fort Kochi Walk",time:2,cost:0,score:83,cat:"Heritage",lat:9.9644,lng:76.2426,
       desc:"Portuguese, Dutch and British colonial quarter. Jew Town, St Francis Church, Chinese fishing nets, spice bazaars.",
       img:"https://www.fortekochi.in/images/bg.jpg"},
      {id:"kl9",name:"Spice Plantation Tour",time:3,cost:500,score:82,cat:"Experience",lat:9.78,lng:77.05,
       desc:"Cardamom, black pepper, coffee, vanilla plantations in Wayanad. Learn India's ancient spice trade history.",
       img:"https://kochivillagetour.com/wp-content/uploads/2024/07/spices-kerala-2.jpg"},
      {id:"kl10",name:"Chinese Fishing Nets",time:1,cost:0,score:76,cat:"Scenic",lat:9.9658,lng:76.2414,
       desc:"Cantilever nets from Kublai Khan's court, operating since 1400s. Iconic symbol of Fort Kochi waterfront.",
       img:"https://theholidaysdestination.com/wp-content/uploads/2022/02/Chinese-Fishing-Net.jpg"},
    ]
  },
  goa: {name:"Goa",state:"Goa",tagline:"Sun, Sand and Sea",coords:[15.2993,74.1240],
    attractions:[
      {id:"ga1",name:"Baga Beach",time:2,cost:0,score:90,cat:"Beach",lat:15.5608,lng:73.7559,
       desc:"Lively beach with water sports, shacks, nightlife. Parasailing, jet skiing, beach parties. Free entry.",
       img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"ga2",name:"Basilica of Bom Jesus",time:1,cost:0,score:88,cat:"Heritage",lat:15.5935,lng:73.8229,
       desc:"UNESCO World Heritage 1605 church housing St Francis Xavier's relics. Baroque architecture with gilded altars.",
       img:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"ga3",name:"Dudhsagar Falls",time:4,cost:300,score:92,cat:"Nature",lat:15.3142,lng:74.3136,
       desc:"Majestic 310m waterfall in Bhagwan Mahavir Wildlife Sanctuary. Best during monsoon. Jeep safari or trek access.",
       img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D}%3D.jpg"},
      {id:"ga4",name:"Anjuna Flea Market",time:2,cost:0,score:85,cat:"Shopping",lat:15.6030,lng:73.7479,
       desc:"Every Wednesday. Hippie vibe with clothes, jewellery, handicrafts, souvenirs. Live music, food stalls. Bargain for unique findings. Free entry.",
       img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.10&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"ga5",name:"Fort Aguada",time:1,cost:0,score:80,cat:"Heritage",lat:15.4909,lng:73.7714,
       desc:"17th-century Portuguese fort with panoramic Arabian Sea views. Lighthouse, dungeons, and a small beach.",
       img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"},
      {id:"ga6",name:"Spice Plantation Tour",time:3,cost:500,score:82,cat:"Experience",lat:15.4000,lng:74.0000,
       desc:"Kerala-style tour of pepper, cardamom, vanilla plantations. Learn about Goa's spice trade history. Tasting sessions included.",
       img:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg"} 
    ]
  }
};

const CITY_ICONS={delhi:'fa-monument',jaipur:'fa-crown',mumbai:'fa-film',varanasi:'fa-fire',kerala:'fa-leaf', goa:'fa-umbrella-beach'};
const CITY_FLAGS={delhi:'🏛️',jaipur:'🌸',mumbai:'🌊',varanasi:'🕉️',kerala:'🌴', goa:'🏖️'};

/* ═══ STATE ═══ */
let user = JSON.parse(localStorage.getItem('yatraUser') || 'null');
let activeCity = 'delhi';
let lastResult = null;
let mapI = null, mapMarkers = [];

/* ═══════════════════════════════════════════════════════
   AUTH — browser-side (localStorage), no backend needed
═══════════════════════════════════════════════════════ */
function getUsers(){ return JSON.parse(localStorage.getItem('yatraUsers')||'[]'); }
function saveUsers(u){ localStorage.setItem('yatraUsers', JSON.stringify(u)); }

function toggleTheme(){
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
}

function toggleSidebar(){
  document.querySelector('.sb').classList.toggle('collapsed');
}

function openGate(tab){
  gateTab(tab || 'login');
  document.getElementById('gateOv').classList.add('on');
  setTimeout(()=>{
    const field = tab==='reg' ? document.getElementById('gName') : document.getElementById('gEmail');
    if(field) field.focus();
  }, 260);
}
function closeGate(){ document.getElementById('gateOv').classList.remove('on'); }
function openProfile(){
  if(!user) return openGate('login');
  populateProfile();
  document.getElementById('profileOv').classList.add('on');
  setTimeout(()=>document.getElementById('pName')?.focus(), 220);
}
function closeProfile(){ document.getElementById('profileOv').classList.remove('on'); }
function gateTab(t){
  const isL = t === 'login';
  document.getElementById('gFormLogin').classList.toggle('on', isL);
  document.getElementById('gFormReg').classList.toggle('on', !isL);
  document.getElementById('gTabLogin').classList.toggle('on', isL);
  document.getElementById('gTabReg').classList.toggle('on', !isL);
  document.getElementById('gErr').innerHTML = '';
  document.getElementById('gRegErr').innerHTML = '';
}

function populateProfile(){
  if(!user) return;
  document.getElementById('pName').value = user.name || '';
  document.getElementById('pEmail').value = user.email || '';
  document.getElementById('pTheme').value = localStorage.getItem('theme') || 'light';
  const trips = JSON.parse(localStorage.getItem('yatraTrips_' + user.id) || '[]');
  document.getElementById('profileTripsCount').textContent = trips.length + ' saved trips';
}
function setProfileTheme(val){
  document.body.classList.toggle('dark', val === 'dark');
  localStorage.setItem('theme', val);
}
function saveProfile(){
  if(!user) return;
  const name = document.getElementById('pName').value.trim();
  if(!name){ toast('Name cannot be blank'); return; }
  user.name = name;
  const users = getUsers();
  const idx = users.findIndex(u => u.id === user.id);
  if(idx >= 0){ users[idx].name = name; saveUsers(users); }
  localStorage.setItem('yatraUser', JSON.stringify(user));
  setUser(user);
  toast('Profile updated');
}
function clearSavedTrips(){
  if(!user) return;
  if(!confirm('Remove all saved trips from your account?')) return;
  localStorage.removeItem('yatraTrips_' + user.id);
  toast('Saved trips cleared');
  if(document.getElementById('tp-trips').classList.contains('on')) loadTrips();
  populateProfile();
}

function togglePwd(id, btn){
  const input = document.getElementById(id);
  const isText = input.type === 'text';
  input.type = isText ? 'password' : 'text';
  btn.innerHTML = isText ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
}

function doGateLogin(){
  const email = document.getElementById('gEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('gPass').value;
  const errEl = document.getElementById('gErr');
  errEl.innerHTML = '';

  if(!email || !pass){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>All fields required';
    return;
  }
  const users = getUsers();
  const found = users.find(u => u.email === email && u.password === btoa(pass));
  if(!found){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>Invalid email or password';
    return;
  }
  setUser(found);
  closeGate();
  toast('Welcome back, ' + found.name + '! 👋');
  goApp();
}

function doGateReg(){
  const name  = document.getElementById('gName').value.trim();
  const email = document.getElementById('gRegEmail').value.trim().toLowerCase();
  const pass  = document.getElementById('gRegPass').value;
  const errEl = document.getElementById('gRegErr');
  errEl.innerHTML = '';

  if(!name || !email || !pass){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>All fields required';
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>Enter a valid email address';
    return;
  }
  if(pass.length < 6){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>Password must be at least 6 characters';
    return;
  }
  const users = getUsers();
  if(users.find(u => u.email === email)){
    errEl.innerHTML = '<i class="fas fa-exclamation-circle"></i>Email already registered — sign in instead';
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

function requireAuth(){
  if(user) goApp();
  else openGate('login');
}

function setUser(u){
  user = u;
  localStorage.setItem('yatraUser', JSON.stringify(u));
  document.getElementById('navAuth').style.display = 'none';
  document.getElementById('navUser').style.display = 'flex';
  document.getElementById('navAv').textContent = u.name[0].toUpperCase();
  document.getElementById('navUname').textContent = u.name.split(' ')[0];
}
function logout(){
  user = null;
  localStorage.removeItem('yatraUser');
  document.getElementById('navAuth').style.display = '';
  document.getElementById('navUser').style.display = 'none';
  showHero();
  toast('Signed out successfully');
}

/* ═══ SCREENS ═══ */
function showHero(){
  document.getElementById('heroS').style.display = '';
  document.getElementById('appS').style.display = 'none';
}
function goApp(){
  document.getElementById('heroS').style.display = 'none';
  document.getElementById('appS').style.display = 'block';
  initApp();
}

/* ═══ APP INIT ═══ */
let appReady = false;
function initApp(){
  if(appReady) return;
  appReady = true;
  renderCityGrid();
  loadCity('delhi');
}
function renderCityGrid(){
  document.getElementById('cityGrid').innerHTML = Object.entries(CITIES).map(([k,v]) => `
    <div class="cc ${k===activeCity?'on':''}" id="cc_${k}" onclick="loadCity('${k}')">
      <div class="cc-icon"><i class="fas ${CITY_ICONS[k]}"></i></div>
      <div class="cc-name">${v.name}</div>
      <div class="cc-state">${v.state}</div>
    </div>`).join('');
}
function loadCity(k){
  activeCity = k;
  document.querySelectorAll('.cc').forEach(c => c.classList.remove('on'));
  const el = document.getElementById('cc_'+k);
  if(el) el.classList.add('on');
  renderCards();
  if(mapI) updateMap();
}

/* ═══ ATTRACTION CARDS ═══ */
function inr(n){ return n===0 ? 'Free' : '₹'+n.toLocaleString('en-IN'); }
function renderCards(){
  const city = CITIES[activeCity];
  document.getElementById('cardsArea').innerHTML = city.attractions.map(a => `
    <div class="ac" id="ac_${a.id}" onclick="toggleCard('${a.id}')">
      <div class="ac-imgw">
        <img src="${a.img}" alt="${a.name}" loading="lazy"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Humayun%27s_Tomb_Front_View.jpg/640px-Humayun%27s_Tomb_Front_View.jpg'">
        <div class="ac-cat">${a.cat}</div>
        <div class="ac-chk"><i class="fas fa-check"></i></div>
      </div>
      <div class="ac-body">
        <div class="ac-name">${a.name}</div>
        <div class="ac-desc">${a.desc}</div>
        <div class="ac-foot">
          <span class="chip ct"><i class="far fa-clock"></i>${a.time}h</span>
          <span class="chip cc2"><i class="fas fa-rupee-sign"></i>${inr(a.cost)}</span>
          <span class="chip cs"><i class="fas fa-star"></i>${a.score}</span>
          <button class="info-btn"
            onclick="event.stopPropagation();openPP('${activeCity}','${a.id}')"
            title="More info"><i class="fas fa-info"></i></button>
        </div>
      </div>
    </div>`).join('');
}
function toggleCard(id){
  const el = document.getElementById('ac_'+id);
  if(el) el.classList.toggle('sel');
}

/* ═══ PLACE PANEL + AI TIP ═══ */
function openPP(cityKey, id){
  const city = CITIES[cityKey];
  const a = city.attractions.find(x => x.id === id);
  if(!a) return;
  document.getElementById('ppImg').src = a.img;
  document.getElementById('ppCat').textContent = a.cat;
  document.getElementById('ppName').textContent = a.name;
  document.getElementById('ppDesc').textContent = a.desc;
  document.getElementById('ppChips').innerHTML = `
    <span class="chip ct" style="font-size:11px"><i class="far fa-clock"></i>${a.time}h visit</span>
    <span class="chip cc2" style="font-size:11px"><i class="fas fa-rupee-sign"></i>${inr(a.cost)}</span>
    <span class="chip cs" style="font-size:11px"><i class="fas fa-star"></i>${a.score}/100</span>`;
  const pct = a.score;
  document.getElementById('ppRing').style.background =
    `conic-gradient(#E8590A ${pct*3.6}deg, #DDD0BA 0deg)`;
  document.getElementById('ppScore').textContent = a.score;
  document.getElementById('ppScoreGrade').textContent = a.score>=95?'Outstanding ':a.score>=85?'Excellent ':a.score>=75?'Very Good ':'Good ';
  document.getElementById('ppTip').innerHTML = '<span class="tip-loading">Fetching AI tip…</span>';
  document.getElementById('pp').classList.add('on');
  fetchAITip(city.name, a.name);
}
function closePP(){ document.getElementById('pp').classList.remove('on'); }

async function fetchAITip(cityName, attrName){
  const prompt = `Give one short, specific insider travel tip (2 sentences max) for visiting ${attrName} in ${cityName}, India. Be practical and local — no generic advice.`;
  try{
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '',           // API key handled by claude.ai env
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 120,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const d = await res.json();
    const tip = d?.content?.[0]?.text;
    document.getElementById('ppTip').textContent = tip || fallbackTip(attrName);
  } catch(e){
    document.getElementById('ppTip').textContent = fallbackTip(attrName);
  }
}

const TIPS = {
  "Red Fort":"Buy tickets online to skip queues. The Sound & Light show on weekend evenings is spectacular.",
  "Qutub Minar":"The complex is largest in early morning — beat crowds and get the best light for photos.",
  "Akshardham Temple":"No cameras or phones allowed inside. Visit after 6pm for the musical fountain show.",
  "Amber Fort":"Take the elephant ride up in the morning — elephants rest by noon in summer heat.",
  "Hawa Mahal":"Climb to the top floor for panoramic views of Jaipur. Best photos from across the street.",
  "Elephanta Caves":"Take the earliest 9am ferry — caves are coolest and least crowded in the morning.",
  "Dashashwamedh Aarti":"Arrive 30 minutes early for a good seated position on the ghats or hire a boat.",
  "Sunrise Boat Ride":"Negotiate the fare the evening before with your boatman. ₹300–500 is fair for 2 hours.",
  "Alleppey Houseboat":"Book a houseboat through a certified operator — avoid touts at the jetty.",
  "Munnar Tea Gardens":"Visit the Tea Museum in Nallathanni Estate — it's the best in the region.",
};
function fallbackTip(name){
  return TIPS[name] || 'Visit early morning to avoid crowds and enjoy cooler temperatures. Ask locals for hidden gems nearby.';
}

/* ═══ MAP ═══ */
function updateMap(){
  const city = CITIES[activeCity];
  if(!mapI){
    mapI = L.map('map').setView(city.coords, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapI);
  } else {
    mapI.setView(city.coords, 12);
    mapMarkers.forEach(m => m.remove());
    mapMarkers = [];
  }
  city.attractions.forEach(a => {
    const col = a.score>=90?'#E8590A':a.score>=80?'#D4A017':'#1E2A6E';
    const icon = L.divIcon({
      className: '',
      html: `<div style="background:${col};color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:2.5px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,.28);cursor:pointer">${a.score}</div>`,
      iconSize: [32,32], iconAnchor: [16,16]
    });
    const m = L.marker([a.lat, a.lng], {icon}).addTo(mapI);
    m.bindPopup(`<div class="mpop"><div class="mpop-name">${a.name}</div><div class="mpop-chips"><span class="chip ct" style="font-size:10px"><i class="far fa-clock"></i>${a.time}h</span><span class="chip cc2" style="font-size:10px">${inr(a.cost)}</span></div></div>`);
    m.on('click', () => openPP(activeCity, a.id));
    mapMarkers.push(m);
  });
}

/* ═══ 0/1 KNAPSACK DP ═══ */
function knapsack(items, maxT, maxB, bucket=100){
  const n = items.length, B = Math.floor(maxB/bucket), T = maxT;
  // dp[t][b] = best score
  const dp = Array.from({length:T+1}, () => new Int32Array(B+1));
  // keep[i] = flat array of booleans
  const keep = items.map(() => new Uint8Array((T+1)*(B+1)));
  const idx = (t,b) => t*(B+1)+b;

  for(let i=0; i<n; i++){
    const it = items[i].time;
    const ib = Math.ceil(items[i].cost / bucket);
    const iv = items[i].score;
    for(let t=T; t>=it; t--){
      for(let b=B; b>=ib; b--){
        const w = dp[t-it][b-ib] + iv;
        if(w > dp[t][b]){ dp[t][b]=w; keep[i][idx(t,b)]=1; }
      }
    }
  }
  const chosen=[];
  let t=T, b=B;
  for(let i=n-1; i>=0; i--){
    if(keep[i][idx(t,b)]){
      chosen.unshift(i);
      t -= items[i].time;
      b -= Math.ceil(items[i].cost/bucket);
    }
  }
  return { chosen, totalScore: dp[T][B] };
}

/* ═══ RUN OPTIMIZER ═══ */
function runOptimize(){
  const btn = document.getElementById('optBtn');
  btn.disabled = true;
  document.getElementById('lbar').classList.add('on');

  // Use requestAnimationFrame so UI updates before heavy computation
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const maxT = parseInt(document.getElementById('tSlider').value);
    const maxB = parseInt(document.getElementById('bSlider').value);
    const city = CITIES[activeCity];
    const pool = city.attractions;

    const { chosen, totalScore } = knapsack(pool, maxT, maxB);
    const picked = chosen.map(i => pool[i]);
    const skipped = pool.filter((_,i) => !chosen.includes(i));
    const usedTime = picked.reduce((s,a) => s+a.time, 0);
    const usedBudget = picked.reduce((s,a) => s+a.cost, 0);

    // Schedule from 9:00 AM
    let h=9, m=0;
    const scheduled = picked.map(a => {
      const sh=h, sm=m;
      const em = sh*60+sm + a.time*60;
      h = Math.floor(em/60); m = em%60;
      return {...a, start:`${sh.toString().padStart(2,'0')}:${sm.toString().padStart(2,'0')}`,
                    end:`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}`};
    });

    const result = {
      city, itinerary: scheduled, skipped,
      stats: { score:totalScore, count:picked.length, used_time:usedTime, max_time:maxT, used_budget:usedBudget, max_budget:maxB, cells:maxT*Math.floor(maxB/100) }
    };
    lastResult = result;

    renderResults(result);
    document.getElementById('miniStatsWrap').style.display = 'block';
    document.getElementById('msS').textContent = totalScore;
    document.getElementById('msT').textContent = usedTime+'h';
    document.getElementById('msC').textContent = picked.length;
    switchTab('results');
    toast('Itinerary ready — '+picked.length+' stops optimised!');

    // Update map markers
    if(mapI){
      mapMarkers.forEach(m => m.remove()); mapMarkers = [];
      const chosenIds = new Set(scheduled.map(x => x.id));
      city.attractions.forEach(a => {
        const ch = chosenIds.has(a.id);
        const col = ch ? '#E8590A' : '#bbb';
        const sz = ch ? 36 : 24;
        const icon = L.divIcon({
          className: '',
          html: `<div style="background:${col};color:${ch?'#fff':'#999'};border-radius:50%;width:${sz}px;height:${sz}px;display:flex;align-items:center;justify-content:center;font-size:${ch?11:9}px;font-weight:700;border:${ch?'2.5px solid #fff':'1.5px solid #ddd'};box-shadow:${ch?'0 2px 14px rgba(232,89,10,.5)':'none'}">${ch?a.score:'×'}</div>`,
          iconSize: [sz,sz], iconAnchor: [sz/2,sz/2]
        });
        const marker = L.marker([a.lat, a.lng], {icon}).addTo(mapI);
        marker.bindPopup(`<div class="mpop"><div class="mpop-name">${a.name}${ch?' ✓':''}</div><div class="mpop-chips"><span class="chip ct" style="font-size:10px">${a.time}h</span><span class="chip cc2" style="font-size:10px">${inr(a.cost)}</span></div></div>`);
        if(ch) marker.on('click', () => openPP(activeCity, a.id));
        mapMarkers.push(marker);
      });
    }

    btn.disabled = false;
    document.getElementById('lbar').classList.remove('on');
  }));
}

/* ═══ RENDER RESULTS ═══ */
function renderResults(d){
  if(!d.itinerary.length){
    document.getElementById('resArea').innerHTML = `
      <div class="empty">
        <i class="fas fa-exclamation-circle empty-icon"></i>
        <div class="empty-title">No attractions fit</div>
        <div class="empty-desc">Try increasing your time or budget.</div>
      </div>`;
    return;
  }
  const stops = d.itinerary.map(a => `
    <div class="itin-stop" onclick="openPP('${activeCity}','${a.id}')">
      <div class="itin-time">
        <div class="itin-ts">${a.start}</div>
        <div class="itin-te">${a.end}</div>
      </div>
      <div class="itin-body">
        <img class="itin-img" src="${a.img}" alt="${a.name}"
          onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Humayun%27s_Tomb_Front_View.jpg/640px-Humayun%27s_Tomb_Front_View.jpg'">
        <div>
          <div class="itin-name">${a.name}</div>
          <div class="itin-chips">
            <span class="chip ct" style="font-size:9px"><i class="far fa-clock"></i>${a.time}h</span>
            <span class="chip cc2" style="font-size:9px">${inr(a.cost)}</span>
          </div>
        </div>
      </div>
      <div class="itin-ring" style="background:conic-gradient(#E8590A ${a.score*3.6}deg,#DDD0BA 0deg)">
        <span class="itin-ring-num">${a.score}</span>
      </div>
    </div>`).join('');

  const saveBtn = user
    ? `<button class="save-btn" onclick="saveTrip()"><i class="fas fa-bookmark"></i>Save Trip</button>`
    : `<button class="save-btn" onclick="openGate('login')" style="background:var(--muted)"><i class="fas fa-lock"></i>Sign in to Save</button>`;

  const { stats } = d;
  document.getElementById('resArea').innerHTML = `
    <div class="res-head">
      <div>
        <div class="res-city">${d.city.name} Itinerary</div>
        <div class="res-sub">${d.city.state} · ${d.city.tagline}</div>
      </div>
      ${saveBtn}
    </div>
    <div class="stats-grid">
      <div class="stat-card a">
        <div class="stat-lbl">DP Score</div>
        <div class="stat-val">${stats.score}</div>
        <div class="stat-unit">${stats.count} attractions</div>
      </div>
      <div class="stat-card b">
        <div class="stat-lbl">Time Used</div>
        <div class="stat-val">${stats.used_time}<small style="font-size:14px">h</small></div>
        <div class="stat-unit">of ${stats.max_time}h · ${Math.round(stats.used_time/stats.max_time*100)}%</div>
      </div>
      <div class="stat-card c">
        <div class="stat-lbl">Budget Spent</div>
        <div class="stat-val" style="font-size:20px">${inr(stats.used_budget)}</div>
        <div class="stat-unit">of ${inr(stats.max_budget)}</div>
      </div>
      <div class="stat-card d">
        <div class="stat-lbl">DP States</div>
        <div class="stat-val">${stats.cells.toLocaleString('en-IN')}</div>
        <div class="stat-unit">subproblems solved</div>
      </div>
    </div>
    <div class="itin">
      <div class="itin-hd"><i class="fas fa-route"></i>Day Plan · Starting 9:00 AM · Click a stop for details</div>
      ${stops}
    </div>
    ${d.skipped.length ? `
      <div class="skip-wrap">
        <div class="skip-title">Could not include (exceeded constraints)</div>
        <div class="skip-list">${d.skipped.map(s=>`<span class="skip-chip">${s.name}</span>`).join('')}</div>
      </div>` : ''}
    <div class="dp-panel">
      <div class="dp-title"><i class="fas fa-code"></i>Algorithm Trace — 0/1 Knapsack</div>
      <span class="dh">dp[${stats.max_time}h][${Math.floor(stats.max_budget/100)} cells]</span> = <span class="dh2">${stats.score} pts — optimal</span><br>
      Items evaluated: <span class="dh">${d.itinerary.length + d.skipped.length}</span> attractions from ${d.city.name}<br>
      Subproblems: <span class="dh">${stats.max_time} × ${Math.floor(stats.max_budget/100)} = ${stats.cells.toLocaleString()}</span> DP states<br>
      Recurrence: <span class="dh2">dp[t][b] = max(dp[t][b], dp[t−tᵢ][b−bᵢ] + scoreᵢ)</span><br>
      Optimal set recovered via <span class="dh">keep[]</span> traceback · ₹100 / budget cell
    </div>`;
}

/* ═══ SAVE / LOAD TRIPS ═══ */
function saveTrip(){
  if(!user || !lastResult) return;
  const key = 'yatraTrips_' + user.id;
  const trips = JSON.parse(localStorage.getItem(key) || '[]');
  trips.unshift({
    id: Date.now(), city: activeCity,
    cityName: lastResult.city.name,
    attractions: lastResult.itinerary.map(a => a.name),
    score: lastResult.stats.score,
    budget: lastResult.stats.used_budget,
    time: lastResult.stats.used_time,
    count: lastResult.stats.count,
    createdAt: Date.now()
  });
  localStorage.setItem(key, JSON.stringify(trips.slice(0,20)));
  toast('Trip saved to your account!');
  if(document.getElementById('tp-trips').classList.contains('on')) loadTrips();
}

function loadTrips(){
  if(!user){
    document.getElementById('tripsArea').innerHTML = `
      <div class="empty"><i class="fas fa-lock empty-icon"></i>
      <div class="empty-title">Sign in to view trips</div>
      <div class="empty-desc">Create an account to save and revisit your itineraries.</div></div>`;
    return;
  }
  const key = 'yatraTrips_' + user.id;
  const trips = JSON.parse(localStorage.getItem(key) || '[]');
  if(!trips.length){
    document.getElementById('tripsArea').innerHTML = `
      <div class="empty"><i class="fas fa-bookmark empty-icon"></i>
      <div class="empty-title">No saved trips yet</div>
      <div class="empty-desc">Optimise and save your first yatra!</div></div>`;
    return;
  }
  document.getElementById('tripsArea').innerHTML = trips.map(t => `
    <div class="trip-card">
      <div class="trip-icon">${CITY_FLAGS[t.city]||'📍'}</div>
      <div>
        <div class="trip-name">${t.cityName} Trip</div>
        <div class="trip-meta">${t.time}h · ${inr(t.budget)} · ${t.count} stops · ${new Date(t.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}</div>
      </div>
      <div class="trip-score">${t.score}</div>
      <button onclick="deleteTrip(${t.id})" style="margin-left:10px;border:none;background:#ff4d4f;color:white;padding:6px 10px;border-radius:6px;cursor:pointer">
        <i class="fas fa-trash"></i>
      </button>
    </div>`).join('');
}

function deleteTrip(id){
  if(!user) return;
  const key = 'yatraTrips_' + user.id;
  let trips = JSON.parse(localStorage.getItem(key) || '[]');
  trips = trips.filter(t => t.id !== id);
  localStorage.setItem(key, JSON.stringify(trips));
  loadTrips();
  toast('Trip deleted');
}

/* ═══ TABS ═══ */
function switchTab(name){
  const names = ['attractions','map','results','trips'];
  document.querySelectorAll('.tb').forEach((b,i) => b.classList.toggle('on', names[i]===name));
  document.querySelectorAll('.tp').forEach(p => p.classList.remove('on'));
  document.getElementById('tp-'+name).classList.add('on');
  if(name==='map'){ setTimeout(()=>{ if(mapI) mapI.invalidateSize(); else updateMap(); }, 80); }
  if(name==='trips') loadTrips();
}

/* ═══ TOAST ═══ */
function toast(msg){
  document.getElementById('toastTxt').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 3400);
}

/* ═══ BOOT ═══ */
window.addEventListener('DOMContentLoaded', () => {
  if(user) setUser(user);
  showHero();

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'dark'){
    document.body.classList.add('dark');
  }

  // Close gate on backdrop click
  document.getElementById('gateOv').addEventListener('click', e => {
    if(e.target === document.getElementById('gateOv')) closeGate();
  });
});
