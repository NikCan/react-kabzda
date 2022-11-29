import {RatingValueType} from "./Rating";
import React from "react";

type StarType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

const StarSecret = (props: StarType) => {
    const onClickHandler = () => {
        props.onClick(props.value)
    }
    return <span onClick={onClickHandler}>{props.selected ? <b>★ </b> : "★ "}</span>
}
export const Star = React.memo(StarSecret)
