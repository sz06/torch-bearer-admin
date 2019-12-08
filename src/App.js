import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Auth, ContactUs, Home, RegisterSchool, Results, Settings, BookCounselor, Forum, Counselors} from './containers';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/register-school" component={RegisterSchool} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/book-counselor" component={BookCounselor} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/counselors" component={Counselors} />
      </Router>
    </div>
  );
}

export default App;
