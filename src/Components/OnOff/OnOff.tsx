import React from "react";

type OnOffPropsType = {
    onClickOnOff: (on: boolean) => void
    on: boolean
}

const OnOffSecret = (props: OnOffPropsType) => {
    const divStyle = {display: "flex"}
    const onStyle = {
        fontSize: "x-large",
        width: "200px",
        height: "100px",
        border: "1px solid black",
        background: props.on ? "green" : "white"
    }
    const offStyle = {
        fontSize: "x-large",
        width: "200px",
        height: "100px",
        border: "1px solid black",
        background: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "20px",
        background: props.on ? "green" : "red"
    }

    return (<>
            <div style={divStyle}>
                <div style={onStyle} onClick={() => props.onClickOnOff(true)}>on</div>
                <div style={offStyle} onClick={() => props.onClickOnOff(false)}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        </>
    )
}

export const OnOff = React.memo(OnOffSecret)