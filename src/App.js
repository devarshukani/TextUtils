import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg : message,
      type : type 
     })
     setTimeout(() => {
      setAlert( null);
     }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Dark Mode Disabled", "success")
    }
  }

  return (
    <Router>
    <Navbar siteName="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-4">
      <Routes>
          <Route path="/about"  element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm  heading="Text Analyzer" mode={mode} showAlert={showAlert}/>} />
      </Routes>
    </div> 
    </Router> 
  );
}

export default App;
