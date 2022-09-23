import styles from "./Efficiency.module.scss";
import { motion, useInView } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineCheckCircle } from "react-icons/ai";
import { useRef } from "react";

export default function Efficiency() {
  const container = useRef(null);
  const inView = useInView(container, {
    once: true,
  });

  return (
    <div ref={container} className={styles.efficiencyContainer}>
      <div className="mt-24 lg:mt-14 w-full flex flex-col items-end">
        <h3 className={`text-4xl font-bold text-primary-blue ${styles.header}`}>
          Innovative Service For Top Efficiency
        </h3>
        <p className="text-gray-500 text-lg font-bold mt-6">
          Maximize the comfort of your home by implementing the latest in HVAC
          technology:
        </p>
        <ul className="mt-4 p-0 xl:ml-36">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex gap-2 mt-6 xl:w-2/3 w-full ml-auto text-md text-gray-600`}
          >
            <AiOutlineCheckCircle className="text-2xl mt-[0.2rem] text-primary-red" />
            Establishing separate zones controlled with programmable thermostats
            to achieve custom comfort in each room
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`flex gap-2 mt-6 xl:w-2/3 w-full ml-auto text-md text-gray-600`}
          >
            <AiOutlineCheckCircle className="text-2xl mt-[0.2rem] text-primary-red" />
            Whole house air filtration to remove dust mites, pet dander,
            formaldehyde from furniture and carpeting, mold, pesticides, and
            other pollutants
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`flex gap-2 mt-6 xl:w-2/3 w-full ml-auto text-md text-gray-600`}
          >
            <AiOutlineCheckCircle className="text-2xl mt-[0.2rem] text-primary-red" />
            Whole-house humidifiers to keep your home comfortable at lower
            temperatures
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className={`flex gap-2 mt-6 xl:w-2/3 w-full ml-auto text-md text-gray-600`}
          >
            <AiOutlineCheckCircle className="text-2xl mt-[0.2rem] text-primary-red" />
            Ductless air conditioning units to reduce the need for new ducts
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`flex gap-2 mt-6 xl:w-2/3 w-full ml-auto text-md text-gray-600`}
          >
            <AiOutlineCheckCircle className="text-2xl mt-[0.2rem] text-primary-red" />
            Heat pumps for centralized HVAC control
          </motion.li>
        </ul>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="bg-primary-red py-4 xl:mr-[24rem] mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center"
        >
          <span className="mx-auto text-white text-xl text-center">
            Get AC Service
          </span>
          <AiOutlineArrowRight className="ml-4 text-xl mt-1 text-white" />
        </motion.button>
      </div>
    </div>
  );
}
