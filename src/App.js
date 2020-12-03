import React, { Component } from "react";
import './App.css';
import ListUsers from "./components/ListUsers";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
   
    <Search/>
    <ListUsers/>
    </div>
  );
}

export default App;
