import React from "react";
import {Link} from "gatsby";

export default props => {
  const linkStyle = { padding: '5px', color: 'hotpink', textDecoration: 'none' };
  const activeLinkStyle = { padding: '5px', color: 'hotpink', textDecoration: 'underline' };

  return (
    <nav>
      <Link to="/" style={props.activeLink === 'home' ? activeLinkStyle : linkStyle}>
        Home
      </Link>
      <Link to="/about/" style={props.activeLink === 'about' ? activeLinkStyle : linkStyle}>
        About
      </Link>
      <Link to="/contact/" style={props.activeLink === 'contact' ? activeLinkStyle : linkStyle}>
        Contact
      </Link>
      <hr />
    </nav>
  );
}