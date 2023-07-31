import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import consumerClient from "../services/consumer-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      consumerClient
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGeneres;
