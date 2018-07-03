import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import './Menu.css';

import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Menu = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
        </div>
    </Router>
)

export default Menu;