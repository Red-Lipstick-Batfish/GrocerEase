import React from "react";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
// import { load } from './actions/actions'


// create state-store using thunk middleware for async functional
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// dispatch initial load action creator
// store.dispatch(load)

//export store to index.js
export default store;