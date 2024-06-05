import { Dream } from "src/types";

import api from "../axios";

interface PostInterpretationRequest {
  dream_description: string;
}

interface PostInterpretationResponse {
  interpretation: Omit<Dream, "id" | "dateTime" | "inputPrompt">;
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
