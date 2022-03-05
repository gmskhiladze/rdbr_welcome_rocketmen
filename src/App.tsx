import React, {useState} from 'react';
import './App.scss';

import Langing from "./components/Langing/Langing";


function App() {

  const [isReady, setIsReady] = useState(false);
  // const [personalData, setPersonalData] = useState({});

  const startSurvey = (e: boolean) => {
    setIsReady(true)
  }


  return (
    <div className="App">

      { !isReady && <Langing ready={startSurvey}/>}



    </div>
  );
}

export default App;