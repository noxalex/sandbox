import * as React from 'react';
import styled from 'styled-components';

const StyledMovieCard = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  border-radius: 2px;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.15);
  img {
    width: 100%;
  }
`;

interface Props {
  title: string;
  year: string;
  description: string;
  poster: string;
  imdbID: string;
  trailer: string;
}

class MovieCard extends React.Component<Props> {
  render() {
    return (
      <StyledMovieCard>
        <>
          <img
            alt={`${this.props.title} Movie Poster`}
            src={`img/posters/${this.props.poster}`}
          />
          <div className="movie-description">
            <h3>{this.props.title}</h3>
            <h3>{this.props.year}</h3>
            <p>{this.props.description}</p>
          </div>
        </>
      </StyledMovieCard>
    );
  }
}

export default MovieCard;
