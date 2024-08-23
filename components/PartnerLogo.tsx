import { motion } from "framer-motion";
import Image from "next/image";

const Marquee = () => {
  return (
    <div className={"marqueeWrapper my-3"}>
      <motion.div
        className={"marquee "}
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Image
          alt="marquee"
          height={100}
          width={100}
          src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png"
        />
        <Image
          alt="marquee"
          height={100}
          width={100}
          src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png"
        />
        <Image
          alt="marquee"
          height={100}
          width={100}
          src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png"
        />
        <Image
          alt="marquee"
          height={100}
          width={100}
          src="https://beforeifly.com/new/wp-content/uploads/2016/09/logo-disney-white.png"
        />
      </motion.div>
    </div>
  );
};

export default Marquee;
