import "./App.css";
import Form from "./components/Form";
import Home from "./components/Home";
import Email from "./components/Email";
import Confirm from "./components/Confirm";
import Login from "./components/Login";
import { Switch, BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/email" component={Email} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
