import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Comments from "../Comments";
import RelatedMovies from "./RelatedMovies";
import SingleMovieDetails from "./SingleMovieDetails";

const SingleMovie = ({ id }) => {
  const queryString = id !== undefined ? `id=${id}` : "";
  const url = `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?${queryString}`;
  const [data, isLoading, errorMesange] = useFetch(url);
  const navigate = useNavigate();

  return (
    <div className="single_movie">
      {isLoading && <p>Loading...</p>}
      {errorMesange ? (
        errorMesange === "Unexpected end of JSON input" &&
        navigate(`/page_details_not_found`)
      ) : (
        <p>{errorMesange}</p>
      )}
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
