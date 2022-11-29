import React from "react";

type UnControllableStarType = {
    selected: boolean
    setValue: () => void
}

const UnControllableStarSecret = (props: UnControllableStarType) => {
    return <span onClick={() => {props.setValue()}}>
        {props.selected ? <b>★ </b> : "★ "}</span>
}
export const UnControllableStar = React.memo(UnControllableStarSecret)
