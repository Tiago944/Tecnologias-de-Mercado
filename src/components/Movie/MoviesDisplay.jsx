import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MoviesGenres from "./MoviesGenres";

const MoviesDisplay = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [genrers, setGenrers] = useState([]);
  const [apiUrl, setApiUrl] = useState(
    `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=${sortBy}`
  );

  //para o select
  const handleSelectChage = (event) => {
    setSortBy(event.target.value);
  };

  //para o filtro
  const handleClickGenrer = (event) => {
    let value = event.target.id;

    if (genrers.indexOf(value) === -1) {
      setGenrers((genrers) => [...genrers, value]);
    } else {
      setGenrers((genrer) => genrer.filter((name) => name !== value));
    }
  };

  // para fazer o map das categorias e colocar na api
  useEffect(() => {
    setApiUrl(
      `https://moviesfunctionapp.azurewebsites.net/api/GetMovies?sortBy=${sortBy}`
    );

    if (genrers.length > 0) {
      let genrerString =
        "%5b" +
        genrers
          .map((genrer) => {
            return `"` + genrer + `"`;
          })
          .join(",") +
        "%5d";
      setApiUrl((api) => `${api}&category=${genrerString}`);
    }

    console.log(apiUrl);
  }, [sortBy, genrers]);

  return (
    <>
      <MoviesGenres handleClickGenrer={handleClickGenrer} />
      <div className="movies">
        <div className="title-sort">
          <h1>All Movies</h1>
          <select value={sortBy} onChange={handleSelectChage}>
            <option value="relevance" defaultValue={true}>
              Relevance
            </option>
            <option value="name">Name</option>
            <option value="year">Year</option>
          </select>
        </div>
        <MovieList url={apiUrl} />
      </div>
    </>
  );
};

export default MoviesDisplay;
