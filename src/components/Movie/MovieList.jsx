import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieComp from "./MovieComp";

const MovieList = ({ url }) => {
  const [data, isLoading, errorMens] = useFetch(url);
  /*  const [wishList, setWishList] */

  return (
    <div className="movies-list">
      {isLoading && <p>Loading</p>}
      {data &&
        data.length > 0 &&
        data.map((movie, index) => (
          <div key={index}>
            <Link to={`/moviedetails/${movie.id}`}>
              <MovieComp
                img={movie.posterUrl}
                genre={movie.genres}
                name={movie.title}
                movieId={movie.id}
              />
            </Link>
          </div>
        ))}
      {data && data.length === 0 && <p>Sem filmes</p>}
      {errorMens && <p>{errorMens}</p>}
    </div>
  );
};

export default MovieList;
