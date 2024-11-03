import SaveMovie from "../SaveMovie";
import MovieComp from "./MovieComp";

const SingleMovieDetails = ({ data }) => {
  return (
    <div className="movie-details">
      <img src={data.posterUrl} alt="" />
      <div className="details">
        <div className="title-section">
          <h1>{data.title}</h1>
          <SaveMovie movieId={data.id} />
        </div>

        <p>{data.summary}</p>
        <div className="more-info">
          <p>
            <strong>Year:</strong> {data.year}
          </p>
          <p>
            <strong>Duration:</strong> {data.runtime}
          </p>
          <p>
            <strong>Category:</strong> {data.genres}
          </p>
        </div>
        <div className="directors_actors">
          <div className="directors">
            <h3>Directors</h3>
            {data.director.map((director) => (
              <li> {director} </li>
            ))}
          </div>

          <div className="actors">
            <h3>Actors</h3>
            {data.actors.map((actor) => (
              <li> {actor} </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetails;
