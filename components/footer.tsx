import React from "react";
import { Logo } from "./icons";

const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white ">
      <div className="flex gap-3 justify-center">
        <div className="p-3">
          <h2 className="font-bold border-b-white border-b-2">Our Services </h2>
          <ul>
            <li>Web Developement</li>
            <li>App Developement</li>
            <li>Data Science</li>
            <li>Web Design</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
        <div className="p-3">
          <h2 className="font-bold border-b-white border-b-2">Our Courses</h2>
          <ul>
            <li>Data Science</li>
            <li>Flutter Development</li>
            <li>React Native</li>
            <li>MERN Stack</li>
            <li>Python Full Stack</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-[0.5px] border-t-[#cacaca] w-full p-3">
        <Logo /> &copy;Adacode Solutions
      </div>
    </footer>
  );
};

export default Footer;

// <div>&copy; CodeVick - Sister company of Adacode Solutions</div>
