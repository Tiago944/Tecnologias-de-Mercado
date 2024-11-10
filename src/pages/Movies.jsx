import Layout from "../components/Layout";
import MoviesDisplay from "../components/Movie/MoviesDisplay";

const Movies = () => {
  return (
    <Layout>
      <div className="movie-page" style={{ padding: "0 10px" }}>
        <MoviesDisplay />
      </div>
    </Layout>
  );
};
export default Movies;
