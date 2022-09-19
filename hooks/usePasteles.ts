import useSWR, { SWRConfiguration } from "swr";
import { IPastel } from "@/interfaces/pastel";

export const usePasteles = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IPastel[]>(`/api${url}`, config);

  return {
    pasteles: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
