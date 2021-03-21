import React from "react";
import { useDispatch } from "react-redux";

import ListItem from "../ListItem/Index";
import { deleteTodo } from "../../store/todo/action";

const List = ({ data = [] }) => {
  const dispatch = useDispatch();
  return (
    <div className="list">
      {data.map((todo) => (
        <ListItem
          todo={todo}
          key={todo.id}
          onDelete={() => dispatch(deleteTodo(todo.id))}
        />
      ))}
    </div>
  );
};
export default List;
