import React from "react";
import "antd/dist/antd.css";
import "../styles.css";
import { css } from "react-emotion";
import { Layout, Menu, Input, Divider, Icon, Avatar } from "antd";

const { Header } = Layout;
const Search = Input.Search;

class HeaderMe extends React.Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Tournament</Menu.Item>
          <Menu.Item key="2">Mathches</Menu.Item>
          <Menu.Item key="3">Challengs</Menu.Item>
          <Menu.Item key="4">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              enterButton
            />
          </Menu.Item>
          <Menu.Item key="8" style={{ float: "right" }}>
            <Avatar
              // className="userAvatar"
              shape="square"
              size="large"
              icon="user"
            />
          </Menu.Item>
          <Menu.Item key="7" style={{ float: "right" }}>
            <Icon type="aliwangwang-o" />
          </Menu.Item>
          <Menu.Item key="6" style={{ float: "right" }}>
            <Icon type="bell" />
          </Menu.Item>
          <Menu.Item key="5" style={{ float: "right" }}>
            Organizer<Divider type="vertical" />
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderMe;
