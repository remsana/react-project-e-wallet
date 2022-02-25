import "./App.css";
import Homepage from "./pages/Homepage";
import Addcardpage from "./pages/Addcardpage";
import {Switch, Route} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

function App() {

  const { userName } = useSelector((state) => state.api);

  return (
    <div className="App">
     <Switch>
    <Route exact path="/" render={(props) => <Homepage {...props} userName={userName}/>} />
    <Route path="/addcard" render={(props) => <Addcardpage {...props} />}/>   
        
        </Switch>
    </div>
  );
}

export default App;
