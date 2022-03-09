import React, {useState} from 'react';

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

function Covid({pages, page, stuff}: any) {

    const [stuffCovid, setStuffCovid] = useState({
        work_preference: "",
        had_covid: false,
        had_covid_at: "",
        vaccinated: false,
        vaccinated_at: "",
    });

    console.log(stuffCovid);

    const changeHandler = (e: any) => {

        const {name, value} = e.target;

        console.log(name, value);

        if (name) {

            if (name === "had_covid" || name === "vaccinated") {
                if (value === "true"){
                    setStuffCovid(prevState => {
                        return {
                            ...prevState,
                            [name]: true
                        }
                    })
                } else {
                    setStuffCovid(prevState => {
                        return {
                            ...prevState,
                            [name]: false
                        }
                    })
                }
            } else {
                setStuffCovid(prevState => {
                    return {
                        ...prevState,
                        [name]: value
                    }
                })
            }
        }
    }

    const switchForward = (e: any) => {

        if (e) {
            stuff(stuffCovid)
            pages(4)
        }
    }

    const switchBack = (e: any) => {
        pages(2)
    }

    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>

                    <form>

                        <fieldset className={"fieldset"} id={"work_preference"}>
                            <legend>how would you prefer to work?</legend>
                            <div className={"fieldset__options"}>

                                <div className={"option"}>
                                    <label><input type="radio" name="work_preference" value="from_sairme_office" onChange={changeHandler}/>From Sairme Office</label>
                                </div>

                                <div className={"option"}>
                                    <label><input type="radio"  name="work_preference" value="from_home" onChange={changeHandler}/>From Home</label>
                                </div>

                                <div className={"option"}>
                                    <label><input type="radio"  name="work_preference" value="hybrid" onChange={changeHandler}/>Hybrid</label>
                                </div>

                            </div>
                        </fieldset>

                        <fieldset className={"fieldset"} id={"had_covid"}>
                            <legend>Did you contact covid 19? :(</legend>
                            <div className={"fieldset__options"}>

                                <div className={"option"}>
                                    <label><input type="radio"  name="had_covid" value="true" onChange={changeHandler}/>Yes</label>

                                </div>

                                <div className={"option"}>
                                    <label><input type="radio"  name="had_covid" value="false" onChange={changeHandler}/>No</label>
                                </div>

                            </div>
                        </fieldset>

                        <fieldset className={"fieldset__date"}>
                            <legend>When?</legend>
                            <div className={"fieldset__date__options"}>

                                <div className={"date__option"}>
                                    <input className={"input__date"} type="date" name="had_covid_at" disabled={!stuffCovid.had_covid} onChange={changeHandler} placeholder={"Date"} />
                                </div>

                            </div>
                        </fieldset>

                        <fieldset className={"fieldset"} id={"vaccinated"}>
                            <legend>Have you been vaccinated?</legend>
                            <div className={"fieldset__options"}>

                                <div className={"option"}>
                                    <label><input type="radio"  name="vaccinated" value="true" onChange={changeHandler}/>Yes</label>

                                </div>

                                <div className={"option"}>
                                    <label><input type="radio"  name="vaccinated" value="false" onChange={changeHandler}/>No</label>
                                </div>

                            </div>
                        </fieldset>

                        <fieldset className={"fieldset"}>
                            <legend>When?</legend>
                            <div className={"fieldset__options"}>

                                <div className={"option"}>
                                    <input className={"input__date"} type="date"  name="vaccinated_at" placeholder={"Date"} disabled={!stuffCovid.vaccinated} onChange={changeHandler}/>
                                </div>

                            </div>
                        </fieldset>

                    </form>

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

export default Covid;