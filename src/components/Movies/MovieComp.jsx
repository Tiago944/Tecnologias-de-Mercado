const MovieComp = ({ img, genre, name }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{genre}</p>
      <p>{name}</p>
    </div>
  );
};

export default MovieComp;
