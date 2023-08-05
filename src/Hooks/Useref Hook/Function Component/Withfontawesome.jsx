import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
const LoginForm1 = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
  
      // Now you can perform any login logic with the obtained username and password
      // For example, send an API request to the server or validate the credentials.
  
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} />
            Username:
          </label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div>
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} />
            Password:
          </label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default LoginForm1;
  