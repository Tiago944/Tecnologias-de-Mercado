import SaveMovie from "../SaveMovie";

const MovieComp = ({ img, genre, name, movieId }) => {
  return (
    <>
      <img src={img} alt="" />
      <div>
        <p>{genre}</p>
        <SaveMovie movieId={movieId} />
        {/* ^ arranjar problema de redirecionar no lista de filmes, ficar mal ^ */}
      </div>
      <h3>{name}</h3>
    </>
  );
};

export default MovieComp;
