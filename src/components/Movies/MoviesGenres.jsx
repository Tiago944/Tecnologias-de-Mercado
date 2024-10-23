import useFetch from "../../hooks/useFetch";

const MoviesGenres = () => {
  const [data, isLoading, errorMens] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  return (
    <>
      {isLoading && <p>Loading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data && (
        <ul>
          {data.map((cat) => (
            <li>
              <input type="checkbox" name={cat} id={cat} />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesGenres;
