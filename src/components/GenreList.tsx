import React from "react";
import useGeneres from "../hooks/useGeneres";

const GenreList = () => {
  const { genre } = useGeneres();
  return (
    <ul>
      {genre.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
