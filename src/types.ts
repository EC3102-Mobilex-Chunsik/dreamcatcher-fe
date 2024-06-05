export interface Dream {
  id: number;
  dateTime: Date;
  title: string;
  inputPrompt: string;
  context: string;
  factors: Factor[];
}

export interface Factor {
  tagName: string;
  description: string;
}
