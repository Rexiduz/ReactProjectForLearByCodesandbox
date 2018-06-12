import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { dataSource, Wrapper, columns } from "../_mock_/UserData";

class TableUserDetails extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Table columns={columns()} dataSource={dataSource} />
        </Wrapper>
      </div>
    );
  }
}
export default TableUserDetails;
