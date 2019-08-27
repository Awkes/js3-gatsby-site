import React from "react";
// import {Link} from "gatsby";
import Header from "../components/header";
import Menu from "../components/menu";

export default() => (
  <div style={{color: 'teal'}}>
    {/* <Link to="/">Home</Link> */}
    <Menu activeLink="contact" />
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
);