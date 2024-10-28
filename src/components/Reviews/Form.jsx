const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="text">Text</label>
        <textarea name="text" id=""></textarea>
        <label htmlFor="movie">Movie</label>
        <select name="movie" id="">
          <option value=""></option>
        </select>
        <label htmlFor="rating">Rating (1 to 5)</label>
        <input type="number" name="rating" id="" max={5} min={1} />
        <label htmlFor="firstName">First Name</label>
        <input type="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />
        <button>Submit Review</button>
      </form>
    </div>
  );
};

export default Form;
