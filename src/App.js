import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';

import Chart from './components/Chart'

import './App.css';
import { formatPrefix } from 'd3-format';

export default function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h1>routing</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main>
        <h2>Some other content</h2>
        <Switch>
          <Route path="/register">
            <p>REGISTER</p>
          </Route>
          <Route path="/login">
            <p>LOGIN</p>
          </Route>
          <Route path="/">
            <p>HOME</p>
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}
