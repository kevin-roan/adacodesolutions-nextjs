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
        <Image alt="marquee" height={100} width={100} src="/partners/br1.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br2.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br3.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br4.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br5.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br6.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br7.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br8.png" />
        <Image alt="marquee" height={100} width={100} src="/partners/br9.png" />
      </motion.div>
    </div>
  );
};

export default Marquee;
