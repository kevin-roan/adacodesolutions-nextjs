import Colors from "@/contants/colors";
import React from "react";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { SiProgress } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  desc: string;
  highlights: [];
  id: string;
  imgUrl: string;
  small: string;
  title: string;
}

export default function CourseCard({
  desc,
  highlights,
  id,
  imgUrl,
  small,
  title,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="border-1 border-[#cacaca] m-3 rounded-2xl w-[35vh] shadow-md max-h-[60vh] overflow-auto">
        <img alt="Course Banner" className="rounded-t-2xl" src={imgUrl} />
        <div className=" p-4">
          <div className="">
            <h3 className="font-bold" style={{ color: Colors.primary }}>
              {title}
            </h3>
            <p className="text-sm text-primary">{small}</p>
          </div>
          <p className="text-sm">{desc}</p>
          <Divider className="my-4" />
          <div className="flex items-center gap-2 m-2">
            <SiProgress />
            <h5>Highlights</h5>
          </div>
          <div className="flex flex-wrap gap-3">
            {highlights.map((item, index) => (
              <Chip key={index} title={item} />
            ))}
          </div>
          <Link href={`https://course.adacodesolutions.com/${id}`}>
            <Button
              disableRipple
              className=" w-full border-1 mt-3 overflow-visible rounded-full hover:-translate-y-1 px-12 bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 "
              size="md"
            >
              Check Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

const Chip = ({ title }: { title: string }) => {
  return (
    <div
      className=" p-1 px-2 rounded-[100px] "
      style={{
        backgroundColor: Colors.primary,
      }}
    >
      <h4 className="font-normal text-sm text-white">{title}</h4>
    </div>
  );
};
