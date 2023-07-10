import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};

  return (
    <nav className="flex justify-between items-center navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}>
          <Image
            src="/chiyo-chichi-fliped.PNG"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7 ">
          {NavLinks.map((v, i, a) => {
            return (
              <Link
                href={v.href}
                key={v.key}
                className="hover:text-pink-400 hover:underline"
              >
                {v.text}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flexCenter gap-4 text-small ">
        {session ? (
          <>
            userPhoro
            <Link
              href="/create-project"
              className="hover:text-pink-400 hover:underline"
            >
              Share Work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
