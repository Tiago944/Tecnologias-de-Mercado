const Comment = ({
  title,
  text,
  movie,
  movieId,
  email,
  rating,
  firstName,
  lastName,
}) => {
  return (
    <div className="comment-comp">
      <div className="comment-comp-header">
        <h2>{title}</h2>
        <div className="comment-comp-rating">
          <p>{rating}</p>
        </div>
      </div>
      <h3 className="comment-comp-movie">{movie}</h3>
      <p className="comment-comp-text">{text}</p>
      <p className="comment-comp-info">
        {firstName + lastName + " - " + email}
      </p>
    </div>
  );
};

export default Comment;
