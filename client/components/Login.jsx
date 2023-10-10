import React from 'react';

const Login = ({
  newUser,
  authSubmit,
  updateUsername,
  updatePassword,
  logSwitch,
  updateAuthStep,
}) => {
  if (newUser) {
    return (
      <div className='login-wrap'>
        <h1>Create an Account</h1>
        <label>
          <p>Username</p>
          <input type='text' onChange={(e) => updateUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            onChange={(e) => updatePassword(e.target.value)}
          />
        </label>
        <div>
          <button
            onClick={(e) => {
              updateAuthStep();
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <p>Already a member? </p>
          <button onClick={() => logSwitch()}>Log In</button>
        </div>
      </div>
    );
  } else
    return (
      <div className='login-wrap'>
        <h1>Sign In</h1>
        <form
          onSubmit={(e) => {
            authSubmit();
          }}
        >
          <label>
            <p>Username</p>
            <input
              type='text'
              onChange={(e) => updateUsername(e.target.value)}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type='password'
              onChange={(e) => updatePassword(e.target.value)}
            />
          </label>
          <div>
            <button type='submit'>Log In</button>
          </div>
        </form>
        <div>
          <p>Need an account? </p>
          <button onClick={() => logSwitch()}>Sign Up</button>
        </div>
      </div>
    );
};

export default Login;
