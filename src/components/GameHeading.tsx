import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGeneres from "../hooks/useGeneres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGeneres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="7xl" fontFamily="helvetica">
      {heading}
    </Heading>
  );
};

export default GameHeading;
