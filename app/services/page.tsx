import ServiceCard from "@/components/ServiceCard";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 ">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default Services;
