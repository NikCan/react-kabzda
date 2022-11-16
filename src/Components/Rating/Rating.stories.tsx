import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
}
export const EmptyStars = () => <Rating onClick={x => x} value={0}/>
export const Rating1 = () => <Rating onClick={x => x} value={1}/>
export const Rating2 = () => <Rating onClick={x => x} value={2}/>
export const Rating3 = () => <Rating onClick={x => x} value={3}/>
export const Rating4 = () => <Rating onClick={x => x} value={4}/>
export const Rating5 = () => <Rating onClick={x => x} value={5}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating onClick={setRating} value={rating}/>
}