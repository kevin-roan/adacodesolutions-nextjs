import React from "react";
import { Logo } from "./icons";
import { Divider } from "@nextui-org/divider";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full h-[10vh] ">
      <Divider />
      <div className="flex justify-between mx-[10vmax]">
        <div>
          <h3 className="font-bold">Location</h3>
          <Divider />
          <iframe
            className="rounded-2xl py-3"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15653.941129691071!2d75.791888!3d11.225668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659378f7f9911%3A0x62ff59d7aabdab76!2sAdacode%20solutions!5e0!3m2!1sen!2sin!4v1725358408194!5m2!1sen!2sin"
            width="360"
            height="180"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3 className="font-bold">Our Services</h3>
          <Divider />
          <ul>
            <li>App Development</li>
            <li>Website Development</li>
            <li>Data Analysis</li>
            <li>UI/UX Development</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Our Courses</h3>
          <Divider />
          <ul>
            <li>Data Science</li>
            <li>Python Fullstack</li>
            <li>React Native</li>
            <li>Flutter App Development</li>
            <li>MERN Stack</li>
            <li>Robotics</li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className="bottom flex justify-between mx-10 py-4">
        <h3>Adacode Solutions</h3>
        <div className="flex gap-4 mx-4">
          <Image width={20} height={20} src="/instagramicon.png" />
          <Image width={20} height={20} src="/linkedinicon.png" />
          <Image width={20} height={20} src="/youtubeicon.png" />
        </div>
        <h3>&copy; All rights reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
