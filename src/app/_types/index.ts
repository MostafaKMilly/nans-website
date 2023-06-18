export type Page<T extends Record<string, unknown>> = {
  data: {
    totalRecords: number;
    records: Array<T>;
  };
};
