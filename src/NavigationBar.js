import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavigationBar = () => {
  const [headerScroll, handleHeaderScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleHeaderScroll(true);
      } else {
        handleHeaderScroll(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className="nav__wrapper">
      <div className={`nav ${headerScroll && "nav__scrolled"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
          className="nav__logo"
        />
        <ul className="nav__tabMenu">
          <li className="nav__tab">Home</li>
          <li className="nav__tab">TV Shows</li>
          <li className="nav__tab">Movies</li>
          <li className="nav__tab">New & Popular</li>
          <li className="nav__tab">My List</li>
        </ul>
        {/* <ul class="nav__tabMenu_mobile">
          <li>
            <span>{">"}</span> Browse
          </li>
        </ul> */}
        <div className="nav__tabAccountDetails">
          <img
            src="https://occ-0-7-6.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbixeApBW3-Nl2SD40H-NBGKmv-eneU73h6hBcupBZNKnIWKbGO_18HrX2MQBnAL0_JYocPH62UHd58T1ZGF-l0Yoil7sHE.png?r=f71"
            alt="Account Avatar"
            className="nav__avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
