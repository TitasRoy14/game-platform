import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/consumer-client";

const useScreenshot = (gameId: number) => {
  const apiCLient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["Screenshot", gameId],
    queryFn: apiCLient.getAll,
  });
};

export default useScreenshot;
