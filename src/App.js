import React from 'react';

import Layout from "./hoc/Layout/Layout";
import Register from "./components/Register/Register";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Layout>
          <Register />
      </Layout>
    </div>
  );
}

export default App;
