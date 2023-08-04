import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./compent/Home"
import About from './compent/About';
// import SignIn from "./compent/SignIn";
import Register from "./compent/Register";
import Acess from "./compent/Acess";
import Education from "./compent/Education";

import Shelter from "./compent/Shelter";
import Conatact from "./compent/Contact"
import './App.css';
import Donate from './compent/Donate';
import HEALTH from './compent/HEALTH';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/aboutus' element={<About />} />
        {/* <Route exact path="/signin" element={<SignIn />} /> */}
        <Route exact path="membership" element={<Register />} />
        <Route  exact path="/donate" element={<Donate />} />
        <Route  exact path="/Education" element={<Education/>} />
        <Route  exact path="/health" element={<HEALTH/>} />
        <Route  exact path="/shelter" element={<Shelter />} />
        <Route  exact path="/Contact" element={<Conatact />} />
        <Route exact path="/login" element={<Acess />} />

        

     
      </Routes>
    </Router>
  );
};

export default App;
