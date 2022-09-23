import styles from "./Contact.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const container = useRef(null);
  const inView = useInView(container, { once: true });

  return (
    <div ref={container} className={styles.contactContainer}>
      <h3>Contact Us</h3>
      <div className="flex xl:flex-row flex-col justify-content-center items-center gap-10 mt-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 xl:w-1/2 w-full"
        >
          <input
            type="text"
            className="bg-gray-200 border-none outline-none py-4 px-8 placeholder-gray-500"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-gray-200 border-none outline-none py-4 px-8 placeholder-gray-500"
            placeholder="Email"
          />
          <input
            type="text"
            className="bg-gray-200 border-none outline-none py-4 px-8 placeholder-gray-500"
            placeholder="Phone"
          />
          <input
            type="text"
            className="bg-gray-200 border-none outline-none py-4 px-8 placeholder-gray-500"
            placeholder="Service"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="xl:w-1/2 w-full h-full"
        >
          <textarea
            className="bg-gray-200 border-none outline-none py-4 px-8 placeholder-gray-500 h-full w-full"
            rows={10}
            placeholder="Message"
          />
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="bg-primary-red py-4 mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center mt-12"
      >
        <span className="mx-auto text-white text-xl text-center">Submit</span>
      </motion.button>
    </div>
  );
}
