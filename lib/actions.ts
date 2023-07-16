import { ProjectForm } from "@/common.types";
import {
  createProjectMutation,
  createUserMutation,
  deleteProjectMutation,
  getProjectByIdQuery,
  getProjectsOfUserQuery,
  getUserQuery,
  projectsQuery,
  updateProjectMutation,
} from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";

// npx grafbase@0.24 dev
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "henlo";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL || ""
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables: {}) => {
  try {
    //client request, a connection to graphbase database
    return await client.request(query, variables);
  } catch (error) {
    throw error;
  }
};

export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);
  const variables = {
    input: { name, email, avatarUrl },
  };
  return makeGraphQLRequest(createUserMutation, variables);
};

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({
        path: imagePath,
      }),
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const createNewProject = async (
  form: ProjectForm,
  creatorId: string,
  token: string
) => {
  const imageUrl = await uploadImage(form.image);

  if (imageUrl.url) {
    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
      input: {
        ...form,
        image: imageUrl.url,
        createdBy: {
          link: creatorId,
        },
      },
    };

    return makeGraphQLRequest(createProjectMutation, variables);
  }
};

export const fetchAllProjects = async (
  category?: string,
  endcursor?: string
) => {
  client.setHeader("x-api-key", apiKey);

  return makeGraphQLRequest(projectsQuery, { category, endcursor });
};

export const getProjecDetails = async (id: string) => {
  client.setHeader("x-api-key", apiKey);

  return makeGraphQLRequest(getProjectByIdQuery, { id });
};

export const getUserProjects = async (id: string, Last?: number) => {
  client.setHeader("x-api-key", apiKey);

  return makeGraphQLRequest(getProjectsOfUserQuery, { id, Last });
};

export const updateProject = async (
  form: ProjectForm,
  projectId: string,
  token?: string
) => {
  //to check if the URL of the image is base64 string
  //if it is then we need to upload the new image if not then we upload the old image
  function isBase64DataURL(value: string) {
    const base64DataURL = /^data:image\/[a-z]+;base64,/;
    return base64DataURL.test(value);
  }

  let updatedForm = { ...form };

  const isUploadingNewImage = isBase64DataURL(form.image);
  if (isUploadingNewImage) {
    const imageUrl = await uploadImage(form.image);
    if (imageUrl.url) {
      updatedForm = { ...form, image: imageUrl.url };
    }
  }

  const variables = {
    id: projectId,
    input: updatedForm,
  };

  client.setHeader("Authorization", `Bearer ${token}`);

  return makeGraphQLRequest(updateProjectMutation, variables);
};

export const deleteProject = (id: string, token?: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);

  return makeGraphQLRequest(deleteProjectMutation, { id });
};
