import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CreateEntry extends Component {

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

  componentDidUpdate(prevProps) {
    // const { onFill, input } = this.props;

    console.log(this.props);
  }

  onSubmit(values) {
    let entry = {
      title: values.title
    };
    let feeling = {
      rating: values.rating,
      textbox: values.textbox,
      before_or_after: 0
    }
    this.props.createEntry({ entry, feeling}, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />

        <Field
          label="Rating"
          name="rating"
          component={this.renderField}
        />
        <Field
          label="Write about how you're feeling"
          name="textbox"
          type="text"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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

export default reduxForm({
  // validate,
  form: 'CreateEntryForm'
})(
  connect(null, actions)(CreateEntry)
);
