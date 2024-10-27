import MovieComp from "./MovieComp";

const SingleMovieDetails = ({ data }) => {
  return (
    <>
      <MovieComp
        img={data.posterUrl}
        genre={data.genres}
        name={data.title}
        movieId={data.id}
      />
    </>
  );
};

export default SingleMovieDetails;
