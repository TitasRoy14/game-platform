import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreHeading from "./GenreHeading";

const GenreList = () => {
  const { data, isLoading, error } = useGeneres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <GenreHeading />
      {data?.results.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={getCroppedImageUrl(gen.image_background)}
            />
            <Button
              fontWeight={gen.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => onSelectGenre(gen.id)}
              fontSize="lg"
              variant="link"
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
