import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                Hi, I’m Sato Haruto, a Senior Full Stack Web and Mobile
                Developer based in Tokyo, Japan. I have 6 years of experience
                building scalable, high-performance web and mobile applications
                for a wide range of industries. I specialize in modern frontend
                frameworks like React and Next.js, backend development with
                Node.js and NestJS, and cross-platform mobile development using
                React Native and Flutter.
              </p>
              <br />

              <p>
                I’m passionate about creating intuitive, user-friendly
                experiences while ensuring robust and maintainable code. I enjoy
                collaborating with cross-functional teams, mentoring junior
                developers, and leveraging cloud technologies to deliver
                reliable and innovative solutions. Outside of coding, I love
                exploring new technologies, contributing to open-source
                projects, and turning complex problems into simple, elegant
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
