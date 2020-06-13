import React from 'react';

import './App.css';
import Layout from "./hoc/Layout/Layout";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Layout>
          <Register />
      </Layout>
    </div>
  );
}

export default App;
