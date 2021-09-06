import React from 'react';

import { reduxForm } from 'redux-form';

import StreamForm from './StreamForm';

class StreamForm extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default reduxForm({
  validate,
  form: 'streamForm'
})(StreamForm);
