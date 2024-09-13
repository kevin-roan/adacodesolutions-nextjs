import React from "react";
import { Divider } from "@nextui-org/divider";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-[10vh] ">
      <Divider />
      <div className="flex justify-between flex-wrap mx-10">
        <div>
          <h3 className="font-bold">Location</h3>
          <Divider />
          <iframe
            title="location"
            className="py-3 flex flex-shrink"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15653.941129691071!2d75.791888!3d11.225668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659378f7f9911%3A0x62ff59d7aabdab76!2sAdacode%20solutions!5e0!3m2!1sen!2sin!4v1725358408194!5m2!1sen!2sin"
            width="240"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
        <div className="">
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
      <div className="bottom flex justify-between mx-10 py-4 items-center">
        <h3 className="text-sm">Adacode Solutions</h3>
        <div className="flex gap-4 mx-4">
          <Link href="https://linkedin/in/adacodesolutions">
            <FaLinkedinIn />
          </Link>
          <Link href="https://instagram.com/adacodesolutions">
            <FaInstagram />
          </Link>
          <Link href="https://youtube.com/c/adacodesolutions">
            <FaYoutube />
          </Link>
        </div>
        <h3 className="text-small">&copy; All rights reserved</h3>
      </div>
    </footer>
  );
};

export default Footer;
