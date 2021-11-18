import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/chart">Houses</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to Game of Thrones</h2>;
}

function Search() {
  return <h2>Search</h2>;
}

function Chart() {
  return <h2>Chart</h2>;
}