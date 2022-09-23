import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Perks() {
  const image = useRef();
  const inView = useInView(image, { once: true });

  return (
    <div
      ref={image}
      className="flex flex-col justify-content-center items-center w-full px-24 pt-24 mt-12"
    >
      <Image
        style={{
          filter: inView ? "blur(0px)" : "blur(20px)",
          transition: "filter 1s ease-in-out",
        }}
        src="/assets/imag4-1.png"
        alt="Picture of the author"
        width={1092}
        height={922}
      />
    </div>
  );
}
