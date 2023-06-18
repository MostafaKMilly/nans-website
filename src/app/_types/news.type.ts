import { Page } from ".";

export type News = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
  description?: string;
};

export type NewssResponse = Page<News>;
