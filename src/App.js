import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import {Route} from 'react-router-dom';

const HatsPage = () => {
  return (
    <h1>Hats Page</h1>
  );
}

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
}

export default App;