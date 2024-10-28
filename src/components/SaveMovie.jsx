import { useState } from "react";

const SaveMovie = ({ movieId }) => {
  const [save, setSave] = useState(() => {
    const savedMovies = JSON.parse(sessionStorage.getItem("Movies")) || []; // vai buscar os "Movies" se n houver é um array vazio
    return savedMovies.includes(movieId);
  });

  const addMovie = () => {
    const savedMovies = JSON.parse(sessionStorage.getItem("Movies")) || [];
    savedMovies.push(movieId);
    sessionStorage.setItem("Movies", JSON.stringify(savedMovies));
    setSave(true);
  };

  const removeMovie = () => {
    const savedMovies = JSON.parse(sessionStorage.getItem("Movies")) || [];
    const updatedMovies = savedMovies.filter((id) => id !== movieId);
    sessionStorage.setItem("Movies", JSON.stringify(updatedMovies));
    setSave(false);
  };

  return (
    <button onClick={save ? removeMovie : addMovie}>
      {save ? "Tirar" : "Salvar"}
    </button>
  );
};

export default SaveMovie;
