import React from 'react';
import Form from '../components/Form.jsx';
// import Results from '../components/Results.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/homepageActions.js';
import NavBar from '../components/navBar.js';
import Result from '../components/Results.jsx'

// add state and dispatch functions to props be used in Login component
const mapStateToProps = ({ recipe: { currIngr, ingr, recipeList } }) => ({
  currIngr,
  ingr,
  recipeList
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// React component
const HomeContainer = (props) => {
  return (
    <div id='home-page'>
      <NavBar />
      <h1>Recipes Search</h1>
      <br></br>
      <Form {...props} />
      <br></br>
      <Result {...props.recipeList} /> 
    </div>
  );
};

// export HomeContainer to App.jsx
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
