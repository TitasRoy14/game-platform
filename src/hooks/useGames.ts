import useData from "./useData";
import { Genre } from "./useGeneres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenres: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenres?.id } }, [
    selectedGenres?.id,
  ]);

export default useGames;
