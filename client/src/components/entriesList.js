import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntries, fetchEntry } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class EntriesList extends Component {
  //lifecycle method
  componentDidMount() {
    this.props.fetchEntries();
  }
  // TODO: Change the keys from Math.random, add more styling, make titles links to the entry_show page for that object, show ratings.
  renderEntries(entry) {
    return _.map(this.props.entries, entry => {
      const title = entry.title;
      const id = entry.id
      return (
        <div key={Math.random}>
          <li className="list-group-item" key={id}>
            <Link to={`/entries/${id}`}>
            {title}
            </Link>
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

export default connect(mapStateToProps, { fetchEntries })(EntriesList);
