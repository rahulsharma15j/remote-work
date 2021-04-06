import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home-page/HomePage";
import Login from "./components/user/login/Login";
import Register from "./components/user/register/register";
import PageNotFound from "./components/error/page-not-found/404";
import Freelancer from "./components/freelancer/Freelancer";
import ContactInfo from "./components/freelancer/settings/contactinfo/ContactInfo";
import Profile from "./components/freelancer/profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/freelancer/feed" component={Freelancer}></Route>
          <Route
            path="/freelancer/settings/contactinfo"
            component={ContactInfo}
          ></Route>
          <Route path="/freelancer/:id" component={Profile}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
