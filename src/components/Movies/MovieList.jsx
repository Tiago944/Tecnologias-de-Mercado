import useFetch from "../../hooks/useFetch";
import MovieComp from "./MovieComp";

const MovieList = ({ url }) => {
  const [data, isLoading, errorMens] = useFetch(url);

  return (
    <div className="movies-list">
      {isLoading && <p>Loading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data ? (
        data.map((movie) => (
          <>
            <MovieComp
              img={movie.posterUrl}
              genre={movie.genres}
              name={movie.title}
            />
          </>
        ))
      ) : (
        <p>Sem filmes</p>
      )}
    </div>
  );
};

export default MovieList;
