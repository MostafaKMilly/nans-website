import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/website",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const language = localStorage.getItem("language") || "en";

  const auth = token ? `Bearer ${token}` : "";
  config.headers = {
    ...config.headers,
    authorization: auth,
    language,
  } as Record<string, any>;

  config.params = {
    ...config.params,
    total: true,
  };

  return config;
});

// response interceptor to catch all errors
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function ({ response }: AxiosError<Record<string, any>>) {
    enqueueSnackbar(response?.data?.error?.message, {
      variant: "error",
      anchorOrigin: {
        horizontal: "center",
        vertical: "top",
      },
    });
  }
);

const get = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.get(url, config).then((res) => res.data);
};

const post = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.post(url, data, config).then((res) => res.data);
};

const put = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.put(url, data, config).then((res) => res.data);
};

const patch = <T = AxiosResponse["data"]>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.patch(url, data, config).then((res) => res.data);
};

const remove = <T = AxiosResponse["data"]>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return instance.delete(url, config);
};

const API = {
  get,
  post,
  put,
  remove,
  patch,
};

export default API;
