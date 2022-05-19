import React, { useState, useEffect } from "react";
import axios_instance from "./axios";
import requests from "./requests";

import "./Banner.css";

const Banner = () => {
  const [bannerMov, setBannerMov] = useState({});

  const truncateText = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const getRandomMovie = async () => {
      const moviesData = await axios_instance.get(
        requests.fetchNetflixOriginals
      );
      console.log(
        moviesData.data.results[
          Math.floor(Math.random() * moviesData.data.results.length - 1)
        ]
      );
      setBannerMov(
        moviesData.data.results[
          Math.floor(Math.random() * moviesData.data.results.length - 1)
        ]
      );
      return moviesData;
    };
    getRandomMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerMov?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannerMov?.name || bannerMov?.title || bannerMov?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateText(bannerMov?.overview, 500)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
};

export default Banner;
