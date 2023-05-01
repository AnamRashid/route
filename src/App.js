import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./cont";
import Navigation from "./nav";
import NotFound from "./notf";
import UserProfile from "./userprof";
import Dashboard from "./dash";
import Accounts from "./acc";
import Setting from "./set";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user" element={<UserProfile userId="31109"/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Routes path="/dasboard">
        <Route path="setting" element={<Setting />} />
        <Route path="accounts" element={<Accounts />} />
      </Routes>
      <Navigation/>
      <Dashboard />
    </div>
  );
}

export default App;