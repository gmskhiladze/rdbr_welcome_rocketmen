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

function TechnicalSkillset() {

    const [skills, setSkills] : [Array<FetchData>, Function] = useState([]);

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

    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>
                    <select className={"input__select"} placeholder={"Skills"} name="Skills" id="Skills">

                        <option>Skills</option>

                        {skills.map((item:FetchData) => (
                            <option key={item.id} value={item.title}>
                                {item.title}
                            </option>
                        ))}
                    </select>

                    <input className={"input__text experience"} type={'text'} name={"Experience"} placeholder={"Experience Duration in Years"} required/>

                    <button className={"btn__add__language"} type={"submit"}>Add Programming Language</button>

                    <ul className={"list"}>
                        <li className={"list__items"} id={"php"}>
                            <div className={"skill__title"}>PHP</div>
                            <div className={"user__experience"}>Years of Experience: 3</div>
                            <div className={"remove__btn__container"}><button className={"remove__btn"}>{svgProvider("remove")}</button></div>
                        </li>

                        <li className={"list__items"} id={"php"}>
                            <div className={"skill__title"}>PHP</div>
                            <div className={"user__experience"}>Years of Experience: 3</div>
                            <div className={"remove__btn__container"}><button className={"remove__btn"}>{svgProvider("remove")}</button></div>
                        </li>
                    </ul>

                </div>

                <div className={"pagination"}>
                    <button className={"arrowLeft"}>{svgProvider("arrowLeft")}</button>
                    <div className={"circles"}>
                        <button className={"circle selected"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                    </div>
                    <button className={"arrowRight"}>{svgProvider("arrowRight")}</button>
                </div>

            </div>

            <RightPanel title={rightPanel.title}  desc={rightPanel.desc}/>

        </div>
    );
}

export default TechnicalSkillset;