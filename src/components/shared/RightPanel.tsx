import React from 'react';

function RightPanel(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; desc: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <div className={"right__panel"}>
            <div className={"right__panel__title"}>
                <h1>{props.title}</h1>
            </div>
            <div className={"right__panel__description"}>
                <span>{props.desc}</span>
            </div>
        </div>
    );
}

export default RightPanel;