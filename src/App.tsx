import { useState } from "react";
import { Provider } from "react-redux";

import { Products } from "./screens/Products";
import store from "./redux";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}

export default App;

