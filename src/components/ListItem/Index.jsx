import React, { useState } from "react";
import Form from "../Form";
import { ReactComponent as Delete } from "../../assets/trash.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";

import "./index.scss";

const ListItem = ({ todo, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="list-item">
      <div className="content">
        {isEdit ? (
          <Form edit todo={todo} setEdit={() => setIsEdit(false)} />
        ) : (
          <p>{todo.value}</p>
        )}
      </div>
      <div className="buttons">
        <button className="button-edit" onClick={() => setIsEdit(!isEdit)}>
          <Edit />
        </button>
        <button className="button-delete" onClick={onDelete}>
          <Delete />
        </button>
      </div>
    </div>
  );
};
export default ListItem;
