"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useRef, ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className="modal flex justify-center items-center"
      onClick={handleClick}
    >
      <div
        ref={wrapper}
        className=" bg-white relative flex justify-start items-center flex-col h-[90%] w-[80%] rounded-xl pb-20 overflow-auto"
      >
        <div className=" bg-white sticky top-0 w-full flex justify-center text-center rounded-xl ">
          <div className=" relative w-full h-20 border-b-2 border-neutral-100 flex justify-end">
            <button
              type="button"
              onClick={onDismiss}
              className="absolute top-2 right-1 rounded-full bg-zinc-400 p-2 hover:bg-pink-500 hover:underline"
            >
              <Image
                src={"/close.svg"}
                width={10}
                height={10}
                alt="close"
              ></Image>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
