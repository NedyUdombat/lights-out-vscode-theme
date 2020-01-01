import React, { Component } from 'react';

// component
import Layout from '../../wrappers/Layout/Index';
import Register from '../../components/Register';

// styles
import './Authentication.scss';
import Login from '../../components/Login';

class Authentication extends Component {
  state = {
    registerState: true,
  };

  toggleDisplay = () => {
    const { registerState } = this.state;
    this.setState(previousState => ({
      ...previousState,
      registerState: !registerState,
    }));
  };
  render() {
    const { registerState } = this.state;
    return (
      <Layout>
        <h3 className="text-center mt-3 mt-md-3 auth-title">
          Sign Up To See & Save Your Goals
        </h3>
        <section className="d-flex justify-content-center">
          <div className="card auth-card">
            <div className="card-body">
              {registerState ? (
                <Register toggleAction={this.toggleDisplay} />
              ) : (
                <Login toggleAction={this.toggleDisplay} />
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Authentication;
