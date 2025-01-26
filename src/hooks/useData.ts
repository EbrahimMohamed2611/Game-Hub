import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchDateResponse<T> {
  counter: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const controller = new AbortController();
  const [data, setDate] = useState<T[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);
  useEffect(
    () => {
      apiClient
        .get<FetchDateResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => setDate(response.data.results))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
