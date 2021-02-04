import React, { useReducer } from "react";
import { ContextApp, initialState, reducer } from "./reducer";
import { ListItems, TodoAdd } from "./components";

import styles from "./App.module.sass";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      <div className={styles.app}>
        <TodoAdd />
        <ListItems />
      </div>
    </ContextApp.Provider>
  );
};

export default App;