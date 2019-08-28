import React from "react";
import {Link} from "gatsby";

export default props => {
  const linkStyle = { padding: '5px 20px', color: 'hotpink', textDecoration: 'none' };
  const activeLinkStyle = { padding: '5px 20px', color: 'hotpink', textDecoration: 'underline' };

  return (
    <nav style={{textAlign: 'center'}}>
      <Link to="/" style={props.activeLink === 'home' ? activeLinkStyle : linkStyle}>
        Home
      </Link>
      <Link to="/about/" style={props.activeLink === 'about' ? activeLinkStyle : linkStyle}>
        About
      </Link>
      <Link to="/contact/" style={props.activeLink === 'contact' ? activeLinkStyle : linkStyle}>
        Contact
      </Link>
      <Link to="/about-css-modules/" style={props.activeLink === 'about-css-modules' ? activeLinkStyle : linkStyle}>
        About CSS Modules
      </Link>
      <hr />
    </nav>
  );
}