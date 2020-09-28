import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="app">
        <Header />
        <Switch>
            <Route
               path="/"
               exact
               component={HomePage}
            />
            <Route
               path="/about"
               exact
               component={About}
            />
        </Switch>
    </div>
    
  );
}

export default App;
