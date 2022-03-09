import React from 'react';
import svgProvider from "../../helpers/svgProvider";
import './Langing.scss';


function Langing({ready, showApplications}: any) {

    const clickHandler = (e: React.MouseEvent<HTMLElement>): void => {
        if (e) {
            ready(true);
        }
    }

    const showApplication = (e: any) => {
        if (e){
            showApplications(true)
        }
    }

    return (
        <div className={"langing__container"}>
            <div className={"welcome__text"}>
                <h1>Welcome Rocketeer !</h1>
            </div>

            <div className={"buttons"}>
                <button className={"btn__start"} onClick={clickHandler}>Start Questionnaire</button>
                <span className={"submitted__applications"} onClick={showApplication}>Submitted Applications</span>
            </div>

            <div className={"rocketMan"}>
                {svgProvider("rocketMan")}
            </div>
        </div>
    );
}

export default Langing;