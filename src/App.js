import './App.css';
import React, { useState, useEffect } from 'react';
const { Wxrd } = require("@entomdt/myriad-core");
const WxrdListDisplay = require('./WxrdListDisplay').default;

function App() {

  const [currentWxrd, setCurrentWxrd] = useState({content: ''});
  const [wxrds, setWxrds] = useState([]);

  const saveWxrd = () => {

    const newWxrd = Wxrd(currentWxrd.content);

    setWxrds([...wxrds, newWxrd]);
    clearFields();
  };

  useEffect(() => {
    // set event listeners to make return key press button
    document.getElementById("textfield1")
      .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn1").click();
        }
    });

    document.getElementById("textfield1").focus();
  });

  const clearFields = () => {
    document.getElementById("textfield1").value = "";
    setCurrentWxrd('');
    document.getElementById("textfield1").focus();

  }

  const handleWxrdChange = (e) => {
    setCurrentWxrd({...currentWxrd, [e.target.name]: e.target.value})
  };

  return (

    <div className="App">
      <header className="App-header">
        <div id="input">
          <input type="text" id="textfield1" name="content" placeholder="Your wxrd..." value={currentWxrd.content} onChange={handleWxrdChange}/>
          <button id="btn1" onClick={saveWxrd} disabled={!currentWxrd.content}>Commit</button>
        </div>
        <WxrdListDisplay wxrds={wxrds}/>
      </header>
    </div>
  );
}

export default App;
