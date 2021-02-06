import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color:'firebrick'
}
const linkStyle = {
    margin:'0 12px',
    fontSize:'24px'
}

const Header = () => (
    <div style={headerStyles}>
        <h1>Header</h1>
        <nav>
            <NavLink style={linkStyle} exact to="/" activeStyle={activeStyle}>Home</NavLink>
            <NavLink style={linkStyle} to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink style={linkStyle} to="/courses" activeStyle={activeStyle}>Courses</NavLink>
        </nav>
    </div>
);

export default Header;

const headerStyles = {
    backgroundColor:'dodgerblue',
    padding:'35px',
    color:'white',
    textAlign:'center'
}