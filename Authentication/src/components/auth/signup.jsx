import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {

  handleFormSubmit(formProps) {
    this.props.signupUser(formProps.email, formProps.password);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const {
      handleSubmit, fields: { email, password, passwordConfirm }
    } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" { ...email } />
          { email.touched && email.error &&
            <div className="error">{ email.error }</div>
          }

          <label>Password:</label>
          <input type="password" className="form-control" { ...password } />
          { password.touched && password.error &&
            <div className="error">{ password.error }</div>
          }

        </fieldset>

          <label>Confirm Password:</label>
          <input type="password" className="form-control" { ...passwordConfirm } />
          { passwordConfirm.touched && passwordConfirm.error &&
            <div className="error">{ passwordConfirm.error }</div>
          }

        <button action="submit" className="btn btn-primary">Sign Up!</button>
        { this.renderAlert() }

      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.error
  };
};

const validate = (formProps) => {
  const errors = {};

  if(!formProps.email) {
    errors.email = 'Please enter a email';
  }

  if(!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
};

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
