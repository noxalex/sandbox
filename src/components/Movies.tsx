import * as React from "react";
import data from "../data";

const Movies = () => {
  return (
    <React.Fragment>
      <pre>
        <code>{data.shows[0].title}</code>
      </pre>
    </React.Fragment>
  );
};

export default Movies;
