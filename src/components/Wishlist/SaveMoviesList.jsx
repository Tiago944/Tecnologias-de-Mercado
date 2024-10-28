import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieComp from "../Movie/MovieComp";
import SaveMovieFetch from "./SaveMovieFetch";

const SaveMoviesList = () => {
  const [ids, setIds] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [errorMesange, setErrorMesange] = useState("");

  useEffect(() => {
    // Load saved movie IDs from sessionStorage on component mount
    const savedIds = JSON.parse(sessionStorage.getItem("Movies")) || [];
    setIds(savedIds);
    setMoviesData([]);
  }, []);

  return (
    <>
      {ids &&
        ids.length > 0 &&
        ids.map((id, index) => <SaveMovieFetch key={index} id={id} />)}
      {ids.length === 0 && <p>Sem Filmes Guardados</p>}
    </>
  );
};

export default SaveMoviesList;
