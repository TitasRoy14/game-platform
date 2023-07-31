import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import consumerClient from "../services/consumer-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      consumerClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
