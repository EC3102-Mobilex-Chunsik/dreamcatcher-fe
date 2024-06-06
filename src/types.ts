export interface Dream {
  id: number;
  dateTime: Date;
  title: string;
  inputPrompt: string;
  context: string;
  factors: Factor[];
  images: string[];
}

export interface Factor {
  tagName: string;
  description: string;
}

export interface DreamInstance
  extends Omit<Dream, "id" | "dateTime" | "inputPrompt" | "images"> {}
