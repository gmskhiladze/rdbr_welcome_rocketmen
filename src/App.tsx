import React, {useState} from 'react';
import './App.scss';

import Langing from "./components/Langing/Langing";
import svgProvider from "./helpers/svgProvider";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";


function App() {

  const [isReady, setIsReady] = useState(false);
  // const [personalData, setPersonalData] = useState({});

  const startSurvey = (e: boolean) => {
    setIsReady(true)
  }


  return (
    <div className="App">

      { !isReady && <Langing ready={startSurvey}/>}

      { isReady && <PersonalInfo/>}

    </div>
  );
}

export default App;