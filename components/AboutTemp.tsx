import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import React from "react";

const AboutTemp = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full">
      <div className="m-8 p-8 bg-Grass flex flex-col justify-between">
        <div>
          <p className=" text-6xl font-medium leading-tight">
            Lorem ipsum dolor sit amet.
          </p>
          <p className=" text-4xl font-thin leading-tight pt-10">
            Ipsam rerum dolores, iure hic, exercitationem vitae, blanditiis
            voluptatibus provident commodi labore laborum architecto cumque!
          </p>
        </div>
        <Link href={`/about`}>
          <div className="w-[51%] h-fit hover:w-[55%] pl-1 flex justify-between items-center border-b-1 border-l-1 border-black text-3xl text-left font-thin leading-tight cursor-pointer transition-all ease-in-out duration-300">
            MORE ABOUT ME <PiArrowRightThin />
          </div>
        </Link>
      </div>
      {/* <div className="p-10">
            <div className="h-32 w-32 relative cursor-pointer">
              <div className="absolute inset-0 bg-black opacity-80"></div>
              <div className="absolute inset-0 transform hover:skew-y-12 transition duration-200">
                <div className="h-full w-full bg-pink-100 border-black "></div>
              </div>
            </div>
          </div> */}
      <div className=" h-full w-full grid grid-cols-2 p-8">
        <div className="relative cursor-pointer">
          <div className="absolute inset-0 opacity-80 border-b-1 border-black pr-8 pb-8"></div>
          <div className="absolute inset-0 transform hover:skew-x-6 hover:rotate-6 transition-all duration-300">
            <Image
              src={"/about-me1.jpg"}
              width={1080}
              height={1080}
              alt="about-me"
              className=" pr-8 pb-8"
            ></Image>
          </div>
        </div>
        <Image
          src={"/about-me2.jpg"}
          width={1080}
          height={1080}
          alt="about-me"
          className=" border-l-1 border-b-1 border-black pl-8 pb-8"
        ></Image>
        <Image
          src={"/about-me3.jpg"}
          width={1080}
          height={1080}
          alt="about-me"
          className=" pr-8 pt-8"
        ></Image>
        <Image
          src={"/about-me4.jpg"}
          width={1080}
          height={1080}
          alt="about-me"
          className=" border-l-1  border-black pl-8 pt-8"
        ></Image>
      </div>
    </div>
  );
};

export default AboutTemp;
