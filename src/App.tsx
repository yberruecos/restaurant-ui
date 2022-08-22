import React, { useLayoutEffect } from 'react';
import logo from './colombian-food.png';
import './App.css';
import Router from './router/router';
import AppContext from './context/appContext';
import useData from './hooks/useData';
import { useDispatch } from "react-redux";
import {setData} from './store/modules/dataSlice'
import {getMenu} from './services/restaurant-api'

function App() {
  const dispatch=useDispatch()
  useLayoutEffect(()=>{
      getMenu()
      .then((data)=>{
        dispatch(setData(data))
      })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AppContext.Provider value={useData()}>
        <Router/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
