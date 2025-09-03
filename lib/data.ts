import React from "react";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BLOG from "@/public/images/BLOG.png";
import MOVIES from "@/public/images/MOVIES.png";
import qa from "@/public/images/q^a.png";
import ecommerce from "@/public/images/ecommerce.png";
import mg from "@/public/images/memogame.png";
import Akelny from '@/public/images/Akelny.png';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation ",
    location: "Mansoura - university",
    description:
      "I graduated after 4 years of studying computer and information science. ",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Military service",
    location: "Egypt",
    description:
      "Completed",
    icon: React.createElement(FaPersonMilitaryRifle),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "MERN Stack",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript,Bootstrap, Tailwind, Node.js,Express.js,Nest.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer Freelancer",
    location: "MERN Stack",
    description:
      " i'm working on a project for a company and i'm working on it as a freelancer building IOT Dashboard using mern stack.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IOT Dashboard",
    description:
      " A full-stack IOT Dashboard where users can manage their devices and sensors.",
    tags: ["React", "tailwind", "flowbit", "Node.js", "Express.js", "MongoDB","chart.js"],
    imageUrl: "/images/iot.PNG",
    link: "",
    status:"completed but not deployed"
  },
  {
    title: "Akelny",
    description:
      " **Akelny** is a platform that allows restaurant owners to easily build their own restaurant website under the `akelny.com` domain. It comes with a full-featured dashboard for restaurant management, order tracking, delivery zones, discounts, and analytics. A Super Admin dashboard also exists to oversee all restaurant accounts, earnings, and platform-wide analytics.",

    tags: ["React", "Redux", "tailwind", "Node.js", "Express.js", "MongoDB","cloudinary","paymob,Google OAuth","google maps"],
    imageUrl: Akelny,
    link: "https://akelny-orcin.vercel.app/",
    status: "completed"
  },
  {
    title: "Brand Shop",
    description:
      " A full-stack e-commerce website where users can buy and sell products. It has features like authentication, payment, shipping, and user management.",
    tags: ["React", "Redux", "bootstrap", "Node.js", "Express.js", "MongoDB","cloudinary"],
    imageUrl: ecommerce,
    link: "https://brand-shop-ggea.vercel.app/",
    status: "ongoing"
  },
  {
    title: "MERN Blog",
    description:
      "Here you'll find a variety of articles and tutorials on topics such as MERN stack web development, software engineering, and programming languages..",
    tags: ["React", "ReduxToolKit", "Tailwind", "Firebase", "Node.js", "Express.js", "MongoDB"],
    imageUrl: BLOG,
    link: "https://mern-blog-m91c.vercel.app/",
    status: "completed"
  },
  {
    title: "BoxMovies",
    description:
      "A movie app built with React and TMDb API. It has features like search and pagination.",
    tags: ["React", "Redux", "Axios","Bootstrap"],
    imageUrl: MOVIES,
    link: "https://movies-three-plum.vercel.app/",
    status: "completed"
  },
  {
    title: "Q&A App",
    description:
      "A MERN Stack Interview Q&A application that allows users to add, view, and manage interview questions and answers related to the MERN stack.",
        
    tags: ["React"," React-Bootstrap", "Axios"," Node.js", "Express", "MongoDB", "Mongoose"],
    imageUrl: qa,
    link: "https://q-a-lake.vercel.app/",
    status: "completed"
  },
  {
    title: "Memory Game",
    description:
      "memorygame",
        
    tags: ["React",'tailwind.css'],
    imageUrl: mg,
    link: "https://memory-game-six-pearl.vercel.app/",
    status: "completed"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git & GitHub",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Nest.js",
  "Mongoose",
  "Python",
  "Framer Motion",
] as const;

