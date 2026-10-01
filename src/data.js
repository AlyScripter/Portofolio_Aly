// User's CV Link
export const CV_LINK = "https://drive.google.com/file/d/1zc0zpTiA52boXcaxbF2NFBh6pk8C7y-E/view?usp=sharing";

export const USER_INFO = {
  name: "Muhammad Haidar Aly",
  nickname: "Aly",
  role: "Robotics & Software Engineer",
  email: "Muhammadaly1908@gmail.com",
  phone: "(+62) 895634930602",
  location: "Semarang, Indonesia",
  linkedin: "https://linkedin.com/in/muhammad-haidar-aly",
  portfolioUrl: "https://portofolio-aly.vercel.app/",
  education: {
    institution: "Semarang State Polytechnic (Politeknik Negeri Semarang)",
    degree: "Bachelor of Computer Engineering Technology",
    period: "Aug 2023 – Present",
    gpa: "3.89 / 4.00",
    status: "Undergraduate Student",
    focus: "AIoT, Autonomous Systems & Embedded Robotics",
  },
  bio: "Undergraduate student in Computer Engineering Technology with a growing specialization in AIoT, autonomous systems, and embedded robotics. Hands on experience developing real-time monitoring dashboards for autonomous vehicles, integrating LiDAR, camera, and inertial sensor data through ROS on NVIDIA Jetson edge platforms, and engineering mobile robots for national competitions. Combines this with a solid fullstack development foundation (Laravel, Flutter, REST API) to build complete, usable systems from sensor to interface.",
};

// Exact 3 cards from user's screenshot
export const STATS = [
  {
    value: 3,
    suffix: "x",
    label: "WINNER IN NATIONAL/REGIONAL COMPETITIONS",
  },
  {
    value: 1,
    suffix: "",
    label: "PROJECT FUNDED THROUGH INNOVATION GRANT",
  },
  {
    value: 20,
    suffix: "+",
    label: "NATIONAL-LEVEL COMPETITIONS PARTICIPATED",
  },
];

