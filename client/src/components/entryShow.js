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
      <div className="card text-center">
        <div className="card-header">
          <h3>{entry.title}</h3>
        </div>
        
        <div className="card-body">
          <h6>Before Feeling</h6>
          <p className="card-text">{entry && entry.feelings[0] && entry.feelings[0]['textbox']}</p>
          <p className="card-text">{entry && entry.feelings[0] && <p><strong>Rating</strong> {entry.feelings[0]['rating']}</p>}</p>
          <hr />
          <h6>After Feeling</h6>
          <p className="card-text">{entry && entry.feelings[1] && entry.feelings[1]['textbox']}</p>
          <p className="card-text">{entry && entry.feelings[1] && <p><strong>Rating</strong> {entry.feelings[1]['rating']}</p>}</p>
        </div>
        <div className="card-footer text-muted">
          2 days ago
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
