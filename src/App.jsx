import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Wishlist from "./pages/Wishlist";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviedetails" element={<MovieDetails />}>
            <Route path=":id" element={<MovieDetails />} />
          </Route>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
