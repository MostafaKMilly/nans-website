import { Page } from ".";

export type Company = {
  id: string;
  name: string;
  description?: string;
  image: string;
  applications?: Array<{
    name: string;
    image: string;
  }>;
  createdAt: string;
};

export type CompaniesResponse = Page<Company>;
