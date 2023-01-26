import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { HashRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import EnterCode from './pages/enterCode'


function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path = '/home' element ={<Home />} />
            <Route path = '/login' element ={<Login />} />
              <Route path   ='/enter-code' element= {<EnterCode />}/>
          </Routes>
        </div>
      </Router>

  )
}

export default App;

