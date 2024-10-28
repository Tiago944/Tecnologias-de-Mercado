import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieComp from "../Movie/MovieComp";

const SaveMoviesList = () => {
  /*   const [ids, setIds] = useState();
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    setIds(JSON.parse(sessionStorage.getItem("Movies")));

    ids &&
      setSaves(() => {
        ids.map((id) => {
          const [data, isLoading, errorMens] = useFetch(
            `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
          );
          return data;
        });
      });
  }, []);

  return (
    <>
      {saves &&
        saves.map((movie) => (
          <MovieComp
            img={movie.posterUrl}
            genre={movie.genres}
            name={movie.title}
            movieId={movie.id}
          />
        ))}
      ;
    </>
  ); */
  const [ids, setIds] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [errorMesange, setErrorMesange] = useState("");

  useEffect(() => {
    // Load saved movie IDs from sessionStorage on component mount
    const savedIds = JSON.parse(sessionStorage.getItem("Movies")) || [];
    setIds(savedIds);
    console.log("ids = " + ids);
    setMoviesData([]);
  }, []);

  useEffect(() => {
    setMoviesData([]);

    const fetchMoviesData = async () => {
      ids.forEach(async (id) => {
        /* const [data, isLoading, errorMens] = await useFetch(
          `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
        ); */
        const data = await fetch(
          `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?id=${id}`
        )
          .then((response) => response.json())
          .then((json) => setMoviesData((prevData) => [...prevData, json]))
          .catch((err) => setErrorMesange(err.message));
      });
    };

    if (ids.length > 0) {
      fetchMoviesData();
    }
  }, [ids]);

  return (
    <div>
      {moviesData.length > 0 ? (
        moviesData.map((movie, index) => (
          <div>
            <MovieComp
              key={index}
              img={movie.posterUrl}
              genre={movie.genres}
              name={movie.title}
              movieId={movie.id}
            />
          </div>
        ))
      ) : (
        <p>Sem Filmes Guardados</p>
      )}
      {console.log(moviesData)}
    </div>
  );
};

export default SaveMoviesList;
