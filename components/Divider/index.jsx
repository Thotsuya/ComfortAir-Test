import styles from "./Divider.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";

export default function Divider() {
  return (
    <>
      <div className="w-full flex flex-row">
        <div className="w-1/2 py-16 px-14 flex flex-row items-center justify-content-center bg-primary-red">
          <span
            className={`text-center flex flex-row mx-auto  text-2xl text-white ${styles.heading} heading transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
          >
            Get the best heating services
            <BsArrowRightCircle className="ml-2 text-3xl text-white" />
          </span>
        </div>
        <div className="w-1/2 py-16 px-14 flex flex-row items-center justify-content-center bg-primary-blue">
          <span
            className={`text-center flex flex-row mx-auto  text-2xl text-white transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer ${styles.heading}`}
          >
            Get the best Air conditioning services
            <BsArrowRightCircle className="ml-2 text-3xl text-white" />
          </span>
        </div>
        <div className="hidden 2xl:block 2xl:absolute left-[48rem] top-[148rem]">
          <Image
            className="object-contain"
            src={"/assets/lennoxac.png"}
            alt="Lennox AC Logo"
            width={420}
            height={420}
          />
        </div>
      </div>
    </>
  );
}
