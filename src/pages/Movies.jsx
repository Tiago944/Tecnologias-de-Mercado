import Layout from "../components/Layout";
import MovieList from "../components/Movies/MovieList";
import MoviesGenres from "../components/Movies/MoviesGenres";

const Movies = () => {
  return (
    <Layout>
      <div className="movie-page">
        <MoviesGenres />
        <MovieList
          url={"https://moviesfunctionapp.azurewebsites.net/api/GetMovies"}
        />
      </div>
    </Layout>
  );
};
export default Movies;
