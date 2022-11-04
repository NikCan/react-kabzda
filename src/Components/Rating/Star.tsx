import {RatingValueType} from "./Rating";

type StarType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

export const Star = (props: StarType) => {
    const onClickHandler = () => {
        props.onClick(props.value)
    }
    return <span onClick={onClickHandler}>{props.selected ? <b>★ </b> : "★ "}</span>
}

