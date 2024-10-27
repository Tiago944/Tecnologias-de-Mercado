import useFetch from "../../hooks/useFetch";
import Comments from "../Comments";
import RelatedMovies from "./RelatedMovies";
import SingleMovieDetails from "./SingleMovieDetails";

const SingleMovie = ({ id }) => {
  const queryString = id !== undefined ? `id=${id}` : "";
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?${queryString}`;
  const [data, isLoading, errorMesange] = useFetch(url);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {errorMesange && <p>{errorMesange}</p>}
      {data && (
        <>
          <SingleMovieDetails data={data} />
          <RelatedMovies
            url={`https://moviesfunctionapp.azurewebsites.net/api/GetRelated?${queryString}`}
          />
          <Comments
            url={`https://moviesfunctionapp.azurewebsites.net/api/GetReviews?${queryString}`}
          />
        </>
      )}
    </div>
  );
};
export default SingleMovie;
