import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUserName } from '../actionCreators';

interface Props {
  userName: string;
  handleUserNameChange: () => void;
}

const Search = (props: Props) => {
  const handleSearchClick = (e: React.SyntheticEvent): void => {
    console.log('clicked');
  };

  return (
    <React.Fragment>
      <form>
        <input
          type="text"
          placeholder="search for a movie you like"
          value={props.userName}
          onChange={props.handleUserNameChange}
        />
        <Link to="/movies" className="search" onClick={handleSearchClick}>
          or Browse All
        </Link>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({ userName: state.userName });

// @ts-ignore
const mapDispatchToProps = (dispatch: Function) => ({
  handleUserNameChange(event: any) {
    dispatch(setUserName(event.target.value));
  }
});

export default connect(mapStateToProps)(Search);
