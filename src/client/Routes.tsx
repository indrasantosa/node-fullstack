import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Performance from './containers/Performance/index';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Performance}></Route>
    </Switch>
  );
};

export default AppRoutes;
