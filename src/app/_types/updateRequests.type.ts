import { Page } from ".";

export type UpdateRequest = {
  id: string;
  email: string;
  name: string;
  phoneNumber: string;
  image: string;
  createdAt: string;
  isApproved?: boolean;
  note?: string;
};

export type UpdateRequestResponse = Page<UpdateRequest>;
