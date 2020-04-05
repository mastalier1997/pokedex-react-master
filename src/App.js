import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import Home from './views/Home';
import Show from './views/Show';

import Navbar from './components/Navbar';

import './styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/pokemon/:name" component={Show} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
