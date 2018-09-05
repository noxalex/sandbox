import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Movies from './components/Movies';
// import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

interface LoginContextValue {
  userName: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginContext = React.createContext<LoginContextValue | null>(null);

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
          {/* <Breadcrumbs /> */}
          <nav>
            <Link to="/">Main</Link>
            <Link to="/search">Search</Link>
            <Link to="/movies">Movies</Link>
          </nav>

          <header>
            Search for a movie
            {this.state.userName ? <span> {this.state.userName}</span> : null}
          </header>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <LoginContext.Provider
                  value={{
                    userName: this.state.userName,
                    handleNameChange: (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      this.setState({ userName: e.target.value });
                    }
                  }}
                >
                  <Login {...props} />
                </LoginContext.Provider>
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
