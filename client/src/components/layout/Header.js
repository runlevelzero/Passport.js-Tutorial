import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={headerStyle}> 
        <header>
            <h1>//TODO:</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    </div>
  )
}

const headerStyle = {
  background : '#333',
  color      : '#ccc',
  fontFamily : '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
  textAlign  : 'center',
  padding    : '10px' 
}

const linkStyle = {
  color : '#ffffff',
  textDecoration: 'none'
}

export default Header;