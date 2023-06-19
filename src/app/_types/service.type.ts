import { Page } from ".";

export type Service = {
  id: string;
  serviceForm?: {
    activated: boolean;
    stages: Array<{}>;
    form: {
      [x: string]: {
        type: string;
        title: string;
        placeholder?: string;
        validation?: {
          required?: boolean;
          minLength?: number;
          maxLength?: number;
        };
        widget?: string;
        items?: {
          type: string;
          enum: Array<string>;
        };
      };
    };
  };
  title: string;
  description?: string;
  image: string;
  createdAt: string;
  department?: {
    id: string;
    title: string;
    description: string;
  };
};

export type ServicesResponse = Page<Service>;
