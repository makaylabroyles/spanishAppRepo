import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { HashRouter as Router, Routes, Route}
  from 'react-router-dom';
import themePage from './pages/themePage';
import Login from './pages/login';
import EnterCode from './pages/enterCode';
import Home from "./pages/home";



function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
              <Route path = '/home'  element={<Home />} />
            <Route path = '/choose-a-theme' element ={<themePage />} />
            <Route path = '/login' element ={<Login />} />
            <Route path = '/enter-code'  element={<EnterCode />} />
          </Routes>
        </div>
      </Router>

  )
}

export default App;

