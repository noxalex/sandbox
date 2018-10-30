import * as React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Search from './components/Search';
import Movies from './components/Movies';
import Details from './components/Details';
import Header from './components/Header';
import preload from './data';
import Spinner from './components/Spinner';

// import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

interface LoginContextValue {
  userName: string;
  handleNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginContext = React.createContext<LoginContextValue | null>(null);

const FoF = () => <h1 style={{ textAlign: 'center' }}>404</h1>;

class App extends React.Component {
  state = {
    userName: '',
    apiData: { details: '' }
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userName: e.target.value });
  };

  componentDidMount() {
    axios
      .get('https://api.spacexdata.com/v2/launches/latest')
      .then(response => this.setState({ apiData: response.data }));
  }

  render() {
    let headerComponent;
    if (this.state.apiData.details !== '') {
      headerComponent = <Header rocketLaunch={this.state.apiData} />;
    } else {
      headerComponent = <Spinner />;
    }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Breadcrumbs /> */}

            <LoginContext.Provider
              value={{
                userName: this.state.userName
              }}
            >
              <nav>
                <Link to="/">Main</Link>
                <Link to="/search">Search</Link>
                <Link to="/movies">Movies</Link>
              </nav>

              {headerComponent}

              {console.log('text', this.state.apiData)}
            </LoginContext.Provider>

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
              <Route
                exact
                path="/movies"
                render={props => <Movies {...props} movies={preload.shows} />}
              />
              <Route exact path="/search" component={Search} />
              <Route
                exact
                path="/details/:id"
                render={props => (
                  <Details
                    movie={preload.shows.find(movie => {
                      return props.match.params.id === movie.imdbID;
                    })}
                  />
                )}
              />
              <Route component={FoF} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
