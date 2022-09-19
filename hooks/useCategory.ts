import useSWR, { SWRConfiguration } from "swr";
import { ICategoriaAll } from "@/interfaces/categoria";

export const useCategory = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<ICategoriaAll>(`/api${url}`, config);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};
