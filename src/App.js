import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';

const HatPage = () => (
  <div className="hat-page">
    <h1> Hat Page </h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={HatPage}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
