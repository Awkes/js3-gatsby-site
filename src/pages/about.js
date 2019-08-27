import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";

export default() => (
  <div style={{color: 'teal'}}>
    <Menu activeLink="about" />
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Sush wow. Very React.</p>
  </div>
);