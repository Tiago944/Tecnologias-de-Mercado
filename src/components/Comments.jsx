import useFetch from "../hooks/useFetch";
import Comment from "./Comment";

const Comments = ({ url }) => {
  const [data, isLoading, errorMessange] = useFetch(url);

  return (
    <div className="comments">
      {isLoading && <p>Is Loading</p>}
      {errorMessange && <p>{errorMessange}</p>}
      {data &&
        data.map((review) => (
          <Comment
            title={review.title}
            text={review.text}
            movie={review.movie}
            movieId={review.movieId}
            email={review.email}
            rating={review.rating}
            firstName={review.first_name}
            lastName={review.last_name}
          />
        ))}
    </div>
  );
};

export default Comments;
