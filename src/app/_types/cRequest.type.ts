import { Page } from ".";

export type ClientRequest = {
  id: string;
  status: string;
  service: {
    id: string;
    title: string;
    image: string;
  };
  department: {
    id: string;
    title: string;
  };
  createdAt: string;
};

export type ClientRequestResponse = Page<ClientRequest>;
