import React from "react";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BLOG from "@/public/images/BLOG.png";
import MOVIES from "@/public/images/MOVIES.png";
import qa from "@/public/images/q^a.png";
import ecommerce from "@/public/images/ecommerce.png";

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
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Brand Shop",
    description:
      " A full-stack e-commerce website where users can buy and sell products. It has features like authentication, payment, shipping, and user management.",
    tags: ["React", "Redux", "bootstrap", "Node.js", "Express.js", "MongoDB","cloudinary"],
    imageUrl: ecommerce,
    link: "https://brand-shop-ggea.vercel.app/",
  },
  {
    title: "MERN Blog",
    description:
      "Here you'll find a variety of articles and tutorials on topics such as MERN stack web development, software engineering, and programming languages..",
    tags: ["React", "ReduxToolKit", "Tailwind", "Firebase", "Node.js", "Express.js", "MongoDB"],
    imageUrl: BLOG,
  },
  {
    title: "BoxMovies",
    description:
      "A movie app built with React and TMDb API. It has features like search and pagination.",
    tags: ["React", "Redux", "Axios","Bootstrap"],
    imageUrl: MOVIES,
  },
  {
    title: "Q&A App",
    description:
      "A MERN Stack Interview Q&A application that allows users to add, view, and manage interview questions and answers related to the MERN stack.",
        

    tags: ["React"," React-Bootstrap", "Axios"," Node.js", "Express", "MongoDB", "Mongoose"],
    imageUrl: qa,
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
