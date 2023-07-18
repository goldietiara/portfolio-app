import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";

const NavBar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flex m-7">
      <div className=" w-fit pr-10">
        <Link href={"/"}>
          <Image
            src="/chiyo-chichi-fliped.PNG"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center justify-start border-1 border-black w-full">
        <ul className="flex h-full w-full">
          {NavLinks.map((v, i, a) => {
            return (
              <Link
                href={v.href}
                key={v.key}
                className=" w-full h-full border-r-1 border-black flex justify-evenly items-center text-center hover:underline"
              >
                {v.text}
              </Link>
            );
          })}
        </ul>
        <div className="  w-[30%] h-full flex justify-center items-center px-5 gap-10 text-sm font-medium ">
          {session?.user ? (
            <>
              <Link
                href="/create-project"
                className="hover:underline font-light text-base"
              >
                SHARE WORK
              </Link>
              <ProfileMenu session={session} />
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
