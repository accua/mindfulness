import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Meditate extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.updateEntry(id);
  }


  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? ' has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    let feeling = {
      // entry_id: this.props.entry.id
      rating: values.rating,
      textbox: values.textbox,
      before_or_after: 1
    }
    this.props.updateEntry({ feeling }, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Write about how you're feeling"
          name="textbox"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Rating"
          name="rating"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// function validate(values) {
//   const errors = {};
//   //Validate the inputs from 'Values'
//   if (!values.title) {
//     errors.title = 'Enter a title';
//   }
//   if (!values.rating) {
//     errors.rating = 'Rate how you feel';
//   }
//   if (!values.textbox) {
//     errors.textbox = 'Write about how you feel';
//   }
//   //If errors is empty, the form is fine to submit
//   //If errors has *any* properties, redux form assumes form is invalid
//   return errors;
// }

function mapStateToProps({ entries }, ownProps) {
  console.log('state.entries: ', entries);

  return { entry: entries[ownProps.match.params.id] };
}

export default reduxForm({
  // validate,
  form: 'MeditateForm'
})(
  connect(mapStateToProps, actions)(Meditate)
);
