import React from 'react';

import '../shared/sharedStyles.scss'
import './RedberrianInsights.scss'

import LeftPanel from "../shared/LeftPanel";
import svgProvider from "../../helpers/svgProvider";
import RightPanel from "../shared/RightPanel";

const leftPanel = {
    title: "What about you?",
};

const rightPanel = {
    title: "Redberrian Insights",
    desc: "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!"
};


function RedberrianInsights() {
    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>

                    <fieldset className={"fieldset"}>
                        <legend>Would you attend Devtalks and maybe also organize your own?</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <label htmlFor="yes">Yes</label>
                                <input type="radio"  name="yes" value="Yes"/>
                            </div>
 
                            <div className={"option"}>
                                <label htmlFor="no">No</label>
                                <input type="radio"  name="no" value="No"/>
                            </div>

                        </div>
                    </fieldset>


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

export default RedberrianInsights;