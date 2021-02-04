import React from "react";
export const ContextApp = React.createContext();

const getRandomInt = () =>
  Math.floor(Math.random() * Math.floor(99999)).toString();

export const initialState = {
  todos: [
    {
      id: getRandomInt(),
      label: "Відгукнутись на вакансію",
    },
    {
      id: getRandomInt(),
      label: "Виконати тестове завдання",
    },
    {
      id: getRandomInt(),
      label: "Ghfdg тестове завдання",
    },
  ],
};

const addTodo = (state, payload) => {
  return [
    ...state.todos,
    {
      id: getRandomInt(),
      ...payload,
    },
  ];
};

const deleteTodo = (state, payload) => {
  const idx = state.todos.findIndex(({ id }) => id === payload.id);
  return [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)];
};
const changeTodo = (state, payload) => {
  const idx = state.todos.findIndex(({ id }) => id === payload.id);
  return [...state.todos.slice(0, idx), payload, ...state.todos.slice(idx + 1)];
};

const deleteSelectTodo = (state, payload) => {
  return state.todos.filter((item) => !payload.includes(item.id));
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return {
        todos: addTodo(state, action.payload),
      };
    case "delete_todo":
      return {
        todos: deleteTodo(state, action.payload),
      };
    case "change_todo":
      return {
        todos: changeTodo(state, action.payload),
      };
    case "delete_select_todo":
      return {
        todos: deleteSelectTodo(state, action.payload),
      };
    default:
      return state;
  }
};