// Exact work experiences strictly from CV & LinkedIn
export const WORK_EXPERIENCES = [
  {
    id: "dicreate",
    role: "Co-Founder & Chief Operating Officer (COO)",
    company: "Dicreate Media Agency",
    subRole: "Full-time",
    location: "Semarang, Central Java, Indonesia · On-site",
    period: "Mar 2026 – Jul 2026",
    type: "Full-time",
    summary: "Co-led daily business operations, team coordination, client acquisition, and client relationship management for the digital media agency.",
    bullets: [
      "Co-led daily business operations by coordinating a team of 4 members, managing project execution, and ensuring efficient task distribution to achieve timely project delivery.",
      "Identified and approached potential clients, managed business communications, and successfully secured the company's first client while building a growing sales pipeline with multiple prospective partnerships.",
      "Served as the primary liaison between clients and the internal team, overseeing project requirements, client communication, and social media account management to maintain high-quality service and client satisfaction.",
    ],
    skills: ["Operations Management", "Project Management", "Client Relations", "Business Development"],
  },
  {
    id: "tomiran",
    role: "Co-Founder & Chief Information Officer (CIO)",
    company: "TOMIRAN",
    subRole: "Freelance",
    location: "Semarang, Central Java, Indonesia · On-site",
    period: "Aug 2025 – Present",
    type: "Freelance",
    summary: "Spearheaded digital media operations, brand presence, and visual marketing assets to promote value-added agricultural tomato products.",
    bullets: [
      "Spearheaded digital media operations and content planning to promote value-added tomato products (tomato candy, syrup, and crisps), expanding brand presence and customer reach.",
      "Designed and edited high-engagement social media feeds and visual marketing assets, ensuring consistent brand identity across all digital touchpoints.",
      "Collaborated closely with executive leadership (CEO, CTO, CMO) to align digital marketing initiatives, operational workflows, and overarching business objectives.",
    ],
    skills: ["Collaboration and Teamwork", "Digital Media Operations", "Brand Strategy", "Content Planning"],
  },
  {
    id: "brin",
    role: "Intelligent Mechatronics Research Assistant",
    company: "Badan Riset dan Inovasi Nasional (BRIN)",
    subRole: "Research Intern",
    location: "Bandung, Indonesia",
    period: "Aug 2024 – Present",
    type: "Research & Autonomous Systems",
    summary: "R&D on real-time autonomous vehicle monitoring dashboard connected to ROS on NVIDIA Jetson edge platforms with multi-sensor fusion and 3D Bird's-Eye View (BEV).",
    bullets: [
      "Developed a real-time autonomous vehicle monitoring dashboard in Flutter, connected via WebSocket to a ROS-based system running on an NVIDIA Jetson platform.",
      "Built a Python-based data processing pipeline on the ROS/Jetson side that transforms raw sensor streams through multiple processing stages before delivering ready-to-display data to the dashboard.",
      "Integrated multi-sensor data LiDAR, depth camera, IMU, GPS, and odometry, and applied deep learning (CNN) techniques to process LiDAR point cloud data as part of a 3D Bird’s-Eye View (BEV) visualization representing the vehicle’s surrounding environment.",
    ],
    skills: ["ROS", "Jetson", "LiDAR", "Depth Camera", "WebSocket", "Python", "TensorFlow/CNN", "Flutter"],
    projectId: "brin-av-dashboard",
  },
  {
    id: "simaku",
    role: "Fullstack Developer",
    company: "SIMAKU – Sistem Manajemen Keuangan Mahasiswa (Web App)",
    subRole: "Fullstack Web Engineer",
    location: "Semarang, Indonesia",
    period: "Mar 2025 – Jul 2025",
    type: "Fullstack Web Application",
    summary: "End-to-end fullstack development of a tuition and financial management web system for Polines students and finance administration.",
    bullets: [
      "Developed a fullstack financial management system for Polines students, covering UKT billing, installment plans, appeals, and payment verification workflows.",
      "Designed and implemented RESTful APIs using Laravel, supporting role-based access control across Admin, Finance Staff, Head of Finance, and Student roles.",
      "Built an interactive dashboard with semester-based financial reporting features to support finance staff in tracking and managing transactions.",
    ],
    skills: ["Laravel", "PHP", "JavaScript", "CSS", "SQL", "REST API"],
    projectId: "simaku",
  },
  {
    id: "ukm-web",
    role: "Website Manager",
    company: "UKM Pengembangan Pengetahuan",
    subRole: "WordPress Developer",
    location: "Semarang, Indonesia",
    period: "Jun 2024 – Jun 2025",
    type: "Web Operations & Infrastructure",
    summary: "Administration, content pipeline, and technical maintenance of three organizational web platforms.",
    bullets: [
      "Managed and maintained 3 organizational websites using WordPress, handling content updates, publishing, and technical troubleshooting.",
    ],
    skills: ["WordPress", "Web Operations", "Content Management", "Technical Troubleshooting"],
  },
];

