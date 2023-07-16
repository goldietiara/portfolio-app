import Image from "next/image";
import { fetchAllProjects } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import ProjectCard from "@/components/ProjectCard";
import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousePage: boolean;
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
      <section className="flexStart flex-col paddings">
        <p className=" text-center no-result-text">
          No project Found, go create some first!
        </p>
      </section>
    );
  }

  const pagination = data?.projectSearch?.pageInfo;

  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories></Categories>
      <section className="projects-grid">
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
      </section>
      <LoadMore
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousePage={pagination.hasPreviousePage}
        hasNextPage={pagination.hasNextPage}
      />
    </section>
  );
};

export default Home;
