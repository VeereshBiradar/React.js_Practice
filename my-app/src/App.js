import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

//react router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //will say whether dark mode is enable

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'orange';
      showAlert("Hi There this is great!!!", "sucess");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'red';
      showAlert("Hi this is gonnabe be incredible", "sucess");
    }
  }
  return (
    <>
    <div>
    <Navbar title="My-app" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm heading="Enter the text here" />

    </div>
    

      {/* <Router>
        <Navbar title="My-app" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/About'>
              <About/>
            </Route>
            <Route exact path='/'>
              <TextForm heading="Enter the text here" />
            </Route>
          </Routes>

        </div>
      </Router> */}

    </>
  );
}

export default App;
