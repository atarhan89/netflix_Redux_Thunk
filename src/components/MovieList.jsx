import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseImageURL, options } from "./../costants/costants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from 'react-router-dom';

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  // bu bileşen kategorının fılmlerı ıcn istek atacak ve filmleri listeleyecek
  console.log(movies);
  return (
    <div>
      <h2>{genre.name}</h2>

      <Splide options={{
        gap:"10px",
        pagination:false,
        autoWidth:true,

      }} aria-label="My Favorite Images">
        {movies?.map((movie) => (
          <SplideSlide key={movie.id}>
           <Link to={`/detay/${movie.id}`}>
           <img
              className="movie"
              src={baseImageURL.concat(movie.poster_path)}
            />
           </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
