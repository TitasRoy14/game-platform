import { Heading } from "@chakra-ui/react";

const GenreHeading = () => {
  const heading = "Genre";
  return (
    <Heading as="h4" fontFamily="helvetica" marginBottom={2}>
      {heading}
    </Heading>
  );
};

export default GenreHeading;
