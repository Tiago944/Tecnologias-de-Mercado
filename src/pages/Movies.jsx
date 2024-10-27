import Layout from "../components/Layout";
import MoviesDisplay from "../components/Movie/MoviesDisplay";

const Movies = () => {
  return (
    <Layout>
      <div className="movie-page">
        <MoviesDisplay />
      </div>
    </Layout>
  );
};
export default Movies;
