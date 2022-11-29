import React, {useState} from "react";
import {UnControllableStar} from "./UnControllableStar";
import {RatingValueType} from "../Rating/Rating";

type UnControllableRatingType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
const UnControllableRatingSecret = (props: UnControllableRatingType) => {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <UnControllableStar selected={value > 0} setValue={() => {
                setValue(1);
                props.onChange(1)
            }}/>
            <UnControllableStar selected={value > 1} setValue={() => {
                setValue(2);
                props.onChange(2)
            }}/>
            <UnControllableStar selected={value > 2} setValue={() => {
                setValue(3);
                props.onChange(3)
            }}/>
            <UnControllableStar selected={value > 3} setValue={() => {
                setValue(4);
                props.onChange(4)
            }}/>
            <UnControllableStar selected={value > 4} setValue={() => {
                setValue(5);
                props.onChange(5)
            }}/>
        </div>
    )
}

export const UnControllableRating = React.memo(UnControllableRatingSecret)

