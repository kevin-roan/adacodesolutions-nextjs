"use client";
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
                <img
                  alt="span"
                  height={100}
                  src="/gifs/spanimage1.gif"
                  width={100}
                />
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Personalized 1-on-1 Classes
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Begin your journey with tailored 1-on-1 sessions to master
                  core concepts and skills directly from experts.
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
                <img
                  alt="span"
                  height={100}
                  src="/gifs/spanimage3.gif"
                  width={100}
                />
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Skill Enhancement
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Refine your aptitude and English proficiency through targeted
                  practice sessions designed to boost your performance.
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
                <img
                  alt="span"
                  height={100}
                  src="/gifs/spanimage5.gif"
                  width={100}
                />
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Interview Preparation
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Benefit from Adacode&apos;s dedicated scheduling of job
                  interviews, with personalized guidance to excel in each
                  opportunity.
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
                <img
                  alt="span"
                  height={100}
                  src="/gifs/spanimage2.png"
                  width={100}
                />
              </div>
              <div className="flex items-start rounded-md justify-center flex-col">
                <h6 className="text-base font-semibold text-black mb-0.5">
                  Successful Placement
                </h6>
                <p className="text-xs font-normal text-gray-500">
                  Secure your ideal job as our comprehensive support helps you
                  transition seamlessly from training to employment.
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
