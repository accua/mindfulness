import React, { Component } from 'react';

import EntryList from '../containers/entry_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <EntryList />
      </div>
    )
  }
}
