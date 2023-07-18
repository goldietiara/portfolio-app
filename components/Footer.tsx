import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className=" flex flex-col gap-2 font-normal">
      {links.map((v, i, a) => {
        return (
          <Link
            href={v}
            key={v}
            className=" hover:text-pink-400 hover:underline"
          >
            {v}
          </Link>
        );
      })}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex items-center justify-start footer">
      <div className="flex flex-col w-full ">
        {/* <div className="flex flex-wrap justify-between gap-12">
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex flex-col">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[4].title}
            links={footerLinks[4].links}
          />
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
        </div> */}
      </div>
      <div className="flex justify-between items-center footer_copyright">
        <p>2021 devbyodi. All rights reserved.</p>
        <p className="text-gray">
          <span className="text-black font-semibold">301 </span>
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
