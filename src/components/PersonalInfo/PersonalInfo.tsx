import React from 'react';

import '../shared/sharedStyles.scss'
import './PersonalInfo.scss'

import LeftPanel from "../shared/LeftPanel";
import RightPanel from "../shared/RightPanel";
import svgProvider from "../../helpers/svgProvider";

const leftPanel = {
    title: "Hey, Rocketeer, what are your coordinates?",
};

const rightPanel = {
    title: "Redberry Origins",
    desc: "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
};

function PersonalInfo() {
    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>
                    <input className={"input__text"} type={'text'} name={"firstName"} placeholder={"First Name"} required/>
                    <input className={"input__text"} type={'text'} name={"lastName"} placeholder={"Last Name"} required/>
                    <input className={"input__email"} type={'email'} name={"email"} placeholder={"E Mail"} required/>
                    <input className={"input__tel"} type={'tel'} name={"tel"} placeholder={"+995 5__ __ __ __"} required/>
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

export default PersonalInfo;