import styles from "./Products.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Products() {
  const container = useRef(null);
  const inView = useInView(container, {
    once: true,
  });

  return (
    <div ref={container} className={styles.productsContainer}>
      <div className="flex lg:flex-row flex-col justify-content-center">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className={`${styles.productsHeader} text-4xl text-primary-blue`}
        >
          Residential Products
        </motion.h3>
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="bg-primary-red py-4 ml-auto px-12 lg:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center"
        >
          <span className="mx-auto text-white text-xl text-center">
            View all products
          </span>
          <AiOutlineArrowRight className="ml-4 text-xl mt-1 text-white" />
        </motion.button>
      </div>
      <div className="flex lg:flex-row flex-col justify-content-center items-center mt-8 gap-14 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        >
          <Image
            src="/assets/Products1.png"
            alt="Products"
            width={372}
            height={377}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/assets/Products2.png"
            alt="Products"
            width={372}
            height={377}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src="/assets/Products3.png"
            alt="Products"
            width={372}
            height={377}
          />
        </motion.div>
      </div>
      <div className="flex lg:flex-row flex-col justify-content-center mt-4 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Image
            src="/assets/Lennox.png"
            alt="Products"
            width={570}
            height={408}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Image
            src="/assets/10repair.png"
            alt="Products"
            width={570}
            height={408}
          />
        </motion.div>
      </div>
      <div className="flex flex-col xl:flex-row mt-14 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className=" w-full"
        >
          <Image
            src="/assets/sidebar-newequipment.png"
            alt="Products"
            width={567}
            height={547}
          />
        </motion.div>
        <div className="flex flex-col justify-content-center items-center">
          <h2
            className={`${styles.productsHeader} text-4xl text-primary-blue xl:w-3/4 w-full`}
          >
            New Equipment Design
            <span> &</span> Installation
          </h2>
          <div
            className={`xl:w-3/4 w-full content-center text-lg text-gray-500 mt-6 ${styles.paragraph}`}
          >
            When you need a new heating or cooling system, we are proud to offer
            top of the line, efficient Lennox systems. As a Premier Dealer for
            Lennox, you can feel confident knowing all estimates and
            consultations are done by experienced, trained technicians – not
            salesmen – to ensure you get the right system for your home or
            business.
          </div>
          <h2
            className={`${styles.productsHeader} text-xl text-primary-blue xl:w-3/4 w-full mt-6`}
          >
            The system that we design for your home will include:
          </h2>
          <div className="mr-auto w-full xl:w-3/4">
            <ul className="mt-4 p-0 xl:ml-28">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`flex gap-2 mt-6 text-lg ${styles.paragraph}`}
              >
                <FaCheck className="mt-[0.2rem] text-primary-red" />
                Top quality equipment with energy saving features
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className={`flex gap-2 mt-6 text-lg ${styles.paragraph}`}
              >
                <FaCheck className="mt-[0.2rem] text-primary-red" />
                Our expert design and installation services
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className={`flex gap-2 mt-6 text-lg ${styles.paragraph}`}
              >
                <FaCheck className="mt-[0.2rem] text-primary-red" />A system Our
                Excellent warranties
              </motion.li>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className={`flex gap-2 mt-6 text-lg ${styles.paragraph}`}
              >
                <FaCheck className="mt-[0.2rem] text-primary-red" />
                New system financing if desired
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className={`flex gap-2 mt-6 text-lg ${styles.paragraph}`}
              >
                <FaCheck className="mt-[0.2rem] text-primary-red" />
                100 <span>%</span> customer satisfaction guaranteed
              </motion.div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
