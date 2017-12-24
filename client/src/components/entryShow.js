import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EntryShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEntry(id);
  }

  render() {
    const { entry } = this.props;
    if (!entry) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{entry.title}</h3>
        <div className="row">
          <h6>Before Feeling:</h6>
          <div className="col-lg-6">
            {entry && entry.feelings[0] && <p>Rating: {entry.feelings[0]['rating']}</p>}
            {entry && entry.feelings[0] && entry.feelings[0]['textbox']}
          </div>
          <h6>After Feeling:</h6>
          <div className="col-lg-6">
            {entry && entry.feelings[1] && entry.feelings[1]['rating']}
            {entry && entry.feelings[1] && entry.feelings[1]['textbox']}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ entries }, ownProps) {
  console.log('state.entries: ', entries);

  return { entry: entries[ownProps.match.params.id] };
}

export default connect(mapStateToProps, actions)(EntryShow);
