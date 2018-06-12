import React from "react";
import "antd/dist/antd.css";
import '../styles.css';
import { Layout } from "antd";
import HearderMe from "./HeaderMe";
import SiderMe from "./SiderMe";
import ContentMe from "./ContentMe";

class MyLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <HearderMe />
        <Layout>
          <SiderMe />
          <ContentMe />
        </Layout>
      </Layout>
    );
  }
}

export default MyLayout;
