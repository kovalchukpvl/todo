import React, { useState, useContext } from "react";

import { ContextApp } from "../../reducer";

import styles from "./TodoAdd.module.sass";

export const TodoAdd = () => {
  const { dispatch } = useContext(ContextApp);
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
        onKeyUp={(e) => e.key === 'Enter' && add()}
      />
      <button onClick={() => add()}>Add</button>
    </div>
  );
};
