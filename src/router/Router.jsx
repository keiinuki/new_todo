import { Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Page1 } from "../components/Page1";
import { Page2 } from "../components/Page2";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";
import { Parameter } from "../components/Parameter";
import { Page404 } from "../components/Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) =>(
          <Switch>        
            <Route exact path={`${url}`}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
          )}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>      
            <Route exact path={`${url}`}>
              <Page2 />
            </Route>
            <Route path={`${url}/:id`}>
              <Parameter />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      ></Route>
      <Route path="/*">
        <Page404 />
      </Route>
    </Switch>
  );
};