import { ApiResponse } from "./response";

export interface ProviderMetadataType {
  public_id: string;
  resource_type: string;
}

export interface ImageType {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadataType;
}

export interface ImageFormatsType {
  small: ImageType;
  medium: ImageType;
  thumbnail: ImageType;
}

export interface ImageAttributesType {
  name: string;
  alternativeText: string | null;
  caption: null;
  width: number;
  height: number;
  formats: ImageFormatsType;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadataType;
  createdAt: string;
  updatedAt: string;
}

export interface ImageDataType {
  id: number;
  attributes: ImageAttributesType;
}

export interface ImageType {
  data: ImageDataType;
}

export interface TechsType {
  front: string[];
}

export interface ProjectAttributesType {
  name: string;
  description: string;
  githubLink: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  techs: TechsType;
  image: ImageType;
}

export interface ProjectType {
  id: number;
  attributes: ProjectAttributesType;
}

export interface ProjectsApiResponse extends ApiResponse {
  data: ProjectType[];
}
