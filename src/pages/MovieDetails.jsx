import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import SingleMovie from "../components/Movie/SingleMovie";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <Layout>
      <SingleMovie id={id} />
    </Layout>
  );
};

export default MovieDetails;
