import React from "react";
import HeroBanner from "./HeroBanner";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [custom, setCustom] = useState({ backgroundColor: "transparent" });
  const [navCustom, setNavCustom] = useState({});

  const listenScrollEvent = () => {
    if (window.scrollY > 40) {
      setCustom({
        backgroundColor: "#000814",
        borderBottom: "solid 2px #f5cc00",
        height: "15%",
        top: "-25px",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in, top 0.5s ease-in",
      });
      setNavCustom({ color: "#f5cc00" });
    } else {
      setCustom({
        backgroundColor: "transparent",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in, top 0.5s ease-out",
      });
      setNavCustom({ color: "#f5cc00" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", (e) => {
      listenScrollEvent(e);
    });
  }, [window.addEventListener]);

  return (
    <div>
      <div className="heroBanner">
        <div className="headerContainer" style={custom}>
          <Logo />
          <Navigation />
        </div>
        <HeroBanner />
      </div>
    </div>
  );
};

export default Header;
