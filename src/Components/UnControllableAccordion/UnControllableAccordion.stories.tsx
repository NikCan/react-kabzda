import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UnControllableAccordion} from "./UnControllableAccordion";

export default {
    title: 'UnControllableAccordion stories',
    component: UnControllableAccordion,
}
export const Mode = () => <UnControllableAccordion />
