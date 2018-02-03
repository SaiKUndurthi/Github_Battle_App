import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../index.css';
import Popular from './Popular.js';
import Home from './Home.js';
import Battle from './Battle.js';
import Nav from './Nav.js';
import Results from './Results.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/popular" component={Popular} />
              <Route path="/battle/results" component={Results} />
              <Route exact path='/battle' component={Battle} />
              <Route render={function(){
                return(
                  <p> Not Found </p>
                )
              }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
