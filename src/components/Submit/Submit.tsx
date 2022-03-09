import React, {useState} from 'react';

import '../shared/sharedStyles.scss'
import './Submit.scss'
import axios from "axios";

const token = "49149096-df4e-4309-ac35-18cc7eb065ae";
const baseURL = "https://bootcamp-2022.devtest.ge/api/application";

function Submit({pages, page, page1, page2, page3, page4}: any) {

    const reqbody = {
        token: token,
        ...page1.data,
        skills: [...page2.data],
        ...page3.data,
        ...page4.data,
    }

    const createUser = () => {
        axios
            .post(baseURL, {
                "body": reqbody
            })
            .then((response) => {
                console.log((response.data));
            });
    }

    // const [isDisplay, setIsDisplay] = useState(false);

    const clickHandler = (e: any) => {
        e.preventDefault();
        createUser();
        console.log(page1)
        console.log(page2)
        console.log(page3)
        console.log(page4)

        // setIsDisplay(true);
        //
        // setTimeout( () => {
        //     pages(0)
        // }, 2000);
    }

    const switchBack = (e: any) => {
        pages(4)
    }

    return (
        <div className={"container"}>
            <div className={"buttons"}>
                <button type={"submit"} className={"btn__submit"} onClick={clickHandler} >Submit</button>
                <span className={"go__back"} onClick={switchBack}>go back</span>
            </div>
            {/*<div style={ !isDisplay ? { display: "block" } : { display: "none" }} className={"buttons"}>*/}
            {/*    <button type={"submit"} className={"btn__submit"} onClick={clickHandler} >Submit</button>*/}
            {/*    <span className={"go__back"} onClick={switchBack}>go back</span>*/}
            {/*</div>*/}

            {/*<div style={ isDisplay ? { display: "block" } : { display: "none" }} className={"thanks"}>*/}
            {/*    <span>Thanks for Joining 😊</span>*/}
            {/*</div>*/}
        </div>
    );
}

export default Submit;