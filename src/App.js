import "./App.css";
import Homepage from "./pages/Homepage";
import Addcardpage from "./pages/Addcardpage";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path="/" render={(props) => <Homepage {...props} />} />
    <Route path="/addcard" render={(props) => <Addcardpage {...props}/>}/>   
        
        </Switch>
    </div>
  );
}

export default App;
