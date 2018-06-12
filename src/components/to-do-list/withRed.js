import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

const withRed = Component => {
  return class withRedButton extends React.PureComponent {
    state = {
      color: "red"
    };
    render() {
      return (
        <div>
          <Button
            style={{ margin: "20px" }}
            type="danger"
            onClick={() => this.changSate()}
          >
            Red
          </Button>
          <Component styles={{ backgroundColor: this.state.color }} />
        </div>
      );
    }

    changSate = () => {
      this.state.color === "red"
        ? this.setState({ color: "black" })
        : this.setState({ color: "red" });
    };
  };
};

// const withRed = Component => props => (
//   <Component styles= {{ backgroundColor: "red" }} />
// )

export default withRed;
