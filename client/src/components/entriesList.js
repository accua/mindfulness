import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntries, fetchEntry } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Moment from 'react-moment';

class EntriesList extends Component {
  //lifecycle method
  componentDidMount() {
    this.props.fetchEntries();
  }
  // TODO: Change the keys from Math.random, add more styling.
  renderEntries(entry) {
    return _.map(this.props.entries, entry => {
      const title = entry.title;
      const id = entry.id
      const dateToFormat = entry.created_at
      return (
        <div className="card text-center">
          <div className="card-body">

              <h4 className="card-title"><Link to={`/entries/${id}`}>{entry && title}
            </Link></h4>
            <p className="card-text">{entry && entry.feelings[1] && entry.feelings[1]['textbox']}</p>
            <p className="card-text">{entry && entry.feelings[1] && <p>Rating: {entry.feelings[1]['rating']}</p>}</p>
          </div>
          <div className="card-footer text-muted">
            <Moment fromNow>{dateToFormat}</Moment>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid mindfulness-hero">
          <div class="container">
            <a href="/" className="logo mx-auto d-block"></a>
          </div>
        </div>
        <div className="container">
          <div className="text-xs-right">
            <Link className="btn btn-primary btn-home" to="/entries/new">
              Meditate
            </Link>
          </div>
          <div>
            {this.renderEntries()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { entries: state.entries };
}

export default connect(mapStateToProps, { fetchEntries })(EntriesList);
