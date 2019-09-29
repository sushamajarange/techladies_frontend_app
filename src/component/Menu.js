import React, { Component } from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import Home from './Home';
import ContactUs from './ContactUs';
import About from './About';
import ForeCast from './ForeCast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/Home/" >Home</Link>
              </li>
              <li>
                <Link to="/About/">About</Link>
              </li>
              <li>
                <Link to="/ForeCast/">ForeCast</Link>
              </li>
              <li>
                <Link to="/ContactUs/">ContactUs</Link>
              </li>
              <li>
              <button className="downloadCV">
                <Link to="/SushamaPatekarResume.pdf" target="_blank" download>Download My CV</Link>
              </button>
              </li>
            </ul>
          </nav>
          <Route path="/Home/" component={Home} />
          <Route path="/About/" component={About} />
          <Route path="/ForeCast/" component={ForeCast} />
          <Route path="/ContactUs/" component={ContactUs} />
      </Router>
    </Container>
  );
}

export default Menu;
