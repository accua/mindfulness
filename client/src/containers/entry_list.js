import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntries } from '../actions';
import _ from 'lodash';

class EntriesIndex extends Component {
  //lifecycle method
  componentDidMount() {
    this.props.fetchEntries();
  }
  // TODO: Change the keys from Math.random, add more styling, make titles links to the entry_show page for that object, show ratings.
  renderEntries(entry) {
    return _.map(this.props.entries, entry => {
      console.log(entry);
      const title = entry.title;
      return (
        <div key={Math.random}>
          <li className="list-group-item" key={entry.id}>
            {title}
            <ul>
              <li className="list-group-item" key={Math.random}>
                {entry.feelings[0]['textbox']}
              </li>
              <br />
              <li className="list-group-item" key={Math.random}>
                {entry.feelings[1]['textbox']}
              </li>
            </ul>
          </li>
          <br />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Entries</h3>
        <ul className="list-group">
          {this.renderEntries()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { entries: state.entries };
}

export default connect(mapStateToProps, { fetchEntries })(EntriesIndex);
