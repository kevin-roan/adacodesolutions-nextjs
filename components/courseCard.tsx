import Colors from "@/contants/colors";
import React from "react";
import { Divider } from "@nextui-org/divider";

export default function CourseCard() {
  return (
    <div className="border-1 border-[#cacaca] m-3 rounded-2xl w-[35vh] shadow-md">
      <img
        alt="Course Banner"
        className="rounded-t-2xl"
        src="/courseAssets/flutter.png"
      />
      <div className=" p-4">
        <div className="">
          <h3 className="font-bold" style={{ color: Colors.primary }}>
            MERN Stack
          </h3>
          <p className="text-sm">Full Stack Developement</p>
        </div>
        <div>
          Please add your content here and click on the Course button bellow
        </div>
        <Divider className="my-4" />
        <h5>Title</h5>
        <div className="flex flex-wrap gap-3">
          <Chip title="React" />
          <Chip title="MongoDB" />
          <Chip title="NodeJs" />
          <Chip title="Express" />
        </div>
      </div>
    </div>
  );
}

const Chip = ({ title }: { title: string }) => {
  return (
    <div className="bg-gray-100 p-2 rounded-2xl">
      <h4 className="font-normal">{title}</h4>
    </div>
  );
};
