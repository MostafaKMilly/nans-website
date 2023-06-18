export type News = {
  id: string;
  title: string;
  image: string;
  createdAt: string;
};

export type NewssResponse = {
  data: {
    totalRecords: number;
    records: Array<News>;
  };
};
