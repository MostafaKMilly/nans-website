import { Page } from ".";

export type News = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type NewssResponse = Page<News>;
