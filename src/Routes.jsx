import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import ErrorPage from './pages/Error';
import EventsContainer from './Components/EventTable/EventsContainer';
import EventCreatorPage from './pages/EventCreatorPage';

function Routes() {
  return(
    <>
      <Switch>
        <Route path="/" exact component={EventsContainer} />
        <Route path="/competition/:competitionId" component={EventsPage} />
        <Route path="/create" component={EventCreatorPage} />
        <Route path="/error" component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </>
  );
}

export default Routes;