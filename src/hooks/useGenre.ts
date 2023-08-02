import useGeneres from "./useGeneres";

const useGenre = (id?: number) => {
  const { data: genres } = useGeneres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
