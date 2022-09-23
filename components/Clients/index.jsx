import styles from "./Clients.module.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Clients() {
  const container = useRef(null);
  const inView = useInView(container, { once: true });

  return (
    <div ref={container} className={`${styles.clientsContainer} gap-8`}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer transition ease-in-out duration-600 transform hover:scale-110 hover:shadow-2xl"
      >
        <Image
          src="/assets/brand_lennox.png"
          className="object-contain"
          alt="Lennox"
          width={200}
          height={119}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer transition ease-in-out duration-600 transform hover:scale-110 hover:shadow-2xl"
      >
        <Image
          src="/assets/brand_bbb.png"
          className="object-contain"
          alt="Lennox"
          width={193}
          height={115}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer transition ease-in-out duration-600 transform hover:scale-110 hover:shadow-2xl"
      >
        <Image
          src="/assets/brand_hero.png"
          className="object-contain"
          alt="Lennox"
          width={200}
          height={119}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer transition ease-in-out duration-600 transform hover:scale-110 hover:shadow-2xl"
      >
        <Image
          src="/assets/brand_ygreene.png"
          className="object-contain"
          alt="Lennox"
          width={200}
          height={119}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer transition ease-in-out duration-600 transform hover:scale-110 hover:shadow-2xl"
      >
        <Image
          src="/assets/brand_finance.png"
          className="object-contain"
          alt="Lennox"
          width={200}
          height={119}
        />
      </motion.div>
    </div>
  );
}
