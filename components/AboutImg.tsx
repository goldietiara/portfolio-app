import Image from "next/image";
import { AboutImgs } from "@/constants";
import React from "react";

const AboutImg = () => {
  return (
    <div className="relative flex">
      <div className=" h-full w-full grid grid-cols-2 p-8 absolute">
        <div className=" border-b-1 border-r-1"></div>
        <div className=" border-b-1"></div>
        <div className=" border-r-1"></div>
        <div className=" "></div>
      </div>
      <div className=" h-full w-full grid grid-cols-2 p-2 place-items-center">
        {/* belum responsive */}
        {AboutImgs.map((v, i, a) => {
          return (
            <div className=" gird w-full lg:h-[350px] place-items-center relative ">
              <div className=" w-[85%] h-[85%] absolute border-1 top-6 right-7 bg-black"></div>
              <Image
                src={v}
                key={i}
                alt="about-imgs"
                width={1080}
                height={1080}
                className=" w-[85%] h-[85%] absolute top-6 right-7 hover:top-2 hover:right-3 cursor-pointer transition-all ease-in-out duration-300"
              ></Image>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutImg;
