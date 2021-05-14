import { Route, Switch } from "react-router-dom";

import CustomerForm from "./Components/CustomerForm/CustomerForm";
import AppBar from "./Components/AppBar/Appbar";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact component={CustomerForm} />
      </Switch>
    </div>
  );
}

export default App;
