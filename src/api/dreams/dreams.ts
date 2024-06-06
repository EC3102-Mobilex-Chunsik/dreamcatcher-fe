import { Dream, DreamInstance } from "src/types";

import api from "../axios";

interface PostInterpretationRequest {
  dream_description: string;
}

interface PostInterpretationResponse {
  interpretation: DreamInstance;
}

export const postInterpretation = async (
  requestData: PostInterpretationRequest,
) => {
  const response = await api.post<PostInterpretationResponse>("/interpret", {
    ...requestData,
    llm_type: "chatgpt",
  });

  return response.data;
};

interface PostDreamRequest extends Omit<Dream, "id" | "images"> {}

export const postDream = async (requestData: PostDreamRequest) => {
  const response = await api.post<Dream>("/dreams", {
    ...requestData,
    images: [],
  });

  return response.data;
};

type DreamResponse = Omit<Dream, "dateTime"> & { dateTime: string };

type GetDreamsResponse = DreamResponse[];

export const getDreams = async () => {
  const response = await api.get<GetDreamsResponse>("/dreams");

  return response.data;
};

interface GetDreamResponse extends DreamResponse {}

export const getDream = async (id: string) => {
  const response = await api.get<GetDreamResponse>(`/dreams/${id}`);

  return response.data;
};
