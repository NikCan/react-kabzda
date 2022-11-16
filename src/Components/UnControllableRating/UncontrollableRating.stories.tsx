import React, {useState} from 'react';
import {UnControllableRating} from "./UnControllableRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControllableRating stories',
    component: UnControllableRating,
}

const callback = action("changed")
export const Rating0 = () => <UnControllableRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UnControllableRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UnControllableRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UnControllableRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UnControllableRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UnControllableRating defaultValue={5} onChange={callback}/>
