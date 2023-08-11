import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import List from "./Components/Main/List"
import "./App.css"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Sidebar />
      <List />
    </div>
  );
};

export default App;
