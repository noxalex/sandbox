import * as React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Movie } from '../components/types';

const Input = styled.input`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.12);
`;

interface Props {
  movies: Movie[];
}

class Movies extends React.Component<Props> {
  state = {
    searchString: ''
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const filtered = this.props.movies.filter(
      movie =>
        !!~`${movie.title} ${movie.description}`
          .toUpperCase()
          .indexOf(this.state.searchString.toUpperCase())
    );

    return (
      <div className="movies">
        <Input
          type="text"
          placeholder="search for a movie you like"
          onChange={this.handleSearchChange}
        />
        {filtered.map(movie => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
