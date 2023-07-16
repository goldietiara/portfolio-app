import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectActions from "@/components/ProjectActions";
import ProjectForm from "@/components/ProjectForm";
import { getProjecDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  const result = (await getProjecDetails(id)) as { project?: ProjectInterface };

  const projectDetails = result?.project;

  return (
    <div>
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
                <p className=" text-pink-500">{projectDetails?.category}</p>-
                {session?.user?.email === projectDetails?.createdBy?.email && (
                  <div className="flex justify-end items-center gap-2">
                    <Link
                      href={`/project/${projectDetails?.id}`}
                      className="hover:underline hover:to-blue-500"
                    >
                      Cancel
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <ProjectForm
          type="edit"
          session={session}
          project={result?.project}
        ></ProjectForm>
      </Modal>
    </div>
  );
};

export default EditProject;
