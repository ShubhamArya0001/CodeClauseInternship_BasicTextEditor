
import React from 'react';
import { useState } from 'react';
// import { BrowserRouter,
//    Routes, 
//    Route} from "react-router-dom";
// import About from './About';
import Module1 from './Module1';
import NavBar from './NavBar';
import './App.css';
import Alert from './Alert';
//import Home from './Home';
function App() {
  // import Info from './Info';
  // import Form from './Form';
  // const [number ,setNumber]  = useState(0);
  // // const x = () => {
  // //   console.log("x function called");
  // // };
  // //const value = [{userName:"John",userAge:21,userClass:"4th year"}];
  // const adHandler =()=>{
  //   setNumber((prev) => prev+1);
  // }
  //  const miusHandler=()=>{
  // setNumber((prev) => prev-1);
  // }
  //   <>
  //   <div className="box">
  //     <div className="display">{number}</div>
  //     <button onClick={adHandler}>Add +</button>
  //     <button onClick = {miusHandler}>Minus -</button>
  //     </div>
  /* <Info name={value[0].userName} age={value[0].userAge} class ={value[0].userClass} />
  <Box>
  <Form/>
  <Info name={value[0].userName} age={value[0].userAge} class ={value[0].userClass} />
  </Box> */
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
      //   setInterval(()=>{
      // document.title = 'download free version';
      //   },2000);

      //  setInterval(()=>{
      //   document.title = 'download paid version';
      //     },1500);
      //    }
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'TextUtils- Dark Mode';
    }
  }
  return (


    //<BrowserRouter>
    <div className="container my-3">

      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Module1  mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      {/* <Routes>
        <Route exact path="/"/> */}

      {/* <Route exact path="/home" */}


       
      {/* <Route exact path="/about"c

      {/* </Routes> */}
    </div>
    // </BrowserRouter>
  )
}
export default App;