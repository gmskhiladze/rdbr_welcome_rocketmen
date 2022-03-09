import React, {useEffect, useState} from 'react';

import '../shared/sharedStyles.scss'
import './TechnicalSkillset.scss'

import LeftPanel from "../shared/LeftPanel";
import RightPanel from "../shared/RightPanel";
import svgProvider from "../../helpers/svgProvider";

import axios from "axios";

const leftPanel = {
    title: "Tell us about your skills",
};

const rightPanel = {
    title: "A bit about our battles",
    desc: "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry."
};

export interface FetchData {
    id: number,
    title: string
}

export interface usersData {
    id?: number,
    experience?: number
}

const skillTitles = ["HTML", "CSS", "PHP", "Laravel", "React.JS", "Vue.JS", "Svelte", "Angular"];

function TechnicalSkillset({pages, page, personSkills}: any) {

    const [skillsError, setSkillsError] = useState({
        skills: {
            error: "",
            isError: false
        },
        experience: {
            error: "",
            isError: false
        }
    });

    const [skills, setSkills] : [Array<FetchData>, Function] = useState([]);
    const [userSkills, setUserSkills] = useState({id: 0, experience: 0});
    const [userData, setUserData] = useState <usersData[]>([]);

    useEffect(() => {

        const API_URL = "https://bootcamp-2022.devtest.ge/api/skills";

        const getSkills = async() => {
            try {
                return await axios.get(API_URL);
            } catch (error) {
                console.error(error);
            }
        }

        getSkills().then(res => setSkills(res?.data));

    }, []);

    const skillsHandler = (e: any) => {

        const {value} = e.target;

        if (e && value === "none"){
            setSkillsError(prevState => {
                return{
                    ...prevState,
                    "skills": {
                        "error": "* please chose skill",
                        "isError": true
                    }
                }
            })
        } else {
            setSkillsError(prevState => {
                return{
                    ...prevState,
                    "skills": {
                        "error": "",
                        "isError": false
                    }
                }
            })

            setUserSkills(prevState => {
                return{
                    ...prevState,
                    "id": parseInt(value)
                }
            })
        }

    }

    const changeHandler = (e: any) => {

        const validateInput = new RegExp('^\\d');

        const {value} = e.target;

        if (validateInput.test(value)){

            setUserSkills(prevState => {
                return {
                    ...prevState,
                    "experience": parseInt(value)
                }
            })

            setSkillsError(prevState => {
                return{
                    ...prevState,
                    "experience": {
                        "error": "",
                        "isError": false
                    }
                }
            })

            e.target.classList.remove("invalid")

        } else {

            setSkillsError(prevState => {
                return{
                    ...prevState,
                    "experience": {
                        "error": "* please enter valid input 2 digit",
                        "isError": true
                    }
                }
            })
            setUserSkills(prevState => {
                return {
                    ...prevState,
                    "experience": 0
                }
            })

            e.target.classList.add("invalid")

        }

    }

    const addLanguageHandler = () => {
        if (!skillsError.skills.isError && !skillsError.experience.isError){
            if (userSkills.id !== 0){
                setUserData((prevState: any) => {
                    return [userSkills, ...prevState,];
                });

                setUserSkills({id: 0, experience: 0})
            }
        } else {
            alert("enter valid values first")
        }
    }

    const removeHandler = (e: any) => {
        const {value} = e.target;

        if (value) {
            setUserData(userData.filter((el, index) => index !== parseInt(value)));
        }

    }

    const switchForward = (e: any) => {

        if (e) {
            pages(3)
            personSkills(userData);
        }
    }

    const switchBack = (e: any) => {
        pages(1)
    }


    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>
                    <select className={"input__select"} value={userSkills.id} placeholder={"Skills"} name="Skills" id="Skills" onChange={skillsHandler}>

                        <option value={"none"}>Skills</option>

                        {skills.map((item:FetchData) => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="Skills">{skillsError.skills.isError ? skillsError.skills.error : null}</label>

                    <div>
                        <input className={"input__text experience"} type={'tel'} name={"Experience"} placeholder={"Experience Duration in Years"} maxLength={2} onChange={changeHandler} required/>
                        <label htmlFor="Experience">{skillsError.experience.isError ? skillsError.experience.error : null}</label>
                    </div>

                    <button className={"btn__add__language"} onClick={addLanguageHandler}>Add Programming Language</button>

                    <ul className={"list"}>
                        { userData.map((el, index) => (
                            <li key={index} className={"list__items"}>
                                <div className={"skill__title"}>{skillTitles[index]}</div>
                                <div className={"user__experience"}>Years of Experience: {el.experience}</div>
                                <div className={"remove__btn__container"}><button className={"remove__btn"} value={index} onClick={removeHandler} >{svgProvider("remove")}</button></div>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className={"pagination"}>
                    <button className={"arrowLeft"} onClick={switchBack}>{svgProvider("arrowLeft")}</button>
                    <div className={"circles"}>
                        <button className={`circle ${page > 0 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                        <button className={`circle ${page > 1 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                        <button className={`circle ${page > 2 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                        <button className={`circle ${page > 3 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                    </div>
                    <button className={"arrowRight"} onClick={switchForward}>{svgProvider("arrowRight")}</button>
                </div>

            </div>

            <RightPanel title={rightPanel.title}  desc={rightPanel.desc}/>

        </div>
    );
}

export default TechnicalSkillset;