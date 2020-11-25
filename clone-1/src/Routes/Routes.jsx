import React from "react";
import { Home } from "./Home";
import { Route, Switch } from "react-router-dom";
import { RelatedVideo } from '../Components/RelatedVideo/RelatedVideo'
import { Login } from "./Login/Login";

const Routes = () => {
  return (
    <div>
    <Switch>
        <Route path="/" exact render={() => <Home />} />

        <Route path="/relatedvideo/:id"
        exact 
        render={(props) => <RelatedVideo {...props} />} />

        <Route path="/login" exact render={(props) => <Login {...props} />} />

    </Switch>
    </div>
  );
};

export { Routes };
