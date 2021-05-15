import { Route, Switch } from "react-router-dom";

import CustomerForm from "./Components/CustomerForm/CustomerForm";
import ResponsiveLayout from "./Components/ResponsiveLayout/ResponsiveLayout";
import AppBar from "./Components/AppBar/Appbar";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/form" exact component={CustomerForm} />
        <Route path="/layout" exact component={ResponsiveLayout} />
        <Route path="/" exact component={CustomerForm} />
      </Switch>
    </div>
  );
}

export default App;
