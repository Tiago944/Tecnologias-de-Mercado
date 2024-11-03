import Layout from "../components/Layout";
import SaveMoviesList from "../components/Wishlist/SaveMoviesList";

const Wishlist = () => {
  return (
    <Layout>
      <h1>My wish List</h1>
      <SaveMoviesList />
    </Layout>
  );
};
export default Wishlist;
