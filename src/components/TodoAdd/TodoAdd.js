import React, { useState } from "react";

import { useDispatch } from "react-redux";

import styles from "./TodoAdd.module.sass";

export const TodoAdd = () => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");

  const add = () => {
    if (label !== "") {
      dispatch({
        type: "add_todo",
        payload: {
          label,
        },
      });
      setLabel("");
    }
  };

  return (
    <div className={styles.todoAdd}>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && add()}
      />
      <button onClick={() => add()}>Add</button>
    </div>
  );
};
