import { 
  FaCode, 
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaPaintBrush 
} from "react-icons/fa";

// Images
import profileImg from "./profile.jpeg";
import heroImg from "./hero.png";
import logoImg from "./logo.jpeg";

// ================== IMAGES ==================
export const assets = {
  profileImg,
  heroImg,
  logoImg
};

// ================== ABOUT ==================
export const aboutData = {
  title: "About Me",
  description:
    "I am a passionate web developer with skills in React, JavaScript, HTML, and CSS. I love building modern and responsive web applications."
};

// ================== SKILLS ==================
export const skillsData = [
  {
    icon: FaReact,
    name: "React",
    level: "Intermediate"
  },
  {
    icon: FaCode,
    name: "JavaScript",
    level: "Intermediate"
  },
  {
    icon: FaServer,
    name: "Backend",
    level: "Basic"
  },
  {
    icon: FaMobileAlt,
    name: "Responsive Design",
    level: "Intermediate"
  },
  {
    icon: FaPaintBrush,
    name: "UI/UX",
    level: "Basic"
  }
];

// ================== PROJECTS ==================
export const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React.",
    image: heroImg,
    link: "#"
  },
  {
    title: "Online Examination System",
    description: "A web app for conducting online exams.",
    image: logoImg,
    link: "#"
  },
  {
    title: "Smart Fleet System",
    description: "Vehicle tracking dashboard project.",
    image: profileImg,
    link: "#"
  }
];







