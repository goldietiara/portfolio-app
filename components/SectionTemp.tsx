"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const SectionTemp = ({ children, title }: Props) => {
  return (
    <section className="flex flex-col w-full h-full border-b-1 border-black">
      <h1 className="p-7 w-full h-full font-medium text-2xl border-b-1 border-black uppercase">
        {title}
      </h1>
      <div className="w-full h-full">{children}</div>
    </section>
  );
};

export default SectionTemp;
