import { useState } from 'react';
import './App.css';
import Darkmode from './components/Darkmode';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import State from './components/State';
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert('');
    }, 2000);
  };
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Enabling Dark Mode', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Enabling Light Mode', 'success');
    }
  }
  return (
    <Router>
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />  
        <Alert alert={alert} message='message' type='success'/>
        <Routes>
        <Route exact path="/" element={<State />} />
        <Route exact path="/darkmode" element={<Darkmode showAlert={showAlert} />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
