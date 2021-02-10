import React from "react";

import { ListItems, TodoAdd } from "./components";

import styles from "./App.module.sass";

const App = () => {
  return (
    <div className={styles.app}>
      <TodoAdd />
      <ListItems />
    </div>
  );
};

export default App;
