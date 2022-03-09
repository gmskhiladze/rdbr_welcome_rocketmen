import React, {useState} from 'react';

import '../shared/sharedStyles.scss'
import './Submit.scss'
import axios, {AxiosRequestConfig} from "axios";

// const token = "f1e4db10-7839-42e3-907a-e3f183b1ac9f";
const token = "49149096-df4e-4309-ac35-18cc7eb065ae";

function Submit({pages, page, page1, page2, page3, page4}: any) {

    const [isDisplay, setIsDisplay] = useState(false);

    const createUser = (body: object) => {

        const data = JSON.stringify(body);

        const config:AxiosRequestConfig = {
            method: 'post',
            url: 'https://bootcamp-2022.devtest.ge/api/application',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.status));
                if (JSON.stringify(response.status) === "201"){
                    setIsDisplay(true);
                    setTimeout( () => {
                        pages(0)
                    }, 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const clickHandler = (e: any) => {
        e.preventDefault();

        const reqbody = {
            token: token,
            ...page1.data,
            skills: [...page2.data],
            ...page3.data,
            ...page4.data,
        }

        createUser(reqbody);

    }

    const switchBack = (e: any) => {
        pages(4)
    }

    return (
        <div className={"container"}>

            <div style={ !isDisplay ? { display: "block" } : { display: "none" }} className={"buttons"}>
                <button type={"submit"} className={"btn__submit"} onClick={clickHandler} >Submit</button>
                <span className={"go__back"} onClick={switchBack}>go back</span>
            </div>

            <div style={ isDisplay ? { display: "block" } : { display: "none" }} className={"thanks"}>
                <span>Thanks for Joining 😊</span>
            </div>
        </div>
    );
}

export default Submit;