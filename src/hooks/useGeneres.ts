import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/consumer-client";

const apiclient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGeneres;
