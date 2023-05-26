import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Item from "../item/Item.js";
import Clipboard from "clipboard";
import "./Results.css";

function Results(props) {
  useEffect(() => {
    const clipboard = new Clipboard(".item");
    return () => {
      clipboard.destroy();
    };
  });

  return (
    <div className="results">
      {props.data.length === 0 ? (
        <p className="no-result">No Results Found</p>
      ) : (
        props.data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              symbol={item.symbol}
              keywords={item.keywords}
              title={item.title}
            />
          );
        })
      )}
    </div>
  );
}

Item.defaultProps = {
  emojiFiltered: [],
};

Item.propTypes = {
  emojiFiltered: PropTypes.array,
};

export default Results;
