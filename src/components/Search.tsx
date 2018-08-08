import * as React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const handleSearchClick = (e: React.SyntheticEvent): void => {
    console.log("clicked");
  };

  return (
    <React.Fragment>
      <form>
        <input type="text" placeholder="search for a movie you like" />
        <Link to="/movies" className="search" onClick={handleSearchClick}>
          or Browse All
        </Link>
      </form>
    </React.Fragment>
  );
};

export default Search;
