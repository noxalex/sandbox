import * as React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

const Movies = () => {
  return (
    <div className="movies">
      {data.shows.map(show => (
        <MovieCard key={show.imdbID} {...show} />
      ))}
    </div>
  );
};

export default Movies;
