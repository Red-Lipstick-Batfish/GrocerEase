import React from 'react';
import Login from '../components/Login.jsx';
import Profile from '../components/Profile.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/loginActions.js';

// add state and dispatch functions to props be used in Login component
const mapStateToProps = ({ login: { newUser, authStep } }) => ({
  newUser,
  authStep,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// stateful container that renders Login component
const AuthContainer = (props) => {
  if (props.authStep === 1) {
    console.log(props);
    return (
      <div className='main-container'>
        <Login {...props} />
      </div>
    );
  } else if (props.authStep === 2) {
    return (
      <div className='main-container'>
        <Profile {...props} />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
