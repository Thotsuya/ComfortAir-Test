import styles from "./CommServices.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CommercialServices() {
  const container = useRef(null);
  const inView = useInView(container, { once: true });

  return (
    <div ref={container} className={styles.serviceContainer}>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Our Unsurpassed Residential <span>&</span> Commercial Services
      </motion.h3>
      <div
        className={`flex md:flex-row flex-col gap-4 mt-12 text-white text-xl ${styles.serviceText}`}
      >
        <div className="lg:w-1/2 w-full">
          We are experts at providing reliable, prompt and affordable heating,
          cooling, and ventilation services. Our comprehensive services include:
          <ul className="mt-4">
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-2 mt-6"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              Design and installation of heating and cooling systems
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-2 mt-4"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              Maintenance and repair services for all makes and models of HVAC
              equipment
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-2 mt-4"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              Same day service to restore the comfort of your home as soon as
              possible
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-2 mt-4"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              <span>24/7</span> Emergency repair service when you need it
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex gap-2 mt-4"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              FREE no-obligation estimates when you need new or replacement
              equipment
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-2 mt-4"
            >
              <AiOutlineCheckCircle className="mt-[0.2rem]" />
              Competitive pricing with financing options
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="lg:w-1/2 w-full"
        >
          <Image
            src="/assets/youtube-covid.png"
            alt="youtube-covid"
            width={540}
            height={372}
          />
        </motion.div>
      </div>
    </div>
  );
}
