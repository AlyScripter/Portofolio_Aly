import { Project, Activity, OrganisasiRole } from "./types";

export const STATS = [
  {
    value: 3,
    suffix: "×",
    label: "Winner in National/Regional Competitions",
  },
  {
    value: 1,
    suffix: "",
    label: "Project Funded Through Innovation Grant",
  },
  {
    value: 20,
    suffix: "+",
    label: "National-Level Competitions Participated",
  },
];

export const HARD_SKILLS = [
  "PHP",
  "Laravel",
  "Python",
  "TensorFlow",
  "Data Analysis",
  "WordPress",
  "Figma",
  "Cloud Computing",
  "IoT Development",
];

export const SOFT_SKILLS = [
  "Teamwork",
  "Collaboration",
  "Communication",
  "Time Management",
  "Creativity",
];

export const ORGANISASI: OrganisasiRole[] = [
  {
    title: "Secretary of Robotics Department, UKM Pengembangan Pengetahuan",
    period: "June 2024 – June 2025",
    bullets: [
      "Ensure that all activities organized by the department are on schedule, and prepare comprehensive reports related to departmental activities.",
      "Coordinate and supervise staff within the robotics department to foster a productive and collaborative environment.",
      "Facilitate effective communication between team members and other departments to streamline processes and improve efficiency.",
    ],
  },
  {
    title: "Robotics Research Team Member, UKM Pengembangan Pengetahuan",
    period: "May 2024 – Present",
    bullets: [
      "Conduct research and development of robots for Technoclass training sessions and the Polines Robotic Contest.",
      "Participate in national-level robotics competitions representing the institution.",
      "Enhance team knowledge and skills in robotics through regular study and collaboration sessions.",
    ],
  },
];

export const ACTIVITIES: Activity[] = [
  {
    title: "TECHNODAY UNNES 2025",
    image: "image/TECHNODAY UNNES 2025.png",
    description: "Successfully reached the round of 16 with a robot designed for competitive challenges.",
  },
  {
    title: "PLN SustainAction 2025",
    image: "image/PLN SustainAction 2025.png",
    description: "Lyvotem proudly earned 3rd Place at PLN SustainAction 2025, showcasing innovative solutions.",
  },
  {
    title: "TECHNOCORNER UGM 2025",
    image: "image/TECHNOCORNER UGM 2025.png",
    description: "Reached the top eight with a remote-controlled robot demonstrating advanced capabilities.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "simaku",
    title: "SIMAKU",
    subtitle: "Full stack developer",
    summary: "A university-wide system for managing student tuition (UKT) payments used by both campus administrators and students.",
    image: "image/Simaku.png",
    tags: ["PHP", "Laravel", "MySQL", "REST API"],
    overview: [
      "SIMAKU (Sistem Informasi Manajemen Keuangan) is a web-based application designed to manage and streamline student financial administration processes within a campus environment. The system helps organize financial data efficiently and supports transparent, structured transactions between students and campus administrators.",
      "In this project, I worked as a Full Stack Developer, responsible for developing both backend logic and frontend integration to ensure the system runs reliably and securely.",
    ],
    challenges: [
      "Managing student financial data manually or through unintegrated systems often leads to data inconsistencies, inefficiencies, and delays. The main challenges addressed in this project included:",
      "Managing structured financial data efficiently",
      "Ensuring secure data transactions between users and the system",
      "Providing a scalable backend architecture",
      "Enabling smooth communication between frontend and backend services",
    ],
    solutions: [
      "To address these challenges, SIMAKU was developed using modern web technologies with a clean and scalable architecture:",
      "Backend Development: PHP with Laravel framework to handle business logic and system workflows",
      "Database Management: MySQL for structured and reliable data storage",
      "REST API: Implemented RESTful APIs to enable seamless data exchange between frontend and backend",
      "Authentication & Authorization: Secure user access and role-based system control",
    ],
    results: [
      "The SIMAKU system successfully provided a centralized platform for managing campus financial data. Through this project, I gained and strengthened skills in:",
      "Full stack web development using Laravel",
      "REST API design and integration",
      "Database modeling and optimization with MySQL",
      "Building secure, maintainable, and scalable web applications",
    ],
    gallery: [
      "image/galeri simaku1.png",
      "image/galeri simaku2.png",
      "image/galeri simaku3.png",
      "image/galeri simaku5.png",
      "image/galeri simaku4.png",
      "image/galeri simaku6.png",
    ],
  },
  {
    id: "project-2",
    title: "MY PROJECT",
    subtitle: "Team Collaboration",
    summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis animi quia corrupti, tempore, eum ab eius omnis optio maxime ipsum qui nemo sapiente, quod corporis ducimus accusantium sequi odit repellendus!",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    tags: ["Collaboration", "Management", "Agile", "UI/UX"],
    overview: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis animi quia corrupti, tempore, eum ab eius omnis optio maxime ipsum qui nemo sapiente, quod corporis ducimus accusantium sequi odit repellendus!",
      "I worked collaboratively within a multidisciplinary team to ideate, prototype, and build and launch this comprehensive solution, coordinating between frontend developers, design leads, and project stakeholders.",
    ],
    challenges: [
      "Ensuring alignment on project deliverables across several departments with strict milestones and real-time design validation rounds.",
    ],
    solutions: [
      "Utilizing modern product management frameworks, running recurring sprint reviews, and developing modular component structures in Figma to streamline design-to-development handoff.",
    ],
    results: [
      "Completed visual prototypes ahead of schedule, enabling stakeholders to carry out user testing sessions and obtain crucial, early metrics on utility and navigation flow.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=800",
    ],
  },
  {
    id: "project-3",
    title: "MY PROJECT",
    subtitle: "Robotics & Automation",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt, quod cupiditate enim reiciendis autem. Obcaecati repellat, unde repudiandae laborum quod maxime velit vel error. Aliquam deserunt accusantium incidunt quasi?",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
    tags: ["Robotics", "IoT", "C++", "Automation"],
    overview: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt, quod cupiditate enim reiciendis autem. Obcaecati repellat, unde repudiandae laborum quod maxime velit vel error. Aliquam deserunt accusantium incidunt quasi?",
      "In this project, I handled hardware prototyping and embedded software debugging, ensuring that the control loops operated with tight execution frequencies and minimal latency.",
    ],
    challenges: [
      "Integrating multiple sensor systems under power-constrained scenarios while ensuring physical stability during robot maneuvers.",
    ],
    solutions: [
      "Writing highly optimized micro-controller routines, selecting high-efficiency motor controllers, and testing sensor data filters in simulated environments.",
    ],
    results: [
      "Successfully created an agile, functional prototype ready for competitive robotic challenges and team-based research tasks.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
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
  "image/foto beswan.jpeg",
  "image/foto sto.jpeg",
];
