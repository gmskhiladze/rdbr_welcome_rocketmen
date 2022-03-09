import React, {useState} from 'react';
import './App.scss';

import Langing from "./components/Langing/Langing";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import TechnicalSkillset from "./components/TechnicalSkillset/TechnicalSkillset";
import Covid from "./components/Covid/Covid";
import RedberrianInsights from "./components/RedberrianInsights/RedberrianInsights";
import Submit from "./components/Submit/Submit";
import SubmittedItemList from "./components/SubmittedItemList/SubmittedItemList";

function App({getData}: any) {

  const [page, setPage] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [applicationIsReady, setApplicationIsReady] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});
  const [skills, setSkills] = useState({});
  const [covidStuff, setCovidStuff] = useState({});
  const [aboutYou, setAboutYou] = useState({});

  console.log(page)
  console.log(isReady)
  console.log(personalInfo)
  console.log(skills)
  console.log(covidStuff)
  console.log(aboutYou)

  const startSurvey = (e: boolean) => {
    setIsReady(true)
    setPage(1)
  }

  const userInfo = (data: object) => {
    setPersonalInfo(prevState => {
      return{
        ...prevState,
        data
      }
    })
  }

  const personSkills = (data: object) => {
    setSkills(prevState => {
      return{
        ...prevState,
        data
      }
    })
  }

  const stuff = (data : object) => {
    setCovidStuff(prevState => {
      return{
        ...prevState,
        data
      }
    })
  }

  const insights = (data : object) => {
    setAboutYou(prevState => {
      return{
        ...prevState,
        data
      }
    })
  }

  const pages = (pageNum: number) => {
    setPage(pageNum)

    if (pageNum === 0) {
      setIsReady(false);
    }
  }

  const showApplications = (data: boolean) => {
      setApplicationIsReady(data);
  }

  console.log(applicationIsReady)

  return (
    <div className="App">

      { !isReady && page === 0 &&<Langing showApplications={showApplications} ready={startSurvey}/>}

      { isReady ? page === 1 ? <PersonalInfo pages={pages} page={page} userInfo={userInfo} personalInfo={personalInfo}/> : "" : ""}
      { isReady ? page === 2 ? <TechnicalSkillset pages={pages} page={page} personSkills={personSkills}/> : "" : ""}
      { isReady ? page === 3 ? <Covid pages={pages} page={page} stuff={stuff}/> : "" : ""}
      { isReady ? page === 4 ? <RedberrianInsights pages={pages} page={page} insights={insights}/> : "" : ""}
      { isReady ? page === 5 ? <Submit pages={pages} page={page} page1={personalInfo}  page2={skills}  page3={covidStuff}  page4={aboutYou}/> : "" : ""}

      { applicationIsReady && <SubmittedItemList/>}
    </div>
  );
}

export default App;