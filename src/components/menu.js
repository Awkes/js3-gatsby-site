import React from "react";
import {Link} from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={props.style}>{props.children}</Link>
  </li>
)

const activeLinkStyle = { color: '#000', fontWeight: 'bold', textDecoration: 'underline' };

export default props => (
  <nav style={{float: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
    <ul style={{ listStyle: `none`, margin: 0, padding: 0 }}>
      <ListLink to="/" style={props.activeLink === 'home' ? activeLinkStyle : null}>Home</ListLink>
      <ListLink to="/about/" style={props.activeLink === 'about' ? activeLinkStyle : null}>About</ListLink>
      <ListLink to="/contact/" style={props.activeLink === 'contact' ? activeLinkStyle : null}>Contact</ListLink>
      <ListLink to="/about-css-modules/" style={props.activeLink === 'about-css-modules' ? activeLinkStyle : null}>CSS Modules</ListLink>
      <ListLink to="/index-pandas/" style={props.activeLink === 'home-pandas' ? activeLinkStyle : null}>Pandas</ListLink>
      <ListLink to="/about-pandas/" style={props.activeLink === 'about-pandas' ? activeLinkStyle : null}>About Pandas</ListLink>
      <ListLink to="/my-files/" style={props.activeLink === 'my-files' ? activeLinkStyle : null}>My Files</ListLink>
    </ul>
  </nav>
);