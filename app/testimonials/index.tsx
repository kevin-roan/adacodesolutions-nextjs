import TestimonialCard from "@/components/testimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <div className="lg:flex md:flex justify-between gap-3 my-4">
      <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        adkjdakdjdkj
      </span>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
};

export default Testimonials;
