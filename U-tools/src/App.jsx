import React from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
//import Register from './components/Register/Register';
//import Login from './components/Login/Login';
import Chooser from './components/Chooser/Chooser';
import NotFoundView from './components/NotFoundView/NotFoundView';
import Toolsmenu from './components/Toolsmenu/Toolsmenu';
import Cumcalculator from './components/Cumcalculator/Cumcalculator';
import { Route, Routes } from "react-router-dom";
import GradeCalculator from './components/GradeCalculator/GradeCalculator';
import AuthView from './views/AuthView/AuthView';

function App() {
  return (
    <div className={classes["App"]}>
      

      <Routes>
        <Route path="/" element={<Landing />}/>
{/*         <Route path="/signup" element={<Register />}/>
        <Route path="/signin" element={<Login />}/> */}
        <Route path="/chooser" element={<Chooser />}/>
        <Route path="/toolsmenu" element={<Toolsmenu/>}/>
        <Route path="/cumcalculator" element={<Cumcalculator/>}/>
        <Route path="/gradecalculator" element={<GradeCalculator />}/>
        <Route path="auth/*" element={<AuthView/>} />
        <Route path='*' element={<NotFoundView/>} />
      </Routes>
    </div>

  );
}


export default App
