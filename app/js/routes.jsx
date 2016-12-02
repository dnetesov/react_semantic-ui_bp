import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/App';
import UsersTable from './views/users/table';
import UsersDetails from './views/users/details';

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ UsersTable } />
    <Route path='users/:id' component={ UsersDetails } />
  </Route>
);

// <Route path='users/new' component={ UsersNew } /> example

// TODO: users as index
