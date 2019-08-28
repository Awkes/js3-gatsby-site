import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";

export default() => (
  <div style={{color: 'teal'}}>
    <Layout page="contact">
        <Header headerText="Contact" />
        <p>Send us a message!</p>

        <Header headerText="I'd love to talk! Email me at the address below" />
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
    </Layout>
  </div>
);