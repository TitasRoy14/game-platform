import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/consumer-client";
import Genre from "../entities/Genre";

const apiclient = new APIClient<Genre>("/genres");

const useGeneres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiclient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres,
  });

export default useGeneres;
