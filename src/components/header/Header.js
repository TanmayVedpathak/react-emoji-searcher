import React, { useState, useEffect } from "react";
import "./Header.css";
import Toggle from "../toggle/Toggle";
import { keepTheme } from "../../utils/theme";

function Header() {
  const [togClass, setTogClass] = useState("dark");

  useEffect(() => {
    keepTheme();
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, [togClass]);

  return (
    <div className="header">
      <h1>
        Emoji Search{" "}
        <span role="img" aria-label="Unicorn Emoji">
          🦊
        </span>
      </h1>
      <p>A simple emoji search tool made with ReactJS.</p>

      <div className="container">
        <Toggle />
        <p className="theme-info">Switch theme to your preferrence.</p>
      </div>
    </div>
  );
}

export default Header;
