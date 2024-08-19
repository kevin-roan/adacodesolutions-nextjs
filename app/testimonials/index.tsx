import TestimonialCard from "@/components/testimonialCard";
import React from "react";

const Testimonials = () => {
  return (
    <div className="lg:flex md:flex justify-between gap-3 my-4">
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </div>
  );
};

export default Testimonials;
