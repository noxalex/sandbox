import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Movies from './components/Movies';
import Breadcrumb from './components/Breadcrumb';
import './App.css';

const FoF = () => <h1 style={{ textAlign: 'center' }}>404</h1>;

class App extends React.Component {
  state = {
    userName: ''
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userName: e.target.value });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <ul className="breadcrumbs">
            <Breadcrumb />
          </ul>
          <header>
            Search for a movie
            {this.state.userName ? <span> {this.state.userName}</span> : null}
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Login
                  userName={this.state.userName}
                  onChange={this.handleNameChange}
                  {...props}
                />
              )}
            />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/search" component={Search} />;
            <Route component={FoF} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
