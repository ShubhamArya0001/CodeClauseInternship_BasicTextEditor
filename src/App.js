
import React from 'react';
import { useState } from 'react';

import Module1 from './Module1';
import NavBar from './NavBar';
import './App.css';
import Alert from './Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
    const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Disabled", "danger");
      document.title = 'TextUtils- Light Mode';
    
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextUtils- Dark Mode';
    }
  }
  return (


    
    <div className="container my-3">

      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Module1  mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    
    </div>
 
  )
}
export default App;
