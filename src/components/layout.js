import React from "react";
import Menu from "../components/menu";
import {Link} from "gatsby";

export default ({page, children}) => (
  
  <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline-block`, margin: 0, padding: 0 }}>My Sweet Site</h3>
      </Link>
      <Menu activeLink={page} />
    </header>
    {children}
  </div>

);