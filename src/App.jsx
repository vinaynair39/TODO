import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Form from "./components/Form";
import List from "./components/List";

import "./App.scss";
import { setToLocalStorage } from "./utils/localStorageUtils";

function App() {
  const todos = useSelector((state) => state.todo);
  useEffect(() => {
    setToLocalStorage("todos", todos);
  }, [todos]);
  return (
    <div className="App">
      <div className="app-form">
        <Form />
      </div>
      <div className="app-list">
        <List data={todos} />
      </div>
    </div>
  );
}

export default App;
