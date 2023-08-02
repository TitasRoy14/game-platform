import { useQuery } from "@tanstack/react-query";
import ms from "ms";
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
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGeneres;
