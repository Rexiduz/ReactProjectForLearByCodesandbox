import React from "react";
import style from "react-emotion";
import { Avatar } from "antd";

const sizeAvatar = ["small", ""];
const styleAction = ["avatarWrapper", "actionWrapper"];

export const dataSource = [
  {
    key: "1",
    name: "Mike",
    status: "online",
    mutualServices: 1
  },
  {
    key: "2",
    name: "John",
    status: "Listening to Spotify",
    mutualServices: 2
  }
];

export const Wrapper = style("div") `

  .avatarWrapper {
    cursor: pointer;
    margin: 1px;
    :hover {
      background-color: blue;
    }
  }

  .actionWrapper {
    display: none;
    cursor: pointer;
    margin: 2px;
    :hover {
      background-color: blue;
    }
  }
  
  .dropDownWrapper {
    cursor: pointer;
    :hover {
      background-color: blue;
    }
  }

  .ant-table-row:hover {
    .actionWrapper {
      display: inline-block;
      cursor: pointer;
      margin: 2px;
      :
    }
  }
`;

export const columns = () => [
  {
    width: 150,
    // fixed:'left',
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    width: 150,
    title: "STATUS",
    dataIndex: "status",
    key: "age"
  },
  {
    width: 200,
    title: "MUTUAL SERVICES",
    key: "mutualServices",
    render: () => (
      <div>
        <Avatar className={styleAction[0]} size={sizeAvatar[0]} icon="user" />
        <Avatar className={styleAction[0]} size={sizeAvatar[0]}>
          U
        </Avatar>
        <Avatar className={styleAction[0]} size={sizeAvatar[0]}>
          USER
        </Avatar>
        <Avatar
          className={styleAction[0]}
          size={sizeAvatar[0]}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <Avatar
          className={styleAction[0]}
          size={sizeAvatar[0]}
          style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          U
        </Avatar>
        <Avatar
          className={styleAction[0]}
          size={sizeAvatar[0]}
          style={{ backgroundColor: "#87d068" }}
          icon="user"
        />
      </div>
    )
  },
  {
    key: "action",
    render: () => (
      <div>
        <Avatar
          className={styleAction[1]}
          size={sizeAvatar[1]}
          icon="video-camera"
          shape="square"
        />
        <Avatar className={styleAction[1]} size={sizeAvatar[1]} icon="phone" />
        <Avatar
          className={styleAction[1]}
          size={sizeAvatar[1]}
          icon="user-delete"
        />
      </div>
    )
  }
];
