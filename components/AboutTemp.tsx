import Image from "next/image";
import Link from "next/link";
// import { PiArrowRightThin } from "react-icons/pi";
import React from "react";
import AboutImg from "./AboutImg";

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
            MORE ABOUT ME
            {/* <PiArrowRightThin /> */}
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
      <AboutImg></AboutImg>
    </div>
  );
};

export default AboutTemp;
