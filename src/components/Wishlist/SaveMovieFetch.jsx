import useFetch from "../../hooks/useFetch";
import MovieComp from "../Movie/MovieComp";

const SaveMovieFetch = ({ id }) => {
  const [data, isLoading, errorMens] = useFetch(
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
  );

  return (
    <>
      {isLoading && <p>isLoading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data && (
        <>
          <MovieComp
            img={data.posterUrl}
            genre={data.genres}
            name={data.title}
            movieId={data.id}
          />
        </>
      )}
    </>
  );
};

export default SaveMovieFetch;