// Exact organization experiences strictly from CV
export const ORGANISASI = [
  {
    id: "sec-gen",
    title: "General Secretary",
    organization: "UKM Pengembangan Pengetahuan",
    period: "Jul 2025 – July 2026",
    badge: "Executive Leadership",
    summary: "Executive organizational governance, coordinating work plans and official agendas across board members.",
    bullets: [
      "Coordinated 8 organizational work plans and 36+ operational agendas across 90+ board members, maintaining project documentation and accountability schedules.",
    ],
    skills: ["Governance", "Executive Coordination", "Documentation"],
  },
  {
    id: "sec-robotics",
    title: "Secretary of Robotics Department",
    organization: "UKM Pengembangan Pengetahuan",
    period: "Jun 2024 – Jun 2025",
    badge: "Departmental Governance",
    summary: "Supervised departmental operations, managed research schedules, and administered robotics competition preparation programs.",
    bullets: [
      "Supervised a team of 7 staff members and coordinated 5+ departmental programs within the Robotics Department.",
    ],
    skills: ["Department Management", "Technical Coordination", "Team Leadership"],
  },
  {
    id: "research-member",
    title: "Robotics Research Team Member",
    organization: "UKM Pengembangan Pengetahuan",
    period: "Jun 2024 – July 2026",
    badge: "Competitive Robotics Team",
    summary: "Designed, built, and calibrated mobile transporter robots for national collegiate robotics competitions.",
    bullets: [
      "Designed, built, and calibrated mobile transporter robots for national collegiate robotics competitions, integrating sensor feedback with motor driver control.",
      "Implemented navigation and trajectory control routines for obstacle negotiation and payload delivery within competition arena constraints.",
    ],
    skills: ["Robotics Engineering", "Trajectory Control", "Sensor Feedback", "C/C++"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "3rd Place + Project Funding – PLN Sustainaction Ecopreneur",
    event: "PLN Sustainaction Ecopreneur",
    organizer: "PT PLN (Persero)",
    year: "2025",
    rank: "3rd Place + Project Funding",
    category: "Sustainable Innovation & IoT",
    description: "Earned 3rd place nationally and secured project research funding for sustainable IoT energy monitoring and automation innovation.",
    image: "image/PLN SustainAction 2025.png",
  },
  {
    title: "Top 8 Finalist (Transporter Division) – Technocorner",
    event: "Technocorner 2025",
    organizer: "Universitas Gadjah Mada (UGM)",
    year: "2025",
    rank: "Top 8 Finalist",
    category: "Mobile Transporter Robotics",
    description: "Competed in the Transporter Division at Universitas Gadjah Mada, advancing to the national Top 8 with high precision mobile robotic control.",
    image: "image/TECHNOCORNER UGM 2025.png",
  },
  {
    title: "Top 16 Finalist – Technoday",
    event: "Technoday 2025",
    organizer: "Universitas Negeri Semarang (UNNES)",
    year: "2025",
    rank: "Top 16 Finalist",
    category: "National Robotics Tournament",
    description: "Qualified for the Top 16 finalists in national robotics competition arena with obstacle negotiation routines.",
    image: "image/TECHNODAY UNNES 2025.png",
  },
  {
    title: "2nd Runner Up – LINEAR Essay Competition",
    event: "LINEAR Essay Competition 2025",
    organizer: "Semarang State University (UNNES)",
    year: "2025",
    rank: "2nd Runner Up",
    category: "Scientific & Technology Essay",
    description: "Recognized for authoring a technical paper proposing innovative smart system architectures and sustainable engineering solutions.",
    image: "image/foto pln.png",
  },
];

export const CERTIFICATIONS = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    title: "Junior Cyber Security",
    issuer: "Vocational School Graduate Academy, Digital Talent Scholarship",
    year: "2025",
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle",
    year: "2024",
  },
  {
    title: "Database Design",
    issuer: "Oracle",
    year: "2024",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2024",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    year: "2023",
  },
];

export const HARD_SKILLS = [
  "ROS (Robot Operating System)",
  "NVIDIA Jetson",
  "LiDAR & Camera Sensor Integration",
  "Sensor Fusion (IMU, GPS, Odometry)",
  "Bird’s-Eye View (BEV) Visualization",
  "Microcontroller (ESP32/Arduino)",
  "Python",
  "C/C++",
  "TensorFlow & Deep Learning (CNN)",
  "Laravel & PHP",
  "Flutter & Dart",
  "HTML, CSS & JavaScript",
  "SQL & REST API",
  "WebSocket",
  "WordPress",
];

export const SOFT_SKILLS = [
  "Leadership",
  "Teamwork",
  "Collaboration",
  "Communication",
  "Time Management",
  "Creativity",
];

export const ACTIVITIES = [
  {
    title: "PLN Sustainaction Ecopreneur 2025",
    image: "image/PLN SustainAction 2025.png",
    description: "Earned 3rd Place + Project Funding with an IoT-driven clean energy supervision and automated monitoring architecture.",
  },
  {
    title: "Technocorner UGM 2025",
    image: "image/TECHNOCORNER UGM 2025.png",
    description: "National Top 8 Finalist in Transporter Division with custom mobile robotics chassis, sensor feedback, and motor driver calibration.",
  },
  {
    title: "Technoday UNNES 2025",
    image: "image/TECHNODAY UNNES 2025.png",
    description: "Advanced to Top 16 Finalists with navigation and trajectory control routines for arena obstacle negotiation.",
  },
];

