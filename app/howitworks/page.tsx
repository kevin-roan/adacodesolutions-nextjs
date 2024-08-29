import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div>
      <ol className="overflow-hidden space-y-8">
        <motion.li
          className="relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-indigo-600 after:inline-block after:absolute after:-bottom-11 after:left-1/2 "
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-8 w-full max-w-sm">
            <div className="flex items-center gap-3.5 bg-indigo-50 p-3.5 rounded-xl relative z-10 border border-indigo-600 w-full">
              <div className="rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white p-3">{/* SVG here */}</span>
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  You enroll to our course
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  This is the first step in our program
                </p>
              </div>
            </div>
          </div>
        </motion.li>

        <motion.li
          className="relative flex-1 after:content-[''] after:w-0.5 after:h-full after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-8 w-full max-w-sm">
            <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
              <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 p-3">{/* SVG here */}</span>
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  You will work on Real World projects
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Meanwhile learning technologies and Practising for Interviews
                </p>
              </div>
            </div>
          </div>
        </motion.li>

        <motion.li
          className="relative flex-1"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-8 w-full max-w-sm">
            <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
              <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 p-3">{/* SVG here */}</span>
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Practising for Interview
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  You will thoughly learn best practices for the interview and
                  salary negotiations
                </p>
              </div>
            </div>
          </div>
        </motion.li>

        <motion.li
          className="relative flex-1"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-8 w-full max-w-sm">
            <div className="flex items-center gap-3.5 bg-gray-50 p-3.5 rounded-xl relative z-10 border border-gray-50 w-full">
              <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 p-3">{/* SVG here */}</span>
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Interview and Placement
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Congrats, Your become a software developer with Adacode!
                </p>
              </div>
            </div>
          </div>
        </motion.li>
      </ol>
    </div>
  );
};

export default HowItWorks;
