import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { TodoItem, TodoItemEdit, SelectMenu } from "../index";

import styles from "./ListItems.module.sass";

export const ListItems = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editTodo, setEditTodo] = useState("");
  const [select, setSelect] = useState({
    open: false,
    ids: [],
  });

  const changeSelect = (id, checked) => {
    if (checked) setSelect({ ...select, ids: [...select.ids, id] });
    if (!checked) {
      const ids = select.ids.filter((ids) => ids !== id);
      setSelect({ ...select, ids });
    }
  };

  const deleteSelect = () => {
    dispatch({
      type: "delete_select_todo",
      payload: select.ids,
    });
    setSelect({ open: false, ids: [] });
  };

  return (
    <div className={styles.listItems}>
      {state.todos.length > 1 && (
        <SelectMenu
          setSelect={setSelect}
          select={select}
          deleteSelect={deleteSelect}
          editTodo={editTodo}
        />
      )}
      {state.todos.map((item) => {
        return item.id !== editTodo ? (
          <TodoItem
            key={item.id}
            item={item}
            setEditTodo={setEditTodo}
            select={select}
            setSelect={setSelect}
            changeSelect={changeSelect}
          />
        ) : (
          <TodoItemEdit key={item.id} item={item} setEditTodo={setEditTodo} />
        );
      })}
    </div>
  );
};
