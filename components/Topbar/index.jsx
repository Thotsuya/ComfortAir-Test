import Image from "next/image";
import styles from "./Topbar.module.scss";
import MobileMenu from "../MobileMenu";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaRss,
  FaYelp,
  FaYoutube,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { DiBingSmall } from "react-icons/di";

export default function Index() {
  return (
    <header
      className={`${styles.header} flex flex-col justify-content-center w-full`}
    >
      <MobileMenu />
      <div className="hidden px-4 md:py-4 xl:px-52 xl:flex flex-row">
        <Image
          className="object-contain"
          src={"/assets/comfort-air-logo.png"}
          alt="Comfort Air Logo"
          width={230}
          height={100}
        />
        <div className="flex flex-col justify-content-center w-full h-full">
          <div className="flex flex-row  ml-6 border-b border-b-[1.8px] ">
            <div className="border-r border-r-[1.8px] px-12 py-6 flex flex-row gap-3 justify-content-center items-center">
              <FaFacebookF
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"Facebook"}
              />
              <FaYoutube
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"Youtube"}
              />
              <FaGooglePlusG
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"Google Plus"}
              />
              <FaYelp
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"Yelp"}
              />
              <DiBingSmall
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"Bing"}
              />
              <FaRss
                className="text-gray-400 cursor-pointer hover:text-[#E61E37] transition duration-300 ease-in-out"
                title={"RSS"}
              />
            </div>
            <div className="py-4 px-14 flex justify-content-center items-center border-r border-r-[1.8px]">
              <MdPhoneInTalk className="text-primary-red text-2xl" />
              <span className={`${styles.bold} text-primary-red`}>
                Call us now
              </span>
              <span
                className={`${styles.defaultFont} text-primary-blue font-bold ml-1`}
              >
                760-488-644
              </span>
            </div>
            <div className="py-4 px-14 flex justify-content-center items-center border-r border-r-[1.8px]">
              <Image
                className="object-contain"
                src={"/assets/icon_financial.png"}
                alt="Comfort Air Logo"
                width={29}
                height={29}
              />
              <span className={`${styles.bold} text-primary-red ml-1`}>
                Finance Available
              </span>
            </div>
            <div>
              <button
                className="font-bold bg-primary-red text-white h-full px-20 flex flex-row justify-content-center items-center hover:bg-black
                transition duration-300 ease-in-out"
              >
                Free Consultation
                <AiOutlineArrowRight className="text-white text-2xl ml-2" />
              </button>
            </div>
          </div>
          <div className="py-4 px-14 ml-6 gap-4">
            <ul className="flex flex-row gap-10">
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">HOME</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">ABOUT</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">AIR CONDITIONING</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">HEATING</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">INDOOR AIR QUALITY</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">TESTIMONIALS</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">DEALS</a>
              </li>
              <li className="font-bold hover:text-primary-red transition duration-300 ease-in-out text-gray-600">
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:py-4  xl:px-52 bg-gray-200 flex flex-col xl:flex-row">
        <div className="text-primary-blue font-bold mx-auto xl:mx-0 mt-4 xl:mt-0 flex flex-row gap-2 xl:gap-0">
          Emergency Service
          <h3 className="text-primary-red font-bold xl:ml-2 mx-auto xl:mx-0">
            Available
          </h3>
          <h3
            className={`${styles.defaultFont} text-primary-blue font-bold xl:ml-2 mx-auto xl:mx-0`}
          >
            24/7
          </h3>
        </div>

        {/*<div className="ml-auto flex xl:flex-row flex-col w-full xl:w-auto justify-content-center items-center">*/}
        {/*  <span className="text-primary-red font-bold flex flex-row ">*/}
        {/*    COVID<span className={`${styles.defaultFont}`}>-</span>19*/}
        {/*    <h3 className="text-primary-blue ml-2 font-bold">Update</h3>*/}
        {/*  </span>*/}

        {/*  <div className="flex xl:flex-row flex-col">*/}
        {/*    <div className="flex flex-row">*/}
        {/*      <h3 className="text-gray-600 ">*/}
        {/*        : Click here to read our office updates in response to COVID*/}
        {/*        <span className={`${styles.defaultFont}`}>-</span>19*/}
        {/*      </h3>*/}
        {/*    </div>*/}
        {/*    <div className="flex flex-row justify-content-center items-center">*/}
        {/*      <a className="xl:ml-2 mx-auto underline flex flex-row" href="">*/}
        {/*        Read More*/}
        {/*        <AiOutlineArrowRight className="mt-1 ml-2" />*/}
        {/*      </a>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </header>
  );
}
