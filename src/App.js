import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
