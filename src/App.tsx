import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { isShowModalSelector } from './store/rootStore';
import MobileCalendar from './components/MobileCalendar/MobileCalendar';

function App() {
  const isShowModal = useSelector(isShowModalSelector);

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
            <Route
               path="/calendar"
               exact
               component={MobileCalendar}
            />
        </Switch>

        {isShowModal && <ModalWindow />}
    </div>
    
  );
}

export default App;
