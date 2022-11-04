import {useState} from "react";
import {UnControllableStar} from "./UnControllableStar";

type UnControllableRatingType = {}
export const UnControllableRating = (props: UnControllableRatingType) => {
    const [value, setValue] = useState(0)


    return (
        <div>
            <UnControllableStar selected={value > 0} setValue={() => {setValue(1)}}/>
            <UnControllableStar selected={value > 1} setValue={() => {setValue(2)}}/>
            <UnControllableStar selected={value > 2} setValue={() => {setValue(3)}}/>
            <UnControllableStar selected={value > 3} setValue={() => {setValue(4)}}/>
            <UnControllableStar selected={value > 4} setValue={() => {setValue(5)}}/>
                   </div>
    )
}
