import { Link } from "react-router-dom";

const Banner = ({ data, isLoading, errorMens }) => {
  return (
    <div className="hero-banner">
      {isLoading && <p>Loading</p>}
      {errorMens && <p>{errorMens}</p>}
      {data && (
        <>
          <img
            src={data.image}
            alt={data.title + " banner"}
            className="hero-banner-image"
          />
          <div className="hero-banner-details">
            <h1 className="hero-banner-title">{data.title}</h1>
            <p className="hero-banner-description">{data.description}</p>
            <Link>
              <button className="hero-banner-button">See details</button>
            </Link>
          </div>
        </>
      )}

      {/*  <img
        src={
          "https://i.pinimg.com/736x/7c/7d/2c/7c7d2ca336a82fbca241d7697f1be7ba.jpg"
        }
        alt={"data.title" + " banner"}
        className="hero-banner-image"
      />
      <div className="hero-banner-details">
        <h1 className="hero-banner-title">{"data.title"}</h1>
        <p className="hero-banner-description">{"data.description"}</p>
        <Link to="asd">
          <button className="hero-banner-button">See details</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Banner;
