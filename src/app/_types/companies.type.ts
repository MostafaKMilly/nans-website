export type Comapny = {
  id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
};

export type CompaniesResponse = {
  data: {
    totalRecords: number;
    records: Array<Comapny>;
  };
};
