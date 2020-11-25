import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../Components/Home/Home";
import { Trending } from "../Components/Trending/Trending";
import { Videos } from "../Components/Videos/Videos";
import Sidebar from "../Components/Sidebar/Sidebar";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" render={() => <Navbar />} />
        <Route path="/" render={() => <Sidebar />} />
        <Switch>
          <Route path="/" exact render={() => <Videos />} />
          <Route path="/trending" exact render={() => <Trending />} />
          <Route path= "/videos/:id" exact render ={(props)=><RelatedVideo {...props} />} />
          <Route render={() => <div> 404 page, Page not found</div>} />
        </Switch>
      </div>
    );
  }
}
export { Routes };

