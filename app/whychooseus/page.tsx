import React from "react";
import Image from "next/image";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1.4, rotate: [10, 20] }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          width={900}
          height={900}
          src="/floatingcard.png"
          alt="section hero"
          className="my-4"
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
          <p className="mt-2">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
