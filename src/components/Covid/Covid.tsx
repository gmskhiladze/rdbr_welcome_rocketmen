import React from 'react';

import '../shared/sharedStyles.scss'
import './Covid.scss'

import LeftPanel from "../shared/LeftPanel";
import svgProvider from "../../helpers/svgProvider";
import RightPanel from "../shared/RightPanel";

const leftPanel = {
    title: "Covid Stuff",
};

const rightPanel = {
    title: "Redberry Covid Policies",
    desc: "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. "
};

function Covid() {
    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>
                    <fieldset className={"fieldset"}>
                        <legend>how would you prefer to work?</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <label htmlFor="office">From Sairme Office</label>
                                <input type="radio"  name="office" value="From Sairme Office"/>
                            </div>

                            <div className={"option"}>
                                <label htmlFor="home">From Home</label>
                                <input type="radio"  name="home" value="From Home"/>
                            </div>

                            <div className={"option"}>
                                <label htmlFor="hybrid">Hybrid</label>
                                <input type="radio"  name="hybrid" value="Hybrid"/>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className={"fieldset"}>
                        <legend>Did you contact covid 19? :(</legend>
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

                    <fieldset className={"fieldset__date"}>
                        <legend>When?</legend>
                        <div className={"fieldset__date__options"}>

                            <div className={"date__option"}>
                                <input className={"input__date"} type="date"  name="date" placeholder={"Date"}/>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset className={"fieldset"}>
                        <legend>Have you been vaccinated?</legend>
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

                    <fieldset className={"fieldset"}>
                        <legend>When?</legend>
                        <div className={"fieldset__options"}>

                            <div className={"option"}>
                                <input className={"input__date"} type="date"  name="date" placeholder={"Date"}/>
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

export default Covid;