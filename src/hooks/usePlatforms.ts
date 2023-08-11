import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import platforms from "../data/platforms";
import APICLient from "../services/consumer-client";
import { Platform } from "../entities/Platform";

const apiClient = new APICLient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: platforms,
  });

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
