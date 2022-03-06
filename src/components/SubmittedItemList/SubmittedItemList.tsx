import React from 'react';

import './SubmittedItemList.scss'

import svgProvider from "../../helpers/svgProvider";

function SubmittedItemList() {
    return (
        <div className={"item__container"}>
             <div className={"item"}>
                 <div className="title">
                     <span>Submitted Applications</span>
                 </div>
                 <div className="item__header">
                     <span>1</span>
                     {svgProvider("arrowDown")}
                 </div>
                 <div className="item__body">
                     <div className="left__side">

                     </div>

                     <div className="right__side">

                     </div>

                 </div>
             </div>
        </div>
    );
}

export default SubmittedItemList;