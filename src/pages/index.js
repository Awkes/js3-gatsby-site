import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default() => (
  <div style={{ color: `purple`}}>
    <Layout page="home">
        <Header headerText="Hello Gatsby!" />
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        
        <Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
    </Layout>
  </div>
)
