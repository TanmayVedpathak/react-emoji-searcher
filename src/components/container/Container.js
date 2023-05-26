import React, { useState } from "react";
import Header from "../header/Header.js";
import Results from "../results/Results.js";
import data from "../../json/data.json";
import "./Container.css";

function Container() {
  const [query, setQuery] = useState("");

  const queryKeywords = query.toLowerCase().trim().split(" ");

  var queryResult = [];

  data.forEach((emoji) => {
    const keywords = emoji.keywords.split(" ");
    queryKeywords.forEach((word) => {
      if (keywords.includes(word)) {
        queryResult.push(emoji);
      }
    });
  });

  queryResult = [...new Set(queryResult)];

  return (
    <div className="container">
      <Header />
      <input
        className="search"
        type="text"
        placeholder="Search for a keyword..."
        onChange={(e) => setQuery(e.target.value)}
      />
      {query === "" ? (
        <h3>Type keywords to search</h3>
      ) : (
        <Results data={queryResult} />
      )}
    </div>
  );
}

export default Container;
