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

function PersonalInfo({pages, page, personalInfo, userInfo }: any) {

    const [error, setError] = useState({
        first_name: {
            error: "",
            isError: false
        },
        last_name: {
            error: "",
            isError: false
        },
        email: {
            error: "",
            isError: false
        },
        phone: {
            error: "",
            isError: false
        }
    });

    const [userData, setUserData] = useState({});

    const validateInput = (type: string, name: string, value: string) => {

        const validateText = new RegExp('^.{3,}$');
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validNumber = new RegExp('^\\+[9]{2}[5]\\d{9}$');

        if (type === "text") {
            if (validateText.test(value)){
                setError(prevState => {
                    return {
                        ...prevState,
                        [name] : {"error": "", isError: false}
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

                if (name === "first_name"){
                    setError(prevState => {
                        return {
                            ...prevState,
                            [name] : {"error": "* first name should include 2 or more characters", isError: true}
                        }
                    })
                } else {
                    setError(prevState => {
                        return {
                            ...prevState,
                            [name] : {"error": "* last name should include 2 or more characters", isError: true}
                        }
                    })
                    return false;
                }
            }
        }

        if (type === "email") {
            if (validEmail.test(value)){
                setError(prevState => {
                    return {
                        ...prevState,
                        [name] : {"error": "" , isError: false}
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
                setError(prevState => {
                    return {
                        ...prevState,
                        [name] : {"error": "* example: name@gmail.com", isError: true}
                    }
                })
                return false;
            }
        }

        if (type === "tel") {
            if (validNumber.test(value)){
                setError(prevState => {
                    return {
                        ...prevState,
                        [name] : {"error": "", isError: false}
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
                setError(prevState => {
                    return {
                        ...prevState,
                        [name] : {"error": "* mobile number should start with +995 5__ __ __", isError: true}
                    }
                })
                return false;
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
    }

    const switchForward = (e: any) => {

        e.preventDefault();

        if (e) {
            if (Object.keys(userData).length === 4) {
                userInfo(userData)
                pages(2)
            } else {
                alert("Fill inputs first")
            }
        }
    }

    const switchBack = () => {
        pages(0)
    }


    return (
        <>
        <div className={"container"}>
            <div className={"left__panel"}>

                <LeftPanel title={leftPanel.title}/>

                <div className={"input__container"}>

                    <form onSubmit={switchForward}>

                        <input className={"input__text"} type={'text'} id={"first_name"} name={"first_name"}
                               placeholder={"First Name"} onChange={changeHandler} required/>
                        <label htmlFor="first_name">{error.first_name.isError ? error.first_name.error : null}</label>
                        <input className={"input__text"} type={'text'} name={"last_name"} placeholder={"Last Name"}
                               onChange={changeHandler} required/>
                        <label htmlFor="last_name">{error.last_name.isError ? error.last_name.error : null}</label>
                        <input className={"input__email"} type={'email'} name={"email"} placeholder={"E Mail"}
                               onChange={changeHandler} required/>
                        <label htmlFor="firstName">{error.email.isError ? error.email.error : null}</label>
                        <input className={"input__tel"} type={'tel'} name={"phone"} placeholder={"+995 5__ __ __ __"}
                               maxLength={13} onChange={changeHandler}/>
                        <label htmlFor="firstName">{error.phone.isError ? error.phone.error : null}</label>
                    </form>
                </div>

                <div className={"pagination"}>
                    <button className={"arrowLeft"} onClick={switchBack}>{svgProvider("arrowLeft")}</button>
                    <div className={"circles"}>
                        <button className={`circle ${page > 0 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                        <button className={"circle"}>{svgProvider("circle")}</button>
                    </div>
                    <button className={"arrowRight"} onSubmit={switchForward} onClick={switchForward}>{svgProvider("arrowRight")}</button>
                </div>

            </div>
            <RightPanel title={rightPanel.title} desc={rightPanel.desc}/>

            </div>
        </>
    );
}


export default PersonalInfo;