import React from "react";
import Container from "../components/container";
// import {Link} from "gatsby";
import Header from "../components/header";
import Menu from "../components/menu";

export default() => (
  <div style={{color: 'teal'}}>
    {/* <Link to="/">Home</Link> */}
    <Menu activeLink="contact" />
    <Container>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </Container>
  </div>
);