import styles from "./Footer.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaRss,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import Image from "next/image";
import { DiBingSmall } from "react-icons/di";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={`${styles.footerContainer} gap-36`}>
      <div className={`flex flex-col justify-content-center xl:mt-0 mt-24 `}>
        <div>
          <h3 className="text-3xl">Communities we serve</h3>
        </div>
        <div className={`flex flex-row gap-12 mt-4 ${styles.listText}`}>
          <div>
            <ul className="list-disc text-left">
              <li className="mt-3">Palm Springs</li>
              <li className="mt-3">Bermuda Dunes</li>
              <li className="mt-3">Rancho Mirage</li>
              <li className="mt-3">Cathedral City</li>
              <li className="mt-3">Desert Hot Springs</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc text-left">
              <li className="mt-3">Palm Desert</li>
              <li className="mt-3">La Quinta</li>
              <li className="mt-3">Thousand Palms</li>
              <li className="mt-3">Indian Wells</li>
              <li className="mt-3">Indio</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-row gap-2">
          <button className="bg-[#002C63] p-3">
            <FaFacebookF className="text-lg text-white" />
          </button>
          <button className="bg-[#002C63] p-3">
            <FaGooglePlusG className="text-lg text-white" />
          </button>
          <button className="bg-[#002C63] p-3">
            <FaYoutube className="text-lg text-white" />
          </button>
          <button className="bg-[#002C63] p-3">
            <FaYelp className="text-lg text-white" />
          </button>
          <button className="bg-[#002C63] p-3">
            <DiBingSmall className="text-lg text-white" />
          </button>
          <button className="bg-[#002C63] p-3">
            <FaRss className="text-lg text-white" />
          </button>
        </div>
      </div>
      <div className={`flex flex-col justify-content-center`}>
        <div>
          <h3 className="text-3xl mt-10">Quick Menu</h3>
        </div>
        <div className={`flex flex-row gap-12 mt-4 ${styles.listText}`}>
          <div>
            <ul className="list-disc text-left">
              <li className="mt-3">Home</li>
              <li className="mt-3">About Us</li>
              <li className="mt-3">Air Conditioning</li>
              <li className="mt-3">Heating</li>
              <li className="mt-3">Indoor Air Quality</li>
              <li className="mt-3">Testimonials</li>
              <li className="mt-3">Deals</li>
              <li className="mt-3">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#002c63] h-full p-24 flex flex-col justify-content-center items-center gap-1">
        <Image
          src="/assets/logo_footer_white.png"
          className="object-contain"
          width={300}
          height={200}
          alt={"logo"}
        />
        <h3 className={`${styles.footerText} text-xl`}>
          <span>72248</span> Northshore Street
        </h3>
        <h3 className={`${styles.footerText} text-md`}>
          Thousand Palms, CA 92276
        </h3>
        <hr className="text-gray-200 mt-2 h-4" />
        <h3 className={`${styles.footerText} text-md font-bold`}>
          760<span>-4</span>88<span>-6444</span>
        </h3>
        <button className="bg-primary-red py-4 mt-8 px-12 xl:w-auto w-full hover:bg-black transition ease-in-out duration-200 flex rounded items-center mt-12">
          <span className="mx-auto text-white text-xl text-center">
            Schedule Service
          </span>
        </button>
      </div>
    </div>
  );
}
