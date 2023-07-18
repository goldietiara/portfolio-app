import Image from "next/image";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import ProjectCard from "@/components/ProjectCard";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import Link from "next/link";
import SectionTemp from "@/components/SectionTemp";
import AboutTemp from "@/components/AboutTemp";

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

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
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
      <section className="flex w-full h-fit px-16 pb-40 pt-0 border-b-1 border-black lg:text-8xl sm:text-lg font-medium uppercase ">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className=" w-full h-full bg-slate-300"></div>
      </section>

      <SectionTemp title="ABOUT ME">
        <AboutTemp />
      </SectionTemp>

      <SectionTemp title="work">
        <div className=" border-b-1 border-black">
          <Categories />
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
      </SectionTemp>

      <SectionTemp title="contacts">
        <div className="p-7">please contact wawa 081908031969</div>
      </SectionTemp>

      {/* <LoadMore
        startCursor={data?.projectSearch?.pageInfo?.startCursor}
        endCursor={data?.projectSearch?.pageInfo?.endCursor}
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.projectSearch?.pageInfo?.hasNextPage}
      /> */}
    </section>
  );
};

export default Home;
