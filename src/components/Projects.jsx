import React from "react";

import project2 from "../../public/project6.png";
import project3 from "../../public/project5.png";
import project4 from "../../public/project4.png";
import {  motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      num: "01",
      category: "Full Stack",
      title: "Ecommerce",
      description:
        "MERN Chat App is a real-time messaging application built with the MERN stack (MongoDB, Express.js, React, and Node.js). It features a sleek Material UI design with Tailwind CSS for styling and Redux Toolkit for state management. The backend is powered by Express.js and optimized for performance with WebSockets (Socket.io) for instant messaging.",
      stack: [
        { name: "React" },
        { name: "Nodejs" },
        { name: "Redux" },
        { name: "Tailwindcss" },
        { name: "Redux Toolkit" },
      ],
      image: project3,
      live: "https://rabbit-925.vercel.app/",
      github: "https://github.com/Daljeet-gif/rabbit",
    },
    {
      num: "02",
      category: "Full Stack",
      title: "Chat app",
      description:
        "MERN E-Commerce App is a full-featured online shopping platform built with the MERN stack (MongoDB, Express.js, React, and Node.js). It leverages Material UI and Tailwind CSS for a modern, responsive UI and Redux Toolkit for state management. The backend is optimized with Express.js for high performance and secure transactions",
      stack: [
        { name: "React" },
        { name: "Nodejs" },
        { name: "Redux Toolkit" },
        { name: "Tailwindcss" },
        { name: "Martial UI" },
      ],
      image: project2,

      github: "https://github.com/Daljeet-gif/chat_App",
    },
    {
      num: "03",
      category: "React Native",
      title: "Notes App",
      description:
        "The React Native Notes App is a mobile app built with Expo, allowing users to create, read, update, and delete notes seamlessly. It covers all fundamental React Native concepts, ensuring a solid learning experience. Context API is used for efficient state management, while Appwrite handles authentication, database, and storage. The app features a modern UI, smooth navigation, and offline support, making it a practical and user-friendly notes manage",
      stack: [
        { name: "React native" },
        { name: "appwrite" },
        { name: "context Stat menagement" },
        { name: "Tailwindcss" },
       
      ],
      image: project4,
      live: "application-f0f2c180-d429-47ee-a59e-0dce702495af.aab",
      github: "https://github.com/Daljeet-gif/reactnative",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center [y-12 xl:px-0 pt-24"
    >
      <div name="Project" className="container mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-16 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

export const ProjectCard = ({
  num,
  category,
  title,
  description,
  stack,
  image,
  live,
  github,
}) => {
  return (
    <div className="flex gap-8 items-center sm:pl-12 sm:pr-24">
      {/* Project Number and Details */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{num}</h1>
        <h2 className="text-2xl font-semibold mb-2">{category}</h2>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline cursor-pointer "
          >
            {live ? "Live " : "Not Live yet"}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Project Image */}
      <div className="flex-1">
        <img src={image} alt={title} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
};
