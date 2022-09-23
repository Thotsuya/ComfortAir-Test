import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/all";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileMenu() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:hidden flex flex-col align-items-center p-4 w-full">
      <button
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        className="hover:bg-gray-200 p-2 rounded-full ml-auto transition ease-in-out duration-200 hover:text-primary-red"
      >
        {navOpen ? (
          <GiHamburgerMenu
            className={`text-2xl ${navOpen ? "rotate-180" : ""}`}
          />
        ) : (
          <FaTimes className="text-2xl" />
        )}
      </button>
      {navOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-content-center items-center"
        >
          <ul className="flex flex-col gap-5">
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">HOME</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">ABOUT</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">AIR CONDITIONING</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">HEATING</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">INDOOR AIR QUALITY</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">TESTIMONIALS</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">DEALS</a>
            </li>
            <li className="text-center font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
