import Image from "next/image";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import ProjectCard from "@/components/ProjectCard";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import { PiArrowRightThin } from "react-icons/pi";
import Link from "next/link";
import Temp from "@/components/SectionTemp";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

type SearchParams = {
  category?: string;
  endcursor?: string;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

type Props = {
  searchParams: SearchParams;
};

const Work = async ({ searchParams: { category, endcursor } }: Props) => {
  const data = (await fetchAllProjects(category, endcursor)) as ProjectSearch;

  const projectToDisplay = data?.projectSearch?.edges || [];

  if (projectToDisplay.length === 0) {
    return (
      <section className="flex items-center justify-start flex-col lg:px-20 py-6 px-5">
        <p className=" text-center w-full my-10 px-2">
          No project Found, go create some first!
        </p>
      </section>
    );
  }

  return (
    <section className="w-full h-full flex items-center justify-start flex-col lg:px-7 my-6 px-5 pb-16 relative">
      <div className="fixed bottom-0 left-7 h-[74.4%] border-l-1 border-black"></div>
      <div className="fixed bottom-0 right-7 h-[80.5%] border-r-1 border-black"></div>
      {/* <section className=" overflow-hidden h-[550px] w-full relative lg:text-8xl sm:text-lg font-medium uppercase">
        <video autoPlay loop muted className="px-7 py-3">
          <source
            src={
              "https://cdn.dribbble.com/uploads/39489/original/485abd9d034966142a88773f079024ee.mp4?1657907917"
            }
            type="video/mp4"
          />
          <div className="absolute px-16 pb-40 pt-0 top-0">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <div className=" w-full h-full bg-slate-300"></div>
          </div>
        </video>
      </section> */}

      {/* ////////////// */}
      <section className="flex w-full h-full overflow-hidden relative border-b-1 border-black pb-7">
        <div className=" w-full h-[500px] overflow-hidden px-7 py-3">
          {/* <div className="w-[96%] h-[500px] bg-white/80 absolute"></div> */}
          <video autoPlay loop muted className=" opacity-50">
            <source
              src={
                "https://cdn.dribbble.com/uploads/39489/original/485abd9d034966142a88773f079024ee.mp4?1657907917"
              }
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute px-16 pt-10 lg:text-8xl sm:text-lg font-medium uppercase">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className=" w-full h-full bg-slate-300"></div>
        </div>
      </section>

      <section className="flex flex-col w-full h-full border-b-1 border-black">
        <h1 className="p-7 w-full h-full font-medium text-2xl border-b-1 border-black">
          WORKS
        </h1>
        <div className=" border-b-1 border-black">
          <Categories></Categories>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full p-7">
          {projectToDisplay.map(({ node }: { node: ProjectInterface }) => {
            return (
              <ProjectCard
                id={node?.id}
                key={node?.id}
                image={node?.image}
                title={node?.title}
                userId={node?.createdBy?.id}
                name={node?.createdBy?.name}
                avatarUrl={node?.createdBy?.avatarUrl}
              />
            );
          })}
        </div>
        <LoadMore
          startCursor={data?.projectSearch?.pageInfo?.startCursor}
          endCursor={data?.projectSearch?.pageInfo?.endCursor}
          hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
          hasNextPage={data?.projectSearch?.pageInfo?.hasNextPage}
        />
      </section>
    </section>
  );
};

export default Work;
