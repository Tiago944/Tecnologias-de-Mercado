import useFetch from "../../hooks/useFetch";

const MoviesGenres = ({ handleClickGenrer }) => {
  const [data, isLoading, errorMens] = useFetch(
    "https://moviesfunctionapp.azurewebsites.net/api/GetGenres"
  );

  return (
    <div className="filter">
      <h3>Category</h3>
      {isLoading && <p>Loading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data && (
        <ul>
          {data.map((cat, index) => (
            <li key={index}>
              <input
                onClick={handleClickGenrer}
                type="checkbox"
                name={cat}
                id={cat}
              />
              <label htmlFor={cat}>{cat}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesGenres;
