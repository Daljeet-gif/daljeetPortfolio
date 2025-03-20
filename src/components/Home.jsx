import React from "react";

import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa6";

import img from "../../public/img.jpg";

import CountUp from "react-countup";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
const Home = () => {
  const stats = [
    {
      num: 9,
      text: "Months of expreience",
    },
    {
      num: 4,
      text: "Projects completes",
    },
    {
      num: 6,
      text: "Technologies knowledge",
    },
    {
      num: 3,
      text: "Code commits",
    },
  ];
  return (
    <div>
      <div name="Home" class="flex flex-col md:flex-row items-center justify-between w-full  px-10  my-16 md:pl-44 pt-24  dark:text-white">
        <div class="basis-full md:basis-1/2 space-y-6 text-center md:text-left ">
          <motion.h1
            class="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome In my Feed
            <br />
            Hello, I'm a{" "}
            <ReactTyped
              typeSpeed={60}
              loop={true}
              strings={["Developer", "Programmer", "Coder"]}
              className={"text-green-700 font-bold"}
            ></ReactTyped>
          </motion.h1>
          <p class="text-lg dark:text-gray-300">
          I am a MERN Stack Developer with hands-on experience in MongoDB, Express.js, React, and Node.js. I have built projects like E-commerce, Chat App, and Notes App, implementing Redux Toolkit, JWT authentication, and API integration. I am seeking a fresher job or internship opportunity to apply my skills, contribute to real-world projects, and grow as a developer
          </p>
          <div class="flex items-center justify-evenly md:justify-start gap-4">
            <a
              href="daljeetresume.pdf"
                download="daljeetresume.pdf"
              class=" border border-green-500  hover:scale-95  dark:text-green-400 px-6 py-2 rounded-2xl font-medium hover:bg-green-600 transition duration-300"
            >
              Download CV
            </a>
            <div class="flex gap-6 text-green-500">
              <ul className="flex space-x-5 my-2 ">
                <li>
                  <a href="" target="_blank">
                    <FaSquareInstagram className="text-2xl cursor-pointer hover:scale-150 duration-200  dark:text-green-400"></FaSquareInstagram>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FaSquareGithub className="text-2xl cursor-pointer  hover:scale-150 duration-200  dark:text-green-400"></FaSquareGithub>
                  </a>
                </li>
                <li>
                  <a href="https://www.indeed.com/profile/YOUR_PROFILE_ID" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer  hover:scale-150 duration-200  dark:text-green-400"></FaLinkedin>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6283789930" target="_blank">
                    <FaWhatsapp className="text-2xl cursor-pointer  hover:scale-150 duration-200  dark:text-green-400"></FaWhatsapp>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          class="basis-full md:basis-1/2 flex justify-center  "
        >
          <img
            src={img}
            alt="Profile"
            class="w-72 h-72 rounded-full object-cover"
          />
        </motion.div>
      </div>
      <section>
        <div className="container mx-auto pt-11">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center"
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  ></CountUp>
                  <p
                    className={`${
                      item.text.length < 15 ? "max-w-[108px]" : "max-w-[150px]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
