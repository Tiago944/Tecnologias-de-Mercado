import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Comments from "../Comments";

const Form = () => {
  const [data, isLoading, errMen] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetMovies"
  );

  const [message, setMensage] = useState();

  const handleSubmit = (event) => {
    setMensage("");
    event.preventDefault();
    const title = event.target.title.value;
    const textarea = event.target.textarea.value;
    const movie = Number(event.target.movie.value);
    const rating = Number(event.target.rating.value);
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    if (
      title &&
      textarea &&
      movie &&
      rating &&
      firstName &&
      lastName &&
      email
    ) {
      const movieIds = data.map((item) => item.id);

      console.log(movieIds);

      // verifica se o filme existe na api
      if (!movieIds.includes(movie)) {
        setMensage("Invalid movie");
        return;
      }

      if (rating < 1 || rating > 5) {
        setMensage("Rating only 1 to 5");
        return;
      }

      const emailVerification = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

      if (!emailVerification.test(email)) {
        setMensage("Email inválido");
        return;
      }

      const reviewData = {
        title: title,
        text: textarea,
        movie: movie.toString(), // ensure it's a string as in the example
        email: email,
        rating: rating.toString(), // ensure it's a string as in the example
        firstName: firstName,
        lastName: lastName,
      };

      // Send POST request
      fetch("https://moviesfunctionapp.azurewebsites.net/api/SubmitReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      })
        .then((data) => {
          console.log("Success:", data);
          setMensage("Tudo bem");
        })
        .catch((error) => {
          console.error("Error:", error);
          setMensage("Erro ao enviar a crítica");
        });

      /* setMensage("Tudo bem"); */
      return;
    }

    setMensage("Preencha todos os campos");
  };

  return (
    <div className="reviews_page">
      <h1>Submit Review</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="text">Text</label>
        <textarea name="text" id="textarea" rows={"5"}></textarea>
        <label htmlFor="movie">Movie</label>
        <select name="movie" id="movie">
          {data &&
            data.map((movie, index) => (
              <option key={index} id={movie.id} value={movie.id}>
                {movie.title}
              </option>
            ))}
        </select>
        <label htmlFor="rating">Rating (1 to 5)</label>
        <input type="number" name="rating" id="rating" max={5} min={1} />
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button>Submit Review</button>
        <div id="response">{message && <p>{message}</p>}</div>
      </form>
      <Comments
        url={"https://moviesfunctionapp.azurewebsites.net/api/GetReviews"}
      />
    </div>
  );
};

export default Form;
