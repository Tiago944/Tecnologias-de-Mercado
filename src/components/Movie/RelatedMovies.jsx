import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const RelatedMovies = ({ url }) => {
  return (
    <div>
      <h2>Related Movies</h2>
      <Link to={"/moveis"}>See All</Link>
      <div>
        <MovieList url={url} />
      </div>
    </div>
  );
};

export default RelatedMovies;
