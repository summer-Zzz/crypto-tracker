import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const db = require('../express-server/db/index');

import Chart from './components/Chart'

import './App.css';
import { formatPrefix } from 'd3-format';

function App() {
  const [number, setNumber] = useState(0)
  return (
    <Router>
    <div className="App">
      <header>
        <h1 onClick={() => setNumber(number + 1)}>routing</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
      <main>
        <h2>Some other content</h2>
        {/* {viewMode === "home" && <p>HOME</p>}
        {viewMode === "login" && <p>LOGIN</p>}
        {viewMode === "register" && <p>REGISTER</p>} */}
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

export default App;
