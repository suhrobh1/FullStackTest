import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav_bar">
            <div>
                <Link to="/" className='nav_bar_text'>Home</Link>
            </div>
            <div>
                <Link to="/add_exercise" className='nav_bar_text'>Add Exercise</Link>
            </div>
        </nav>
    );
  }
  

export default Navigation;