import * as React from "react";
import data from "../data";

const Movies = () => {
  return (
    <React.Fragment>
      <pre>
        <code>{data}</code>
      </pre>
    </React.Fragment>
  );
};

export default Movies;
