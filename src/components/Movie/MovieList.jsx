import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieComp from "./MovieComp";
import loading from "../../assets/loadingImg.gif";
import SaveMovie from "../SaveMovie";

const MovieList = ({ url }) => {
  const [data, isLoading, errorMens] = useFetch(url);

  return (
    <div className="movies-list">
      {isLoading && <img src={loading} />}
      {data &&
        data.length > 0 &&
        data.map((movie, index) => (
          <div key={index} className="movie-card">
            <Link to={`/moviedetails/${movie.id}`}>
              <MovieComp
                img={movie.posterUrl}
                genre={movie.genres}
                name={movie.title}
                movieId={movie.id}
              />
            </Link>
            <SaveMovie movieId={movie.id} />
          </div>
        ))}
      {data && data.length === 0 && <p>Sem filmes</p>}
      {errorMens && <p>{errorMens}</p>}
    </div>
  );
};

export default MovieList;
