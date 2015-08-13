import React from 'react';
import Router from 'react-router';
import {RouteHandler, Route, DefaultRoute, Redirect} from 'react-router';

import Home from  './components/Home';
import User from  './components/User';
import Repos from './components/User/Repos';
import Repo from  './components/User/Repo';

let App = React.createClass({
  render() {
    return(
      <RouteHandler />
    )
  }
});

let routes = (
  <Route path="/" name="home" handler={App}>

    <Route name="user" path=":userId" handler={User}>
      <DefaultRoute handler={Repos}/>
      <Route name="repo" path=":repo" handler={Repo}/>
    </Route>
    // TODO: Do a proper landpage allowing to search users
    <Redirect from="/" to="user" params={{userId: 'meis'}} />

  </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
