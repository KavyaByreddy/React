import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class LoginForm3 extends React.Component {
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();

    this.state = {
      showPassword: false,
    };
  }

  handlePasswordVisibility = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    // Now you can perform any login logic with the obtained username and password
    // For example, send an API request to the server or validate the credentials.

    console.log('Username:', username);
    console.log('Password:', password);
  };

  render() {
    const { showPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} />
            Username:
          </label>
          <input type="text" id="username" ref={this.usernameRef} />
        </div>
        <div>
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} />
            Password:
          </label>
          <div className="password-input-container">
            <input type={showPassword ? 'text' : 'password'} id="password" ref={this.passwordRef} />
            <span onClick={this.handlePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm3;
