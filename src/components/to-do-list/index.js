import React from "react";
import { render } from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/rootReducer";
import TodoList from './TodoList'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <StoreProvider store={store}>
    <div style={styles}>
      <TodoList />
    </div>
  </StoreProvider>
);

render(<App />, document.getElementById('root'));
