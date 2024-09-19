// pages/about.js

"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>About Us | Adacode Solutions</title>
        <meta
          name="description"
          content="About Adacode Solutions, a software training institute."
        />
      </Head>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <motion.h1
          className="heading"
          variants={textVariants}
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          About Adacode Solutions
        </motion.h1>
        <motion.p
          className="description"
          variants={textVariants}
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          Adacode Solutions is a premier software training institute that offers
          online and offline courses for students in the software field. Our
          mission is to help you build a successful career in the tech industry
          by providing you with the skills and knowledge you need to land your
          dream job in just six months!
        </motion.p>

        <motion.div
          className="courses"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="courses-heading"
            variants={textVariants}
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Our Courses
          </motion.h2>
          {[
            "Data Science",
            "Mobile & Web Development",
            "Python & Django",
            "MERN Stack",
          ].map((course, index) => (
            <motion.div
              key={index}
              className="course-item bg-gradient-to-r from-violet-500 to-violet-800 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              variants={listItemVariants}
              style={{
                marginBottom: "1rem",
                width: "100%",
              }}
            >
              <h3 className="text-white text-xl font-semibold">{course}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="benefits"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          style={{ marginTop: "2rem" }}
        >
          <motion.h2
            className="benefits-heading"
            variants={textVariants}
            style={{ fontSize: "2rem", marginBottom: "1rem" }}
          >
            Why Choose Us?
          </motion.h2>
          {[
            "Expert Instructors with Industry Experience",
            "One-on-One Mentorship",
            "Hands-on Projects and Real-world Scenarios",
            "Placement Assistance within 6 Months",
            "Flexible Learning Options (Online & Offline)",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="border-1 benefit-item bg-gradient-to-r from-violet-400 to-violet-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              variants={listItemVariants}
              style={{
                marginBottom: "1rem",
                width: "100%",
              }}
            >
              <p className="text-white text-lg">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
