import React, { useState, useContext } from "react";
import { ContextApp } from "../../reducer";

import styles from "./TodoItemEdit.module.sass";

export const TodoItemEdit = ({ item: { id, label }, setEditTodo }) => {
  const { dispatch } = useContext(ContextApp);
  const [todo, setTodo] = useState(label);
  const saveChangeTodo = () => {
    dispatch({
      type: "change_todo",
      payload: {
        id,
        label: todo,
      },
    });
    setEditTodo("");
  };
  return (
    <div className={styles.listItemEdit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className={styles.btnsWrapper}>
        <button onClick={() => setEditTodo("")}>Close</button>
        <button onClick={saveChangeTodo}>Save</button>
      </div>
    </div>
  );
};
