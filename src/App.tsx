import React, {useState} from 'react';
import './App.scss';

// import svgProvider from "./helpers/svgProvider";
import Langing from "./components/Langing/Langing";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import TechnicalSkillset from "./components/TechnicalSkillset/TechnicalSkillset";
import Covid from "./components/Covid/Covid";

function App() {

  const [isReady, setIsReady] = useState(false);
  // const [personalData, setPersonalData] = useState({});

  const startSurvey = (e: boolean) => {
    setIsReady(true)
  }


  return (
    <div className="App">

      { !isReady && <Langing ready={startSurvey}/>}

      {/*{ isReady && <PersonalInfo/>}*/}
      {/*{ isReady && <TechnicalSkillset/>}*/}
      { isReady && <Covid/>}

    </div>
  );
}

export default App;