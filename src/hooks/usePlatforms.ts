import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import platforms from "../data/platforms";
import APICLient from "../services/consumer-client";

const apiClient = new APICLient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
