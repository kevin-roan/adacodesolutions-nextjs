import Colors from "@/contants/colors";
import React from "react";

const SectionHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-center">
      <h3 className="font-sans">{title}</h3>
      <h2
        className="font-bold text-2xl "
        style={{
          color: Colors.primary,
        }}
      >
        {desc}
      </h2>
    </div>
  );
};

export default SectionHeader;
