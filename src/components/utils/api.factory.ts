import axios, { AxiosRequestConfig } from "axios";

type ApiGetOptions = {
  params?: Record<string, string | number | boolean>;
};

const urlGenerator = (endpoint: string) => {
  return `${process.env.NEXT_PUBLIC_BACKEND_HOST}${endpoint}`;
};

export default function apiFactory(endpoint: string) {
  return {
    get<T>(options: ApiGetOptions = {}): Promise<T> {
      const url = urlGenerator(endpoint);
      return axios.get(url, options);
    },

    async post<P, R>(payload: P): Promise<R> {
      const url = urlGenerator(endpoint);
      const { data } = await axios.post(url, payload);
      return data;
    },
  };
}
