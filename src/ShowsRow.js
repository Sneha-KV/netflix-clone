import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios_instance from "./axios";
import "./Rows.css";
import movieTrailer from "movie-trailer";

const ShowsRow = ({ title, fetchURL, isLargeRow }) => {
  const [movieList, setMovieList] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const img_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const requestData = await axios_instance.get(fetchURL);
      setMovieList(requestData.data?.results);
      // console.table(requestData.data.results);
      return requestData;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      // origin: "http://localhost:3000",
    },
  };

  // click shows movie trailer
  const handleMovieClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {
          // movieList.length > 0 &&
          movieList.map((movie, index) => {
            return (
              <img
                key={movie.id}
                alt={movie.name}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${img_base_url}${
                  !!isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                onClick={() => handleMovieClick(movie)}
              />
            );
          })
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default ShowsRow;
