import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import Find from "./components/Find";
import Csnearyou from "./components/Csnearyou";
import Option1 from "./components/Option1";
import Option3 from "./components/Option3";
import Option2 from "./components/Option2";
import Option4 from "./components/Option4";
import Option5 from "./components/Option5";
import Stn1 from "./components/Stn1";
import Stn2 from "./components/Stn2";
import Stn3 from "./components/Stn3";
import Stn4 from "./components/Stn4";
import Stn5 from "./components/Stn5";
import Stn6 from "./components/Stn6";
import Stn7 from "./components/Stn7";
import Stn8 from "./components/Stn8";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/find" element={<Find/>} />
        <Route path="/csnearyou" element={<Csnearyou/>} />
        <Route path="/option1" element={<Option1/>} />
        <Route path="/option2" element={<Option2/>} />
        <Route path="/option3" element={<Option3/>} />
        <Route path="/option4" element={<Option4/>} />
        <Route path="/option5" element={<Option5/>} />
        <Route path="/stn1" element={<Stn1/>} />
        <Route path="/stn2" element={<Stn2/>} />
        <Route path="/stn3" element={<Stn3/>} />
        <Route path="/stn4" element={<Stn4/>} />
        <Route path="/stn5" element={<Stn5/>} />
        <Route path="/stn6" element={<Stn6/>} />
        <Route path="/stn7" element={<Stn7/>} />
        <Route path="/stn8" element={<Stn8/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
