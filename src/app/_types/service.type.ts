export type Service = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type ServicesResponse = {
  data: {
    totalRecords: number;
    records: Array<Service>;
  };
};
