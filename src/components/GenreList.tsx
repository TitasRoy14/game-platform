import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";
import GenreHeading from "./GenreHeading";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGeneres();

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
              onClick={() => onSelectGenre(gen)}
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
