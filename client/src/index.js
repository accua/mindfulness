import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import EntriesList from './components/entriesList';
import EntryShow from './components/entryShow';
import CreateEntry from './components/entryCreate';
import Meditate from './components/meditate';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/entries/new" component={CreateEntry} />
          {/* <Route path="/entries/:id" component={AfterFeeling} /> */}
          <Route path="/entries/:id" component={EntryShow} />
          {/* <Route path="/meditate" component={Meditate} /> */}
          <Route path="/" component={EntriesList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
  registerServiceWorker();
