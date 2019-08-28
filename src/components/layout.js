import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import { useStaticQuery, Link, graphql } from "gatsby"
// import { css } from "@emotion/core";
// import { rhythm } from "../utils/typography";

export default ({page, children}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <Header style={{ display: `inline-block`, margin: 0, padding: 0 }} headerText={data.site.siteMetadata.title} />
        </Link>
        <Menu activeLink={page} />
      </header>
      {children}
    </div>
  )
}