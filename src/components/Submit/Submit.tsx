import React, {useState} from 'react';

import '../shared/sharedStyles.scss'
import './Submit.scss'

function Submit() {

    const [isDisplay, setIsDisplay] = useState(false);

    const clickHandler = (e: any) => {
        e.preventDefault();
        setIsDisplay(true);
    }

    return (
        <div className={"container"}>
            <div style={ !isDisplay ? { display: "block" } : { display: "none" }} className={"buttons"}>
                <button type={"submit"} className={"btn__submit"} onClick={clickHandler} >Submit</button>
                <span className={"go__back"}>go back</span>
            </div>

            <div style={ isDisplay ? { display: "block" } : { display: "none" }} className={"thanks"}>
                <span>Thanks for Joining 😊</span>
            </div>
        </div>
    );
}

export default Submit;