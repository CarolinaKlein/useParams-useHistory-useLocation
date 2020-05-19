import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './pages/home'
import Mallorca from './pages/mallorca'
import Miami from './pages/miami'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to="/mallorca/something/something">Mallorca</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: "/miami",
                  state: {
                    from: "root"
                  }
                }
              }>Miami</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path="/mallorca/:city/:neighborhood" component={Mallorca}/>
              <Route exact path="/miami" component={Miami}/>
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
