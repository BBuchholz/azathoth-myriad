import './App.css';
import { useState } from 'react';
const { Wxrd } = require("@entomdt/myriad-core");
const WxrdListDisplay = require('./WxrdListDisplay').default;

function App() {

  const [currentWxrd, setCurrentWxrd] = useState({content: ''});
  const [wxrds, setWxrds] = useState([]);

  const saveWxrd = () => {

    const newWxrd = Wxrd(currentWxrd.content);

    setWxrds([...wxrds, newWxrd]);
  };

  const handleWxrdChange = e => setCurrentWxrd({...currentWxrd, [e.target.name]: e.target.value});

  return (
    <div className="App">
      <header className="App-header">
        <div id="input">
          <input type="text" name="content" placeholder="Your wxrd..." value={currentWxrd.content} onChange={handleWxrdChange}/>
          <button onClick={saveWxrd} disabled={!currentWxrd.content}>Commit</button>
        </div>
        <WxrdListDisplay wxrds={wxrds}/>
      </header>
    </div>
  );
}

export default App;
