import Image from "next/image";
import styles from "./Services.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const imageThirtyYears = useRef(null);
  const services = useRef(null);
  const isInView = useInView(imageThirtyYears, {
    once: true,
  });
  const isInViewServices = useInView(services, {
    once: true,
  });

  return (
    <>
      <div className="flex flex-col items-center py-12 px-4 h-100">
        <div className="flex 2xl:flex-row flex-col items-center gap-20 2xl:absolute 2xl:bottom-[-12rem] ">
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0, duration: 0.3 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <Image
              className="object-contain"
              width={195}
              height={254}
              src={"/assets/services1.png"}
              alt="services1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0, duration: 0.3, delay: 0.6 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <Image
              className="object-contain"
              width={195}
              height={254}
              src={"/assets/services2.png"}
              alt="services1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, duration: 0.3, delay: 1.2 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <Image
              className="object-contain"
              width={195}
              height={254}
              src={"/assets/services3.png"}
              alt="services1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, duration: 0.3, delay: 1.8 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
          >
            <Image
              className="object-contain"
              width={195}
              height={254}
              src={"/assets/services4.png"}
              alt="services1"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-2 py-6 lg:px-[8rem] mt-32">
          <div ref={imageThirtyYears}>
            <Image
              className="object-contain"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              width={1180}
              height={467}
              alt={"Over 30 years"}
              src={"/assets/over30years.jpg"}
            />
          </div>
          <div
            ref={services}
            style={{
              transform: isInViewServices ? "none" : "translateX(-200px)",
              opacity: isInViewServices ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex xl:flex-row flex-col gap-5 mt-8 py-6"
          >
            <div
              className={`${styles.servicesHeader} flex flex-col mt-12 xl:w-1/2 px-20`}
            >
              <h3 className="text-primary-blue">Keep Your Family Safe From</h3>
              <h3 className="text-primary-red heavy">
                Germs <span>&</span> Airborne Viruses
              </h3>
              <h3 className="text-primary-blue">
                We Offer Air Purification Options
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque orci dui, condimentum eu est id, tempor fringilla
                eros. Ut elementum ante quis erat convallis ultrices nec non
                est. Integer consequat quis lectus a aliquet. Nullam semper sit
                amet felis quis dictum. Nam luctus nulla placerat purus volutpat
                molestie. Sed at lacinia libero. Cras faucibus ex et est
                malesuada sagittis. Sed facilisis pellentesque sapien at
                suscipit.
                <br />
                <br />
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Vestibulum tempor, lorem
                sagittis ultrices consectetur, dui nisl rhoncus ipsum, ut
                placerat leo odio vitae erat. Nulla facilisi. Nullam pulvinar
                accumsan est, et consequat est pulvinar vitae. Donec feugiat ex
                faucibus, euismod erat non, cursus massa. Ut fermentum blandit
                felis.
              </p>
            </div>
            <div className="xl:w-1/2">
              <Image
                className="object-contain"
                width={774}
                height={654}
                alt={"Over 30 years"}
                src={"/assets/imag2.png"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
