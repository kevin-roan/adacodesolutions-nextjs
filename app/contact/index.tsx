import { title } from "@/components/primitives";
import Colors from "@/contants/colors";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import React from "react";

const ContactUs = () => {
  return (
    <div className="lg:flex md:flex sm:flex-row items-center">
      <div className="lg:w-[50%] md:w-[50%]">
        <Image
          width={500}
          height={300}
          src="https://entrielevate.com/wp-content/uploads/2024/01/Image-2-1.png"
          alt="section hero"
          className="my-4"
        />
      </div>
      <div className="lg:w-[50%] md:w-[50%] flex-row gap-3 ">
        <h3 className={title()}>
          <span className="" style={{ color: Colors.primary }}>
            Get Expert Advice
          </span>
          : Register for your free consultation Now!
        </h3>
        <form className="flex-row ">
          <Input
            className="my-3"
            label="Your Name"
            placeholder="John Doe"
            type="text"
          />
          <Input
            className="my-3"
            label="Email"
            placeholder="johndoe@mail.com"
            type="email"
          />
          <Input
            className="my-3"
            label="Phone Number"
            placeholder="+91 987654321"
            type="tel"
          />
          <button
            className="p-3 px-4 text-white rounded-lg w-full "
            style={{ backgroundColor: Colors.primary }}
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
