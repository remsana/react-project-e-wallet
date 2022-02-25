import "./App.css";
import Homepage from "./pages/Homepage";
import Addcardpage from "./pages/Addcardpage";
import {Switch, Route} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { getName } from "./redux/apiSlice";
import { useEffect } from "react";

function App() {

  //getting the API from apiSlice 
  const { userName } = useSelector((state) => state.api);  
  
   //fetching the Api once
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(getName());
  }, []);


  return (
    <div className="App">
     <Switch>
    <Route exact path="/" render={(props) => <Homepage {...props} userName={userName}/>} />
    <Route path="/addcard" render={(props) => <Addcardpage {...props} userName={userName}/>}/>   
        
        </Switch>
    </div>
  );
}

export default App;
