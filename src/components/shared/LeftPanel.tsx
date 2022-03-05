import React from 'react';

function LeftPanel(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <div className={"left__panel__title"}>
            <h1>{props.title}</h1>
        </div>
    );
}

export default LeftPanel;