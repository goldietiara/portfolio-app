"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { deleteProject, fetchToken } from "@/lib/actions";

type Props = {
  projectId: string;
};

const ProjectActions = ({ projectId }: Props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const router = useRouter();

  const handleDeleteProject = async () => {
    setIsDeleting(true);

    const { token } = await fetchToken();

    try {
      await deleteProject(projectId, token);

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex gap-3">
      -
      <Link
        href={`/edit-project/${projectId}`}
        className="hover:underline hover:to-blue-500"
      >
        Edit
      </Link>
      -
      <button
        type="button"
        disabled={isDeleting}
        className={` hover:font-medium hover:text-red-600 hover:underline`}
        onClick={handleDeleteProject}
      >
        Delete Project
      </button>
    </div>
  );
};

export default ProjectActions;
