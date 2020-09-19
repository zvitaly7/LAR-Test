import React from 'react';
import './App.css';
import {Table} from "./containers/Table/Table";
import Portal from "./components/portal/portal";

function App() {
  return (
    <div className="App">
      <Table/>
      <Portal/>
    </div>
  );
}

export default App;
