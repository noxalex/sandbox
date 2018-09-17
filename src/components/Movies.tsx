import * as React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import data from '../data';

const Input = styled.input`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.12);
`;

class Movies extends React.Component {
  state = {
    searchString: 'black'
  };

  render() {
    const filtered = data.shows.filter(show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(this.state.searchString.toUpperCase())
    );

    console.log(filtered);

    return (
      <div className="movies">
        <Input type="text" placeholder="search for a movie you like" />
        {data.shows.map(show => (
          <MovieCard key={show.imdbID} {...show} />
        ))}
      </div>
    );
  }
}

export default Movies;
