import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// component
import Button from '../../components/Button/Index';

// actions
import { authenticate } from '../../store/modules/auth';

class Login extends Component {
  state = {
    userDetails: {
      email: '',
      password: '',
    },
    redirect: false,
    loading: false,
    disabled: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [target.name]: target.value,
      },
    });
  };

  handleRegistration = () => {
    event.preventDefault();
    this.setState({
      ...this.state,
      loading: true,
      disabled: true,
    });
    this.props
      .authenticate({
        ...this.state.userDetails,
      })
      .then(() => {
        this.setState({
          loading: false,
          redirect: true,
          disabled: false,
        });
      });
  };

  render() {
    const { redirect, loading, disabled } = this.state;
    const { toggleAction } = this.props;
    if (redirect) {
      return <Redirect push to="/goals" />;
    }
    return (
      <div>
        {loading && (
          <div className="loader d-flex justify-content-center align-items-center">
            <i className="fas fa-spinner fa-pulse fa-10x text-white" />
          </div>
        )}
        <form className="registration-form" onSubmit={this.handleRegistration}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email*"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password*"
              pattern="(?=.*[a-z]).{6,}"
              title="Must be 6 characters or more and contain at least lowercase letter"
              required
              disabled={disabled}
              onChange={this.handleChange}
            />
          </div>
          <Button
            type="submit"
            className="custom-btn btn-blue w-100 my-1"
            value="SUBMIT"
          />
          <div className="d-flex switch-state-div justify-content-center">
            Don&apos;t have an account?
            <Button
              value="Register"
              className="min-btn"
              onClick={() => toggleAction()}
              type="button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { authenticate },
)(Login);
