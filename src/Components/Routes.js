import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import AuthContainer from "../Routes/Auth/AuthContainer";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LoggedInRoutes = () => 
<Switch>
  <Route exact path="/" component={Feed} />
  <Route path="/:username" component={Profile} />
  <Route exact path="/search" component={Search} />
  <Route path="/explore" component={Explore} />
</Switch>

const LoggedOutRoutes = () => 
<Switch>
  <Route exact path="/" component={AuthContainer} />
</Switch>

const AppRouter = ({isLoggedIn}) => (
    <Switch>
      {isLoggedIn ? <LoggedInRoutes />:<LoggedOutRoutes/>}
    </Switch>
  );

AppRouter.protoTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

  export default AppRouter;