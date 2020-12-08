import React from "react";
import './App.css';
import ListUsers from "./components/ListUsers";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Meetings from "./components/Meetings";
import DashboardAdmin from "./components/DashboardAdmin";
function App() {
  return (
    <div className="App">
   
  
   <Search/>
    <hr/>
    {/* <DashboardAdmin/> */}

    <ListUsers/>
    <Footer/>
  

    <Router>
    <Switch>
    <Route exact path="/admin" component={DashboardAdmin} />
     <Route exact path="/meetings" component={Meetings}/>
   
   </Switch>
   </Router>
  
    </div>
  );
}

export default App;
