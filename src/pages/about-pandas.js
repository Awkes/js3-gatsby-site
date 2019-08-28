import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import {graphql} from "gatsby";

export default({data}) => (
  <div style={{color: 'teal'}}>
    <Layout page="about-pandas">
        <Header headerText={'About ' + data.site.siteMetadata.title} />
        <p>
          We're the only site running on your computer dedicated to showing the best
          photos and videos of pandas eating lots of food.
        </p>
    </Layout>
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`