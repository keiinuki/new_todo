import { Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Page1 } from "../components/Page1";
import { Page2 } from "../components/Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/page1">
        <Page1 />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};