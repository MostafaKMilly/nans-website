import { Page } from ".";

export type Department = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
  description?: string;
};

export type DepartmentsResponse = Page<Department>;
