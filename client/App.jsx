import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContainer, ProfileContainer, HomeContainer } from './containers';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={ <AuthContainer /> }/>
        <Route path="/profile" element={ <ProfileContainer /> }/>
        <Route path="/home" element={ <HomeContainer />}/>
      </Routes>
    </div>
  );
}