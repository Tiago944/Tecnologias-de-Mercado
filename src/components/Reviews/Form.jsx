import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Form = () => {
  const [data, isLoading, errMen] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
  );

  const [message, setMensage] = useState();

  const handleSubmit = (event) => {
    setMensage("");
    event.preventDefault();
    const title = event.target.title;
    const textarea = event.target.textarea;
    const movie = event.target.movie.id;
    const rating = event.target.rating;
    const firstName = event.target.firstName;
    const lastName = event.target.lastName;
    const email = event.target.email;
    debugger;
    if (
      title &&
      textarea &&
      movie &&
      rating &&
      firstName &&
      lastName &&
      email
    ) {
      if (!data.includes(movie)) {
        console.log(movie);
        console.log(!data.includes(movie));
        setMensage("Movie invalided");
        return;
      }

      if (rating < 1 || rating > 5) {
        setMensage("Rating only 1 to 5");
        return;
      }
    }

    setMensage("Preencha todos os campos");
  };

  return (
    <div className="reviews_page">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="text">Text</label>
        <textarea name="text" id="textarea" rows={"5"}></textarea>
        <label htmlFor="movie">Movie</label>
        <select name="movie" id="movie">
          {data &&
            data.map((movie, index) => (
              <option key={index} id={movie.id}>
                {movie.title}
              </option>
            ))}
        </select>
        <label htmlFor="rating">Rating (1 to 5)</label>
        <input type="number" name="rating" id="rating" max={5} min={1} />
        <label htmlFor="firstName">First Name</label>
        <input type="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button>Submit Review</button>
        <div id="response">{message && <p>{message}</p>}</div>
      </form>
    </div>
  );
};

export default Form;