export const PROJECTS = [
  {
    id: "amofit-iot",
    title: "Inovasi Amonia Meter Berbasis IoT (AMOFIT)",
    subtitle: "Dec 2024 – Jun 2025 • Associated with Politeknik Negeri Semarang",
    period: "Dec 2024 – Jun 2025",
    institution: "Politeknik Negeri Semarang",
    summary: "IoT-Based Ammonia Meter Innovation to Optimize Freshwater Broodstock Crayfish Cultivation at Ternak Lobster Semarang ID. Features real-time monitoring and control of ammonia levels, temperature, and pH.",
    image: "image/PLN SustainAction 2025.png",
    tags: ["Internet of Things (IoT)", "Embedded Systems", "Sensors", "Aquaculture"],
    overview: [
      "Inovasi Amonia Meter Berbasis IoT guna Mengoptimalisasi Budidaya Lobster Indukan Air Tawar di Ternak Lobster Semarang ID (Dec 2024 – Jun 2025).",
      "IoT-Based Ammonia Meter Innovation to Optimize Freshwater Broodstock Crayfish Cultivation at Ternak Lobster Semarang ID.",
      "This technology, named AMOFIT, features real-time monitoring and control of ammonia levels. Additionally, it includes accurate temperature and pH monitoring features, making it easier for partners to determine the optimal water quality for crayfish broodstock cultivation. Equipped with sensors for ammonia, pH, and temperature detection, this technology helps maintain stable water conditions to support maximum crayfish growth.",
    ],
    challenges: [
      "Maintaining stable water quality parameters critical for freshwater crayfish broodstock survival:",
      "Continuous real-time sensing of ammonia, pH, and temperature under aquatic conditions",
      "Calibrating multi-sensor telemetry to alert farmers before hazardous ammonia spikes occur",
    ],
    solutions: [
      "Designed and deployed the AMOFIT IoT-based monitoring system:",
      "Integrated specialized sensor probes for ammonia, pH, and temperature detection",
      "Provided continuous telemetry monitoring to maintain stable water parameters for maximum crayfish growth",
    ],
    results: [
      "Successfully enabled aquaculture partners to accurately monitor and regulate broodstock water quality.",
    ],
    gallery: [
      "image/PLN SustainAction 2025.png",
      "image/foto pln.png",
      "image/foto sto.jpeg",
    ],
  },
  {
    id: "sitama-polines",
    title: "Sistem Informasi Tugas Akhir dan Magang Mahasiswa (SITAMA) Polines V2",
    subtitle: "Sep 2024 – Feb 2025 • Associated with Politeknik Negeri Semarang",
    period: "Sep 2024 – Feb 2025",
    institution: "Politeknik Negeri Semarang",
    contributors: "Muhammad Januar, Zulvikar Kharisma...",
    summary: "An academic management platform developed for the Department of Electrical Engineering at Politeknik Negeri Semarang, streamlining the administration, supervision, and reporting of students' internship and final project activities.",
    image: "image/Simaku.png",
    tags: ["Laravel", "MySQL", "Web Platform", "Academic Management"],
    overview: [
      "Sistem Informasi Tugas Akhir dan Magang Mahasiswa (SITAMA) Polines V2 (Sep 2024 – Feb 2025).",
      "SITAMA Polines is an academic management platform developed for the Department of Electrical Engineering at Politeknik Negeri Semarang.",
      "It streamlines the administration, supervision, and reporting of students' internship and final project activities with contributors Muhammad Januar, Zulvikar Kharisma, and team.",
    ],
    challenges: [
      "Modernizing departmental academic administrative workflows:",
      "Eliminating manual paperwork and fragmented communication between students, supervisors, and department staff",
      "Tracking multi-stage milestone submissions for internships and final projects",
    ],
    solutions: [
      "Built SITAMA Polines V2 using Laravel and MySQL:",
      "Designed centralized submission portals, progress tracking, and digital evaluation forms",
      "Implemented role-based dashboards tailored for students, academic advisors, and administrative coordinators",
    ],
    results: [
      "Successfully streamlined student internship and final project administration across the Department of Electrical Engineering.",
    ],
    gallery: [
      "image/Simaku.png",
      "image/galeri simaku1.png",
      "image/galeri simaku2.png",
    ],
  },
  {
    id: "fitverse",
    title: "FitVerse: Social Fitness Platform Powered by Technology",
    subtitle: "Jun 2026 – Jul 2026 • Associated with Politeknik Negeri Semarang",
    period: "Jun 2026 – Jul 2026",
    institution: "Politeknik Negeri Semarang",
    summary: "FitVerse: Platform Fitness Sosial Berbasis Teknologi sebagai Solusi Gaya Hidup Aktif dan Sehat. Engineered with user interface and user experience design principles.",
    image: "image/slideshow1.png",
    tags: ["User Interface Design", "User Experience Design (UED)", "Product Design", "Social Fitness"],
    overview: [
      "FitVerse: Social Fitness Platform Powered by Technology (Jun 2026 – Jul 2026).",
      "FitVerse: Platform Fitness Sosial Berbasis Teknologi sebagai Solusi Gaya Hidup Aktif dan Sehat.",
      "A modern social fitness platform combining interactive user experience design with motivational community features to support active and healthy living.",
    ],
    challenges: [
      "Designing engaging social fitness mechanics to promote long-term active lifestyle habits:",
      "Structuring seamless user journeys for fitness goal setting, workout logging, and peer encouragement",
      "Balancing clean visual hierarchy with rich community interaction elements",
    ],
    solutions: [
      "Conducted extensive user research and iterative prototyping:",
      "Engineered high-fidelity UI/UX design systems focused on user motivation and social accountability",
      "Created intuitive mobile-first interfaces for activity progress tracking and community challenges",
    ],
    results: [
      "Delivered a comprehensive UI/UX design specification and interactive prototype for the FitVerse platform.",
    ],
    gallery: [
      "image/slideshow1.png",
      "image/slideshow2.png",
    ],
  },
  {
    id: "tasih-cafe-mis",
    title: "Tasih Cafe – End-to-End Management Information System Design",
    subtitle: "Sep 2025 – Jan 2026 • Associated with Politeknik Negeri Semarang",
    period: "Sep 2025 – Jan 2026",
    institution: "Politeknik Negeri Semarang",
    contributors: "Ammar",
    summary: "Comprehensive Management Information System (MIS) designed from the ground up for Tasih Cafe, streamlining point-of-sale (POS) operations, real-time inventory management, and sales performance tracking.",
    image: "image/galeri simaku3.png",
    tags: ["Systems Analysis", "User Research", "MIS Design", "UI/UX Prototyping"],
    overview: [
      "Tasih Cafe – End-to-End Management Information System Design (Sep 2025 – Jan 2026).",
      "Designed a comprehensive Management Information System (MIS) for Tasih Cafe from the ground up, aimed at streamlining point-of-sale (POS) operations, real-time inventory management, and sales performance tracking.",
      "Managed the complete system analysis and design process from initial field research to high-fidelity UI/UX prototyping with contributor Ammar.",
    ],
    challenges: [
      "Overcoming fragmented operational workflows and manual bookkeeping in daily cafe management:",
      "Preventing inventory discrepancies between ordered ingredients and recorded kitchen usage",
      "Providing real-time business performance analytics for management decision-making",
    ],
    solutions: [
      "Conducted thorough field research and operational systems analysis:",
      "Structured data flow diagrams and relational schemas linking POS checkout, inventory depletion, and daily auditing",
      "Developed high-fidelity UI/UX prototypes for touch-friendly cashier interfaces and managerial analytics",
    ],
    results: [
      "Delivered complete end-to-end system analysis and design architecture for Tasih Cafe's operational modernization.",
    ],
    gallery: [
      "image/galeri simaku3.png",
      "image/galeri simaku4.png",
      "image/galeri simaku5.png",
    ],
  },
  {
    id: "iot-smart-parking",
    title: "IoT-Based Smart Parking System with Real-Time Monitoring",
    subtitle: "Sep 2025 – Dec 2025 • Associated with Politeknik Negeri Semarang",
    period: "Sep 2025 – Dec 2025",
    institution: "Politeknik Negeri Semarang",
    contributors: "Prabaswara Shafa and Azka",
    summary: "IoT-based Smart Parking System using ESP32 and HC-SR04 ultrasonic sensors to monitor parking slot availability in real time with web dashboard, achieving 96–97% accuracy and 1–3s response time.",
    image: "image/foto prc.png",
    tags: ["Internet of Things (IoT)", "ESP32", "Ultrasonic Sensors", "Real-Time Monitoring"],
    overview: [
      "IoT-Based Smart Parking System with Real-Time Monitoring Using ESP32 and Ultrasonic Sensors (Sep 2025 – Dec 2025).",
      "Developed an IoT-based Smart Parking System using an ESP32 and HC-SR04 ultrasonic sensors to monitor parking slot availability in real time.",
      "The system features a web dashboard, LED status indicators, and an optimized data transmission mechanism that updates only when parking status changes. Achieved 96–97% detection accuracy with a 1–3 second response time, providing an efficient and cost-effective smart parking solution with contributors Prabaswara Shafa and Azka.",
    ],
    challenges: [
      "Reliable slot occupancy detection with low power and minimal data overhead:",
      "Eliminating transient sensor noise and false triggers caused by pedestrians or partial obstructions",
      "Maintaining instant 1–3 second dashboard synchronization without overloading wireless networks",
    ],
    solutions: [
      "Programmed event-driven firmware on the ESP32 microcontroller:",
      "Implemented threshold-based distance filtering on HC-SR04 ultrasonic sensors coupled with physical LED status cues",
      "Engineered an optimized data transmission pipeline that updates web dashboards exclusively when slot availability changes",
    ],
    results: [
      "Achieved 96–97% detection accuracy with 1–3 second response time, validating an efficient and cost-effective parking automation solution.",
    ],
    gallery: [
      "image/foto prc.png",
      "image/TECHNOCORNER UGM 2025.png",
    ],
  },
  {
    id: "neltara-kmeans",
    title: "NELTARA : Pemanfaatan Algoritma K-Means Penentuan Zona Tangkap Ikan",
    subtitle: "Sep 2025 – Oct 2025 • Associated with Politeknik Negeri Semarang",
    period: "Sep 2025 – Oct 2025",
    institution: "Politeknik Negeri Semarang",
    contributors: "Jhoan",
    summary: "Pemanfaatan Algoritma K-Means Untuk Penentuan Zona Strategis Penangkapan Ikan Berdasarkan Variabilitas Suhu Permukaan Laut dan Konsentrasi Klorofil-a guna meningkatkan efisiensi dan keselamatan nelayan.",
    image: "image/slideshow2.png",
    tags: ["Deep Learning", "k-means clustering", "AI & ML", "Oceanography"],
    overview: [
      "NELTARA : Pemanfaatan Algoritma K-Means Untuk Penentuan Zona Strategis Penangkapan Ikan Berdasarkan Variabilitas Suhu Permukaan Laut dan Konsentrasi Klorofil-a (Sep 2025 – Oct 2025).",
      "Pemanfaatan algoritma K-Means yang terintegrasi dengan kecerdasan buatan menjadi solusi alternatif dalam meningkatkan efisiensi penggunaan bahan bakar sekaligus menguatkan kesejahteraan dan keselamatan nelayan.",
      "Inovasi ini merepresentasikan sinergi antara generasi muda, teknologi, dan kebutuhan nelayan dalam menjawab tantangan pada sektor perikanan dengan kontributor Jhoan.",
    ],
    challenges: [
      "Optimizing maritime fuel consumption and improving fishing voyage safety:",
      "Correlating multi-spectral oceanographic satellite data (Sea Surface Temperature and Chlorophyll-a concentration)",
      "Transforming complex mathematical clustering outputs into accessible, actionable navigational coordinates",
    ],
    solutions: [
      "Implemented K-Means clustering algorithm on oceanographic telemetry variables:",
      "Classified high-potential pelagic fish feeding grounds based on oceanic upwelling signatures and thermal gradients",
      "Developed a clear visualization interface allowing fishermen to target high-probability fishing zones directly",
    ],
    results: [
      "Demonstrated significant potential to optimize marine fuel efficiency and enhance fisherman livelihoods through AI-driven spatial intelligence.",
    ],
    gallery: [
      "image/slideshow2.png",
      "image/TECHNODAY UNNES 2025.png",
    ],
  },
  {
    id: "simaku",
    title: "Sistem Informasi Manajemen Keuangan Kampus (SIMAKU)",
    subtitle: "Mar 2025 – Aug 2025 • Associated with Politeknik Negeri Semarang",
    period: "Mar 2025 – Aug 2025",
    institution: "Politeknik Negeri Semarang",
    contributors: "Adinda, Zulvikar Kharisma Nur and 1 other",
    summary: "SIMAKU is a web-based platform designed to streamline university tuition (UKT) payment management. It automates billing, payment validation, transaction recording, and financial reporting.",
    image: "image/Simaku.png",
    tags: ["Laravel", "REST APIs", "SQL", "Financial Management"],
    overview: [
      "Sistem Informasi Manajemen Keuangan Kampus (SIMAKU) (Mar 2025 – Aug 2025).",
      "SIMAKU is a web-based platform designed to streamline university tuition (UKT) payment management.",
      "It automates billing, payment validation, transaction recording, and financial reporting, providing a transparent, efficient, and user-friendly experience for students and university administrators with contributors Adinda, Zulvikar Kharisma Nur and team.",
    ],
    challenges: [
      "Managing peak-load financial verification and complex payment workflows across academic faculties:",
      "Enforcing role-based access control across Admin, Finance Staff, Head of Finance, and Student personas",
      "Automating installment appeal tracking and semester financial audit report generation",
    ],
    solutions: [
      "Engineered fullstack architecture utilizing Laravel and normalized relational database schemas:",
      "Created RESTful APIs supporting billing schedules, verification approval trees, and appeal submissions",
      "Delivered an interactive administrative dashboard for real-time transaction reconciliation",
    ],
    results: [
      "Streamlined institutional payment verification and financial reporting across academic semesters.",
    ],
    gallery: [
      "image/Simaku.png",
      "image/galeri simaku1.png",
      "image/galeri simaku2.png",
      "image/galeri simaku5.png",
      "image/galeri simaku6.png",
    ],
  },
  {
    id: "lynk-game",
    title: "LYNK GAME",
    subtitle: "Mar 2025 – Jul 2025 • Associated with Politeknik Negeri Semarang",
    period: "Mar 2025 – Jul 2025",
    institution: "Politeknik Negeri Semarang",
    contributors: "Bagus, Muhammad Dzaky and 1 other",
    summary: "LYNX is a fantasy adventure game in Unity centered around King Lynx, an eccentric ruler collecting mystical cats across hidden kingdoms seeking unrivaled strength and immortality.",
    image: "image/galeri simaku6.png",
    tags: ["Unity", "Game Development", "C#", "Gameplay Mechanics"],
    overview: [
      "LYNK GAME (Mar 2025 – Jul 2025).",
      "LYNX is a fantasy adventure centered around an eccentric ruler who calls himself King Lynx, inspired by the noble and enigmatic wild cat of the same name.",
      "In his hidden kingdom, he collects cats from every corner of the world, convinced that these mystical creatures possess the power to grant unrivaled strength and immortality. As his obsession grows, the fate of the kingdom hangs in the balance, setting the stage for an unforgettable adventure with contributors Bagus, Muhammad Dzaky and team.",
    ],
    challenges: [
      "Constructing responsive character physics, discovery mechanics, and atmospheric world design:",
      "Programming smooth traversal and interactive collection triggers in Unity",
      "Managing state machines, asset rendering performance, and narrative event sequencing",
    ],
    solutions: [
      "Developed modular game architecture in Unity using C# scripting:",
      "Designed King Lynx character movement controllers and custom interaction triggers for mythical cat discovery",
      "Created rich level environments with tuned audio-visual effects reflecting the fantasy narrative lore",
    ],
    results: [
      "Produced a playable fantasy adventure game demo showcasing polished gameplay mechanics and storytelling.",
    ],
    gallery: [
      "image/galeri simaku6.png",
      "image/TECHNODAY UNNES 2025.png",
    ],
  },
];

export const GALLERY_IMAGES = [
  "image/PLN SustainAction 2025.png",
  "image/galeri simaku6.png",
  "image/TECHNODAY UNNES 2025.png",
  "image/TECHNOCORNER UGM 2025.png",
  "image/foto pln.png",
  "image/foto prc.png",
  "image/galeri simaku1.png",
  "image/foto sto.jpeg",
];
