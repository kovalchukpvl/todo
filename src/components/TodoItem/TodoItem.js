import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./TodoItem.module.sass";

export const TodoItem = ({
  item: { id, label },
  setEditTodo,
  select,
  changeSelect,
}) => {
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const deleteTodo = () => {
    dispatch({
      type: "delete_todo",
      payload: {
        id,
      },
    });
  };

  useEffect(() => {
    changeSelect(id, checkbox);
  }, [checkbox]);

  useEffect(() => {
    setCheckbox(false);
  }, [select.open]);

  return (
    <div
      className={`${styles.listItem} ${select.open && styles.edit}`}
      onClick={() => select.open && setCheckbox(!checkbox)}
    >
      {select.open && (
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
      )}
      <p>{label}</p>
      {!select.open && (
        <div className={styles.btnsWrapper}>
          <button onClick={() => setEditTodo(id)}>Edit</button>
          <button onClick={deleteTodo}>X</button>
        </div>
      )}
    </div>
  );
};
