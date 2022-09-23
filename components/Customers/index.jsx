import styles from "./Customers.module.scss";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Customers() {
  const container = useRef(null);
  const inView = useInView(container, {
    once: true,
  });
  return (
    <div ref={container} className={styles.customersContainer}>
      <div className="flex flex-col items-center">
        <h3
          className={`text-4xl font-bold text-primary-blue ${styles.customersHeader}`}
        >
          Our Happy Customers
        </h3>
        <p
          className={`text-primary-red font-bold text-lg mt-4 ${styles.customersHeader}`}
        >
          We´re Proud of Our Reviews <span>!</span>
        </p>
      </div>
      <div className="flex xl:flex-row flex-col justify-content-center gap-12 items-center w-full mt-12 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full xl:w-1/2 border-gray-200 border-2 flex flex-col"
        >
          <Image
            src="/assets/testimonials.png"
            alt="testimonials"
            width={701}
            height={394}
            className="w-full h-full object-contain"
          />
          <div className="p-5">
            We love Comfort Air! They’ve worked on issues we’ve had on our
            heating and AC units both at my folks’ home and our building
            downtown PS. Customer service is excellent. They’re punctual,
            friendly, knowledgable, quick and efficient. Every tech we’ve had
            has been great. I know a lot of people in the D have issues with
            their AC during the hellish summer months, and I highly recommend
            them if you find yourself in that kind of a predicament!
          </div>
          <div className="p-5 flex flex-row">
            <p className="font-bold text-gray-600 text-lg">Sheila M. </p>
            <p className="text-gray-600 text-lg ml-2">Sherman Oaks. </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full xl:w-1/2 border-gray-200 border-2 flex flex-col"
        >
          <Image
            src="/assets/testimonials.png"
            alt="testimonials"
            width={701}
            height={394}
            className="w-full h-full object-contain"
          />
          <div className="p-5">
            We love Comfort Air! They’ve worked on issues we’ve had on our
            heating and AC units both at my folks’ home and our building
            downtown PS. Customer service is excellent. They’re punctual,
            friendly, knowledgable, quick and efficient. Every tech we’ve had
            has been great. I know a lot of people in the D have issues with
            their AC during the hellish summer months, and I highly recommend
            them if you find yourself in that kind of a predicament!
          </div>
          <div className="p-5 flex flex-row">
            <p className="font-bold text-gray-600 text-lg">Sheila M. </p>
            <p className="text-gray-600 text-lg ml-2">Sherman Oaks. </p>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center gap-12 mt-24">
        <h3
          className={`text-4xl font-bold text-primary-blue ${styles.customersHeader}`}
        >
          Latest News
        </h3>
        <div className="flex flex-col xl:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full xl:w-1/2 border-gray-200 border-2 flex flex-col"
          >
            <Image
              src="/assets/news.png"
              alt="testimonials"
              width={661}
              height={371}
              className="w-full h-full object-contain"
            />
            <div className="p-5">
              <h3
                className={`text-lg font-bold text-primary-blue ${styles.customersHeader}`}
              >
                Closing Air Vents to Reduce Energy Costs <span>-</span> Not All
                It<span>&apos;</span>s Cracked Up to Be <span>!</span>
              </h3>
              <div className="text-gray-600 text-lg mt-4">
                It's so obvious, right? You're not using a bedroom because Jason
                or Carli is off at college, so...
              </div>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-red py-4 mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center"
              >
                <span className="mx-auto text-white text-xl text-center">
                  Read More
                </span>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full xl:w-1/2 border-gray-200 border-2 flex flex-col"
          >
            <Image
              src="/assets/news.png"
              alt="testimonials"
              width={661}
              height={371}
              className="w-full h-full object-contain"
            />
            <div className="p-5">
              <h3
                className={`text-lg font-bold text-primary-blue ${styles.customersHeader}`}
              >
                Closing Air Vents to Reduce Energy Costs <span>-</span> Not All
                It<span>&apos;</span>s Cracked Up to Be <span>!</span>
              </h3>
              <div className="text-gray-600 text-lg mt-4">
                It's so obvious, right? You're not using a bedroom because Jason
                or Carli is off at college, so...
              </div>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-red py-4 mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center"
              >
                <span className="mx-auto text-white text-xl text-center">
                  Read More
                </span>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-full xl:w-1/2 border-gray-200 border-2 flex flex-col"
          >
            <Image
              src="/assets/news.png"
              alt="testimonials"
              width={661}
              height={371}
              className="w-full h-full object-contain"
            />
            <div className="p-5">
              <h3
                className={`text-lg font-bold text-primary-blue ${styles.customersHeader}`}
              >
                Closing Air Vents to Reduce Energy Costs <span>-</span> Not All
                It<span>&apos;</span>s Cracked Up to Be <span>!</span>
              </h3>
              <div className="text-gray-600 text-lg mt-4">
                It's so obvious, right? You're not using a bedroom because Jason
                or Carli is off at college, so...
              </div>
              <motion.button
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
                className="bg-primary-red py-4 mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center"
              >
                <span className="mx-auto text-white text-xl text-center">
                  Read More
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className={`${styles.scheduleService}`}
      >
        <h3 className="text-white text-4xl xl:ml-24">Schedule Service</h3>
        <h3 className="text-white text-2xl xl:ml-24">
          Contact us for all your A<span>/</span>C and heating needs.
        </h3>
        <h3 className="text-white text-4xl xl:ml-24">
          Call <span className="font-bold">760-488-6444</span>
        </h3>
      </motion.div>
    </div>
  );
}
