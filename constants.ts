
import { ExperienceItem, EducationItem, Publication, SkillCategory } from './types';

export const personalInfo = {
  name: "Elakkiya N.S, M.E, (Ph.D)",
  title: "Assistant Professor",
  email: "elakkiyansece@gmail.com",
  phone: "+91 9042996556",
  location: "Namakkal, India",
  about: "A dedicated and results-oriented Assistant Professor with a strong background in Electronics and Communication Engineering. Passionate about teaching, research, and mentoring students to achieve their full potential. Eager to contribute to a professional, work-driven environment, applying extensive knowledge and skills to fulfill organizational goals and foster academic growth."
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Assistant Professor",
    company: "Selvam College of Technology",
    duration: "3 Years (Current)",
    description: [
      "Handled various theory subjects and practical courses.",
      "Guided students for their projects and academic pursuits.",
      "Took charge as NAAC 3rd and 5th Criteria Department in-charge, Department IQAC Coordinator, Project coordinator, Alumni Coordinator, PG Coordinator, Time table Coordinator, and Class counsellor."
    ]
  },
  {
    role: "Lecturer",
    company: "PGP Polytechnic College",
    duration: "3 Years",
    description: [
      "Taught a range of subjects in Electronics and Communication.",
      "Acted as DOTE and Exam cell incharge.",
      "Involved in conducting NEET and Typewriting Exams."
    ]
  },
  {
    role: "Software Developer",
    company: "Oculus Technologies",
    duration: "6 Months",
    description: [
      "Gained foundational experience in a professional software development environment.",
      "Contributed to software projects, enhancing technical skills."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "M.E in VLSI Design",
    institution: "PGP College of Engineering and Technology, Anna University",
    period: "2015 - 2017",
    score: "79%"
  },
  {
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "PGP College of Engineering and Technology, Anna University",
    period: "2010 - 2014",
    score: "82%"
  },
  {
    degree: "HSSC",
    institution: "Cheran Matriculation Higher Secondary School",
    period: "2009 - 2010",
    score: "79%"
  },
  {
    degree: "SSLC",
    institution: "Cheran Matriculation Higher Secondary School",
    period: "2007 - 2008",
    score: "81%"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
        { name: "C", proficiency: 75 },
        { name: "C++", proficiency: 70 },
        { name: "Verilog", proficiency: 85 }
    ]
  },
  {
    title: "Engineering Software",
    skills: [
        { name: "VLSI (Xilinx)", proficiency: 90 },
        { name: "Embedded Systems (8051, PIC16F877A)", proficiency: 85 },
        { name: "PLC/SCADA (Omron & Siemens)", proficiency: 75 },
        { name: "ORCAD 17.6", proficiency: 70 },
        { name: "MSP-IT", proficiency: 65 },
        { name: "Project Planning Management", proficiency: 80 }
    ]
  }
];

export const publicationsData: Publication[] = [
  {
    title: "Elephant Safety through Cutting-Edge Monitoring Technology",
    authors: "Dr. K. Vidyavathi, N.S. Elakkiya, and S. Abinaya",
    journal: "International Journal of Innovative Research in Science, Engineering and Technology (IJIRSET), Vol. 14(4), pp. 5684–5689",
    year: 2025
  },
  {
    title: "Temperature-Dependent Bandgap Modeling of AlxGa1-xN Using Varshni Equation and Bowing Parameter Analysis for High-Electron-Mobility Transistors",
    authors: "T. Suresh Babu, S. Punitha, U. Saravanakumar, N. S. Elakkiya, M. Tamilvanan, and C. G. Abraham",
    journal: "Proceedings of the 2025 International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET), IEEE",
    year: 2025,
    doi: "10.1109/WiSPNET64060.2025.11005301"
  },
  {
    title: "IoT and Sensor Integrated Home Automation and Surveillance Using Raspberry Pi Pico W",
    authors: "N. S. Elakkiya, R. Ayesvarya, S. M. Deepika, A. Obuli, K. Srikanth, and D. Sweety Reshma",
    journal: "INDICA Journal, Vol. 6(5)",
    year: 2025
  }
];

export const subjectsTaughtData: string[] = [
  "Digital System Design",
  "Communication System",
  "Digital Design",
  "Transmission Lines and RF Systems",
  "Digital Principles and Computer organization",
  "Embedded Systems and IoT Design",
  "Computer Architecture and Organization",
  "Biomedical Instrumentation",
  "Electronic Devices and Circuits",
  "Mechatronics",
];

export const professionalDevelopmentData: string[] = [
    "FDP on Blooms Taxonomy in Teaching and Learning",
    "Two Week National Level Virtual Workshop on Advanced Research Methodology",
    "Webinar on a GUI way to learn Machine Learning",
    "FDP on Oracle organized by Naan Mudhalvan",
    "FDP on Research Issues and Challenges in Communication and Signal Processing",
    "International Workshop on Sensing the Future: Integrating VLSI with Sensor Modelling",
    "FDP on \"Artificial Intelligence Techniques for Satellite Image Analysis - Matlab & Python Perspective\"",
    "FDP on \"Mastering AI tools for Faculty Excellence\"",
    "Hands on FDP/LTTP - \"Mastering Cadence tools for Next Generation Semiconductor Design\"",
    "PDP on \"Foundation of Teaching and Learning” Organized by NITTTR",
    "FDP on Recent Advancements and Challenges in Integration of IoT and 5G/6G Wireless Communication"
];
