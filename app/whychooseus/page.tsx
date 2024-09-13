import React from "react";
import Image from "next/image";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className=" flex items-center flex-col lg:w-[50%] sm:w-full md:w-full">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        // whileInView={{ opacity: 1, scale: 1.4, rotate: [10, 20] }}
        whileInView={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          alt="section hero"
          className="my-4"
          src="/sectionImage.png"
          height={400}
          width={400}
        />
      </motion.div>
      <div className="text-center gap-3 flex-row ">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <h1 className={title()}>Your Career Partner</h1>
          <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
            adkjdakdjdkj
          </span>
          <p className="mt-2 text-wrap">
            Adacode Solutions stands out by providing top-tier software training
            in data science, full stack development, app development, and IoT,
            all while maintaining the lowest fees in the market. Our
            comprehensive programs are designed to equip you with cutting-edge
            skills and practical knowledge.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
