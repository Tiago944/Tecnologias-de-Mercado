import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const RelatedMovies = ({ url }) => {
  return (
    <div className="related_movies">
      <div className="related_head">
        <h2>Related Movies</h2>
        <Link to={"/movies"}>See All</Link>
      </div>
      <div>
        <MovieList url={url} />
      </div>
    </div>
  );
};

export default RelatedMovies;
