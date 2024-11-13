import SaveMovie from "../SaveMovie";

const MovieComp = ({ img, genre, name, movieId }) => {
  return (
    <>
      <img src={img} alt="" className="movie-poster" />
      <div className="movie-info">
        <p>{genre}</p>
        <h3>{name}</h3>
      </div>
    </>
  );
};

export default MovieComp;
