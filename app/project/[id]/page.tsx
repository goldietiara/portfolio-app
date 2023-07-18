import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectActions from "@/components/ProjectActions";
import ProjectForm from "@/components/ProjectForm";
import RelatedProjects from "@/components/RelatedProjects";
import { getProjecDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const project = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = (await getProjecDetails(id)) as { project?: ProjectInterface };

  if (!result?.project) {
    <p>Failed to fetch project information</p>;
  }
  const projectDetails = result?.project;

  return (
    <section>
      <Modal>
        <section className=" fixed self-center pl-5 py-5 w-[75%] flex justify-between">
          <div className=" flex gap-5">
            <Image
              src={`${projectDetails?.createdBy?.avatarUrl}`}
              height={40}
              width={40}
              alt="avatar-url"
              className=" rounded-full"
            ></Image>
            <div className="flex flex-col ">
              <h1 className=" font-medium">{projectDetails?.title}</h1>
              <div className="flex gap-2 font-light text-xs">
                <h1>{projectDetails?.createdBy?.name}</h1>-
                <p className=" text-pink-500">{projectDetails?.category}</p>
                {session?.user?.email === projectDetails?.createdBy?.email && (
                  <div className="flex justify-end items-center gap-2">
                    <ProjectActions projectId={projectDetails?.id} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className=" flex flex-col gap-5 items-center w-full p-10">
          <Image
            src={`${projectDetails?.image}`}
            height={100}
            width={1080}
            alt="project-thumbnail"
            className=" rounded-xl"
          ></Image>
          <h1 className=" text-xl font-medium text-center">
            {projectDetails?.title}
          </h1>
          <p className=" text-sm font-light leading-loose text-justify">
            {projectDetails?.description}
          </p>
          <div className=" grid grid-cols-2 gap-2 content-center ">
            <Link href={`${projectDetails?.githubUrl}`}>
              <p className=" text-sm font-light leading-loose text-justify hover:underline text-pink-500 hover:text-blue-500">
                🌐 GitHub
              </p>
            </Link>
            <Link href={`${projectDetails?.liveSiteUrl}`}>
              <p className=" text-sm font-light leading-loose text-justify hover:underline text-pink-500 hover:text-blue-500">
                🚀 Live Site
              </p>
            </Link>
          </div>
        </div>
        <section className="w-[90%]">
          <div className="flex justify-center items-center w-full gap-8 mt-28">
            <span className="w-full h-0.5 bg-light-white-200" />
            <Link
              href={`/${projectDetails?.id}`}
              className="min-w-[82px] h-[82px]"
            >
              <Image
                src={`${projectDetails?.createdBy?.avatarUrl}`}
                className="rounded-full"
                width={82}
                height={82}
                alt="profile image"
              />
            </Link>
            <span className="w-full h-0.5 bg-light-white-200" />
          </div>
          <RelatedProjects
            userId={`${projectDetails?.createdBy?.id}`}
            projectId={`${projectDetails?.id}`}
          />
        </section>
      </Modal>
    </section>
  );
};

export default project;
