import React, {useEffect, useState} from 'react';

import './SubmittedItemList.scss'

import svgProvider from "../../helpers/svgProvider";
import axios from "axios";

export interface AppData {
    token: string,
    devtalk_topic: string,
    email: string,
    first_name: string,
    had_covid: boolean
    had_covid_at: string,
    last_name: string,
    phone: string,
    skills: [ {
        experience: number
        id: number
    }]
    something_special: string,
    vaccinated: boolean
    vaccinated_at: string,
    will_organize_devtalk: boolean
    work_preference: string,
}

function SubmittedItemList() {

    const [applications, setApplications] : [Array<AppData>, Function]  = useState([]);


    useEffect(() => {

        const token = "49149096-df4e-4309-ac35-18cc7eb065ae";

        const API_URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${token}`;

        const getSkills = async() => {
            try {
                return await axios.get(API_URL);
            } catch (error) {
                console.error(error);
            }
        }

        getSkills().then(res => setApplications(res?.data));

    }, []);

    return (
        <div className={"item__container"}>
             <div className={"item"}>
                 <div className="title">
                     <span>Submitted Applications</span>
                 </div>

                 { applications.map((el, index) => (
                     <div>
                         <div className="item__header">
                             <span>{index}</span>
                             {svgProvider("arrowDown")}
                         </div>
                         <div className="item__body">
                             <div className="left__side">
                                <div className={"PersonalInformation"}>
                                    <span>Personal Information</span>
                                    <span>First Name {el.first_name}</span>
                                    <span>Last Name {el.last_name}</span>
                                    <span>E Mail {el.email}</span>
                                    <span>Phone {el.phone}</span>
                                </div>

                                <div className={"CovidSituation"}>
                                    <span>Covid Situation</span>

                                    <label>how would you prefer to work?</label>
                                    <span>{el.work_preference}</span>
                                    <span>{el.work_preference}</span>
                                </div>
                             </div>

                             <div className="right__side">

                             </div>

                         </div>
                     </div>
                 ))}
             </div>
        </div>
    );
}

export default SubmittedItemList;