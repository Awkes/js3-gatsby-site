import React from "react";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default() => (
  <div style={{ color: `purple`}}>
    <Layout page="home-pandas">
      <Container>
        <Header headerText="Amazing Pandas Eating Things"/>
        <div>
          <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
      </Container>
    </Layout>
  </div>
)
