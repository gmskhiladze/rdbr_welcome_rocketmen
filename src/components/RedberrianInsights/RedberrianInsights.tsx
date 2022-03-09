import React, {useState} from 'react';

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


function RedberrianInsights({pages, page, insights}: any) {

    const [about, setAbout] = useState({
        will_organize_devtalk: "No",
        devtalk_topic: "",
        something_special: ""
    });

    const changeHandler = (e: any) => {

        const {name, value} = e.target;

        if (name) {
            setAbout(prevState => {
                return {
                    ...prevState,
                    [name]: value
                }
            })
        }

    }

    const switchForward = (e: any) => {

        pages(5)
        if (e) {
            insights(about)
        }
    }

    const switchBack = (e: any) => {
        pages(3)
    }


    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>

                    <fieldset className={"fieldset"}>
                        <legend>Would you attend Devtalks and maybe also organize your own?</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <label><input type="radio"  name="will_organize_devtalk" value="Yes" onChange={changeHandler}/>Yes</label>

                            </div>

                            <div className={"option"}>
                                <label><input type="radio"  name="will_organize_devtalk" value="No" onChange={changeHandler}/>No</label>
                            </div>

                        </div>
                    </fieldset>


                    <fieldset className={"fieldset"}>
                        <legend>What would you speak about at Devtalk?</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <textarea name="devtalk_topic" placeholder={"I would..."} value={about.devtalk_topic} onChange={changeHandler}> </textarea>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className={"fieldset"}>
                        <legend>Tell us something special</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <textarea name="something_special" placeholder={"I ..."} value={about.something_special} onChange={changeHandler}> </textarea>
                            </div>

                        </div>
                    </fieldset>


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

export default RedberrianInsights;