import React from "react";
import ReactDOM from "react-dom";
import MyLayout from "./Layout/MyLayout";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MyLayout />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
