import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Hero() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={styles.overlay}
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, delay: 0.5 }}
          transition={{ duration: 0.5 }}
          className="lg:text-6xl text-5xl lg:mt-60 mt-28 lg:px-[12rem]"
        >
          The Coachella Valley’s <span>#</span>1 Choice For Air Conditioning And
          Heating <span>!</span>
        </motion.h1>
        <button className="bg-primary-red py-4 px-12 mt-12 hover:bg-black transition ease-in-out duration-200 flex mx-auto rounded">
          <span className="text-white text-xl">Free Consultation</span>
          <AiOutlineArrowRight className="ml-4 text-xl mt-1" />
        </button>
      </motion.div>
    </div>
  );
}
