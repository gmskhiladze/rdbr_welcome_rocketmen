import React, {useState} from 'react';

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

    const [isValid, setIsValid] = useState({firstName: false, lastName: false, email: false, tel: false});
    const [userData, setUserData] = useState({});

    const validateInput = (type: string, name: string, value: string): boolean | undefined => {

        const validateText = new RegExp('^.{3,}$');
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validNumber = new RegExp('^\\+[9]{2}[5]\\d{9}$');

        if (type === "text") {
            if (validateText.test(value)){
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : true
                    }
                })

                setUserData(prevState => {
                    return {
                        ...prevState,
                        [name] : value
                    }
                })

                return true;
            } else {
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : false
                    }
                })
                return false;
            }
        }

        if (type === "email") {
            if (validEmail.test(value)){
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : true
                    }
                })

                setUserData(prevState => {
                    return {
                        ...prevState,
                        [name] : value
                    }
                })

                return true;
            } else {
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : false
                    }
                })
                return false;
            }
        }

        if (type === "tel") {
            if (validNumber.test(value)){
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : true
                    }
                })

                setUserData(prevState => {
                    return {
                        ...prevState,
                        [name] : value
                    }
                })

                return true;
            } else {
                setIsValid(prevState => {
                    return {
                        ...prevState,
                        [name] : false
                    }
                })
                return false;
            }
        }

    }

    const inputsIsFilled = (e: any) => {

        if (e) {
            if (isValid.firstName && isValid.lastName && isValid.email && isValid.tel) {
                console.log(userData)
                console.log("ready")
            } else {
                console.log("notReady")
            }
        }
    }

    const changeHandler = (e : any) => {

        const {type, name, value} = e.target;

        if (e){
            if (!validateInput(type, name, value)){
                e.target.classList.add("invalid");
            } else {
                e.target.classList.remove("invalid");
            }
        }

        console.log(isValid);
        console.log(userData);

    }

    return (
        <div className={"container"}  >
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>
                    <input className={"input__text"} type={'text'} name={"firstName"} placeholder={"First Name"} onChange={changeHandler} required/>
                    <input className={"input__text"} type={'text'} name={"lastName"} placeholder={"Last Name"} onChange={changeHandler} required/>
                    <input className={"input__email"} type={'email'} name={"email"} placeholder={"E Mail"} onChange={changeHandler} required/>
                    <input className={"input__tel"} type={'tel'} name={"tel"} placeholder={"+995 5__ __ __ __"} maxLength={13} onChange={changeHandler}/>
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
                    <button className={"arrowRight"} onClick={inputsIsFilled}>{svgProvider("arrowRight")}</button>
                </div>

            </div>

            <RightPanel title={rightPanel.title}  desc={rightPanel.desc}/>

        </div>
    );
}


export default PersonalInfo;