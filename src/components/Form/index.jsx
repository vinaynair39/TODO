import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo, updateTodo } from "../../store/todo/action";

import "./index.scss";

const Form = ({ edit = false, todo = {}, setEdit = () => {} }) => {
  const [text, setText] = useState(todo.value || "");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) inputRef.current.focus();
  }, [edit]);

  const onTodoChange = ({ target: { value } }) => {
    setText(value);
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        value: text,
      })
    );
    setText("");
  };

  const onTodoEdit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: todo.id,
        value: text,
      })
    );
    setEdit(false);
    setText("");
  };

  return (
    <form className="form" onSubmit={edit ? onTodoEdit : onTodoSubmit}>
      <input
        type="text"
        className={edit ? "todo-input-edit" : "todo-input"}
        onChange={onTodoChange}
        placeholder="Enter your tasks here"
        ref={inputRef}
        value={text}
      />
    </form>
  );
};
export default Form;
