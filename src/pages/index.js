import React from "react";
import Container from "../components/container";
// import {Link} from "gatsby";
import Header from "../components/header";
import Menu from "../components/menu";

export default() => (
  <div style={{ color: `purple`}}>
    {/* <Link to="/contact/">Contact</Link> */}
    <Menu activeLink="home" />
    <Container>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Container>
  </div>
)
