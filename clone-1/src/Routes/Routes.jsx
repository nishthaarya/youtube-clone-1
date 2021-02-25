import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "../Components/Home/Home";
import { Trending } from "../Components/Trending/Trending";
import { Videos } from "../Components/Videos/Videos";
import Sidebar from "../Components/Sidebar/Sidebar";
import {RelatedVideo} from '../Components/RelatedVideo/RelatedVideo'
import { Login } from "../Components/Login/Login";
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" render={() => <Navbar />} />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />    
          <Route path = "/login" exact render={() => <Login/>} />
          <Route path= "/videos/:id" exact render ={(props)=><RelatedVideo {...props} />} />
          <Route path= "/trending" exact render = {(props) => <Trending {...props} />} />
          <Route render={() => <div> 404 page, Page not found</div>} />
        </Switch>
      </div>
    );
  }
}
export { Routes };
