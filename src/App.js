import React from "react";
import './App.css';
import ListUsers from "./components/ListUsers";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Meetings from "./components/Meetings";
function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Search/>
    <hr/>
    <ListUsers/>
    <Footer/>
   <Switch>
  <Route exact path="/meetings" component={Meetings}/>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
