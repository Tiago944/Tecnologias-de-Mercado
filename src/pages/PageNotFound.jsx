import { Link } from "react-router-dom";
import errorPageNotFound from "../assets/istockphotoasd.png";

const PageNotFound = () => {
  return (
    <main>
      <div className="notFoundImg">
        <img src={errorPageNotFound} alt="" />
        <Link to={"/"}>Go back to home page</Link>
      </div>
    </main>
  );
};

export default PageNotFound;
