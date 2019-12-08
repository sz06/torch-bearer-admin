import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Auth, PackageDropoff, ContactUs, Home, Log } from './containers';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/dropoff" component={PackageDropoff} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/log" component={Log} />
      </Router>
    </div>
  );
}

export default App;
