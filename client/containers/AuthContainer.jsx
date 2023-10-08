import React from 'react';
import Login from '../components/Login.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/loginActions.js';

// add state and dispatch functions to props be used in Login component
const mapStateToProps = ({ login: { newUser } }) => ({
  newUser,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// stateful container that renders Login component
const AuthContainer = (props) => {
  return (
    <div className='main-container'>
      <Login {...props} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
