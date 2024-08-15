import Colors from "@/contants/colors";

const SectionHeader = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="text-center">
      <h3 className="font-sans">{desc}</h3>
      <h2
        className="font-bold text-2xl "
        style={{
          color: Colors.primary,
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
