import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Movies from "./components/Movies";
import "./App.css";

const FoF = () => <h1 style={{ textAlign: "center" }}>404</h1>;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header>Search for a movie</header>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/movies" component={Movies} />
            <Route component={FoF} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