export const achievementsData = [
  {
    title: "Elmadrsaa Certifications",
    description: "Web development and programming certifications from Elmadrsaa platform",
    certificates: [
      {
        name: "Git and Github",
        imageUrl: "/images/certificates/elmadrsaa/git and github.PNG",
        link: "https://almdrasa.com/certificate-verification?certificate_id=151279315-15118018C-132E06A38",
        date: "2024-01-14"
      }

    ],
    thumbnailImage: "/images/certificates/elmadrsaa/git and github.png",
    date: "2024"
  },
  {
    title: "Index Academy Certifications",
    description: "Nest.js Framework in Details",
    certificates: [
      {
        name: "Nest.js Framework in Details",
        imageUrl: "/images/certificates/Index Academy/index academy nestjs.PNG",
        link: "https://www.indexacademy.dev/courses/2103581/certificate?utm_source=student_mailer&utm_medium=email&utm_campaign=issued_certificate_notification",
        date: "2024-11-21"
      }

    ],
    thumbnailImage: "/images/certificates/Index Academy/certificate-of-completion-for-learn-nest-js-framework-in-details.png",
    date: "2024-11-21"
  },
  {
    title: "Manara Backend Engineering with NodeJS and express js Certifications",
    description: "Web development and programming certifications from Manara platform",
    certificates: [
      {
        name: "Introduction to NodeJS",
        imageUrl: "/images/certificates/manara/node js/Introduction to NodeJS.png",
        link: "https://app.manara.tech/certificate/1732474066-5C312F294A6A5FB4",
        date: "2024-11-22"
      },
      {
        name: "Networking Protocols and Web Technologies",
        imageUrl: "/images/certificates/manara/node js/Networking Protocols and Web Technologies.png",
        link: "https://app.manara.tech/certificate/1732474066-5C312F294A6A5FB4",
        date: "2024-11-22"
      },
      {
        name: "How Does NodeJS Work An Architectural Overview",
        imageUrl: "/images/certificates/manara/node js/How Does NodeJS Work An Architectural Overview.png",
        link: "https://app.manara.tech/certificate/1732474066-5C312F294A6A5FB4",
        date: "2024-11-22"
      },
      {
        name: "Core Built-in NodeJS Modules",
        imageUrl: "/images/certificates/manara/node js/Core Built-in NodeJS Modules.png",
        link: "https://app.manara.tech/certificate/1732474066-5C312F294A6A5FB4",
        date: "2024-11-22"
      },
      {
        name: "Creating a Server with NodeJS and HTTP",
        imageUrl: "/images/certificates/manara/node js/Creating a Server with NodeJS and HTTP.png",
        link: "https://app.manara.tech/certificate/1732474066-5C312F294A6A5FB4",
        date: "2024-11-23"
      },
    ],
    thumbnailImage: "/images/certificates/manara/node js/Introduction to NodeJS.png",      
    date: "2024"
  },
  {

    title: "Manara Database Certifications",
    description: "Web development and programming certifications from Manara platform",
    certificates: [
      {
        name: "Foundations of Databases",
        imageUrl: "/images/certificates/manara/db/Foundations of Databases.png",
        link: "https://app.manara.tech/certificate/1733862355-C917E0F27B8D1CBA",
        date: "2024-11-24"
      },
      {
        name: "Relational Databases with SQL",
        imageUrl: "/images/certificates/manara/db/Relational Databases with SQL.png",
        link: "https://app.manara.tech/certificate/1733862355-C917E0F27B8D1CBA",
        date: "2024-11-26"
      },
      {
        name: "intermediate",
        imageUrl: "/images/certificates/manara/db/intermediate.png",
        link: "https://app.manara.tech/certificate/1733862355-C917E0F27B8D1CBA",
        date: "2024-11-30"
      },
      {
        name: "NoSQL Databases Using MongoDB",
        imageUrl: "/images/certificates/manara/db/NoSQL Databases Using MongoDB.png",
        link: "https://app.manara.tech/certificate/1733862355-C917E0F27B8D1CBA",
        date: "2024-12-10"
      },
      {
        name: "Advanced SQL Stored Procedures Views and Optimization",
        imageUrl: "/images/certificates/manara/db/Advanced SQL Stored Procedures Views and Optimization.png",
        link: "https://app.manara.tech/certificate/1733862355-C917E0F27B8D1CBA",
        date: "2024-12-6"
      },



    ],
    thumbnailImage: "/images/certificates/manara/db/Foundations of Databases.png",      
    date: "2024"
  },
  {
    title: "LeetCode Achievements",
    description: "Various achievements and badges earned on LeetCode platform",
    certificates: [
      {
        name: "Top SQL 50",
        imageUrl: "/images/certificates/leet code badges/Top SQL 50.PNG",
        link: "https://leetcode.com/medal/?showImg=0&id=5849740&isLevel=false",
        date: "2024-12-26"
      },
      {
        name: "Jan Badge",
        imageUrl: "/images/certificates/leet code badges/Jan Badge.png",
        link: "https://leetcode.com/medal/?showImg=0&id=6094095&isLevel=false",
        date: "2025-01-31"
      },
      {
        name: "Feb Badge",
        imageUrl: "/images/certificates/leet code badges/Feb Badge.png",
        link: "https://leetcode.com/medal/?showImg=0&id=6351164&isLevel=false",
        date: "2025-02-28"
      },
      {
        name: "50 Days Badge",
        imageUrl: "/images/certificates/leet code badges/50 Days Badge .png",
        link: "https://leetcode.com/medal/?showImg=0&id=6268184&isLevel=false",
        date: "2025-02-29"
      }
    ],
    thumbnailImage: "/images/certificates/leet code badges/Jan Badge.png",
    date: "2023 - Present"
  },
  
] as const;
