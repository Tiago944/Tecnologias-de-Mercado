import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MovieComp from "../Movie/MovieComp";
import SaveMovie from "../SaveMovie";

const SaveMovieFetch = ({ id }) => {
  const [data, isLoading, errorMens] = useFetch(
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
  );

  return (
    <>
      {isLoading && <p>isLoading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data && (
        <div className="movie-card">
          <Link to={`/moviedetails/${data.id}`}>
            <MovieComp
              img={data.posterUrl}
              genre={data.genres}
              name={data.title}
              movieId={data.id}
            />
          </Link>
          <SaveMovie movieId={data.id} />
        </div>
      )}
    </>
  );
};

export default SaveMovieFetch;
