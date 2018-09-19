import * as React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  border-radius: 2px;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const MovieDescription = styled.div`
  text-align: center;
`;

interface Props {
  movie: any;
}

class Details extends React.Component<Props> {
  render() {
    return (
      <StyledDetails>
        <img
          alt={`${this.props.movie.title} Movie Poster`}
          src={`img/posters/${this.props.movie.poster}`}
        />
        <MovieDescription>
          <h3>{this.props.movie.title}</h3>
          <h3>{this.props.movie.year}</h3>
          <p>{this.props.movie.description}</p>
        </MovieDescription>
      </StyledDetails>
    );
  }
}

export default Details;
