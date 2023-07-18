import useGeneres from "../hooks/useGeneres";

const GenreList = () => {
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
