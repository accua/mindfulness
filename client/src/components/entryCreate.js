import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class EntryCreate extends Component {

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

  renderRadio() {
    return (
      <div className="rating">
        <p>Rating</p>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" value="1" /> 1
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" value="2" /> 2
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" value="3" /> 3
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" value="4" /> 4
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" value="5" /> 5
          </label>
        </div>
      </div>
    );
  }

  onSubmit(values) {
    let entry = {
      title: values.title
    };
    let beforeFeeling = {
      rating: values.beforeRating,
      textbox: values.beforeTextbox,
      before_or_after: 0
    };
    let afterFeeling = {
      rating: values.afterRating,
      textbox: values.afterTextbox,
      before_or_after: 1
    }
    this.props.createEntry({ entry, beforeFeeling, afterFeeling }, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <a href="/" className="logo mx-auto d-block"></a>
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Title"
              name="title"
              component={this.renderField}
            />
            <Field
              label="Write about how you're feeling"
              name="beforeTextbox"
              type="text"
              component={this.renderField}
            />
            <div className="rating">
              <p>Rating</p>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="beforeRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="1"
                  />
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    name="beforeRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="2"
                  />
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="beforeRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="3"
                  />
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="beforeRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="4"
                  />
                  4
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="beforeRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="5"
                  />
                  5
                </label>
              </div>
            </div>
            <Field
              label="Write about how you're feeling"
              name="afterTextbox"
              type="area"
              component={this.renderField}
            />
            <div className="rating">
              <p>Rating</p>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="afterRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="1"
                  />
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    name="afterRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="2"
                  />
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="afterRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="3"
                  />
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="afterRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="4"
                  />
                  4
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label>
                  <Field
                    label="Rating"
                    name="afterRating"
                    className="form-check-input"
                    component='input'
                    type="radio"
                    value="5"
                  />
                  5
                </label>
              </div>
            </div>
          <button type="submit" className="btn btn-custom btn-primary">Submit</button>
          <Link to="/" className="btn btn-custom btn-primary">Cancel</Link>
        </form>
        </div>
      </div>
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
  form: 'EntryCreateForm'
})(
  connect(null, actions)(EntryCreate)
);
