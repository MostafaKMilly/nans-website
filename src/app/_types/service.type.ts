import { Page } from ".";

export type Service = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type ServicesResponse = Page<Service>;
