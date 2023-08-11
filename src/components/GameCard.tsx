import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image
          objectFit="cover"
          src={getCroppedImageUrl(game.background_image)}
        />
        <CardBody>
          <HStack marginX={1} justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="1xl">
            <Link to={"/games/" + game.slug}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
