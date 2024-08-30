import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const MeetOurHeroes = () => {
  return (
    <Parallax
      bgImage="https://img.freepik.com/premium-vector/hand-teamwork-digital-low-poly-background-friendship-support-success-business-team-symbol_252172-26.jpg"
      className="rounded-tr-3xl rounded-tl-3xl my-[10px]"
      strength={300}
    >
      <div className="h-[30max] w-full flex justify-center items-center">
        <motion.div
          animate={{ opacity: 1 }}
          className=" rounded-[100px]"
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            alt="Our Heroes"
            className="border-none rounded-s pt-[10rem] rounded-br-3xl rounded-bl-3xl "
            height={3000}
            src="/herobanner.png"
            width={3000}
          />
        </motion.div>
      </div>
    </Parallax>
  );
};

export default MeetOurHeroes;
