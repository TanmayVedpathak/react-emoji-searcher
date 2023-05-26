import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { setTheme } from "../../utils/theme";
import "./Toggle.css";

function Toggle() {
  const [togClass, setTogClass] = useState("dark");
  const theme = localStorage.getItem("theme");

  const handleClick = () => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("light");
      setTogClass("light");
    } else {
      setTheme("dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTogClass(storedTheme);
  }, [theme]);

  return (
    <div>
      <button className="themeBtn" type="button" onClick={handleClick}>
        {theme === "light" ? (
          <BsFillMoonFill className="fontColor" />
        ) : (
          <BsFillSunFill className="fontColor" />
        )}
      </button>
    </div>
  );
}

export default Toggle;
