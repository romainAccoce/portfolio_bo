import axios, { AxiosError, AxiosResponse } from "axios";
import { ProjectsApiResponse } from "../types/projects";
import { endpoints } from "./endpoints";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_TOKEN}`,
  },
});

export const getProjects: () => Promise<ProjectsApiResponse | undefined> = () =>
  resolve(
    apiClient.get(
      `${endpoints.projects.projects}${endpoints.projects.populate}`
    )
  );

const isAxiosError = (candidate: unknown): candidate is AxiosError => {
  if (
    candidate &&
    typeof candidate === "object" &&
    "isAxiosError" in candidate
  ) {
    return true;
  }
  return false;
};

const resolve = async <T>(axiosPromise: Promise<AxiosResponse<T, T>>) => {
  try {
    const response = await axiosPromise;
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Axios error:", error.message);
    }
  }
};
