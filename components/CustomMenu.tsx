"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

const CustomMenu = ({ title, state, filters, setState }: Props) => (
  <div className="flex items-center justify-start flex-col w-full gap-7 relative">
    <label htmlFor={title} className="w-full text-gray-100">
      {title}
    </label>
    <Menu as="div" className="self-start relative w-full">
      <div>
        <Menu.Button className="flex justify-between items-center custom_menu-btn ">
          {state || "Category"}
          <Image src="/arrow-down.svg" width={10} height={5} alt="arrow down" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex items-center justify-start custom_menu-items">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="custom_menu-item w-full"
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);

export default CustomMenu;
