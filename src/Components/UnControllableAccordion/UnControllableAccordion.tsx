import React, {useReducer} from "react";
import {UnControllableAccordionTitle} from "./UnControllableAccordionTitle";
import {UnControllableAccordionBody} from "./UnControllableAccordionBody";
import {reducer} from "./reducer";

type UnControllableAccordion = {}

export type StateType = {
    collapsed: boolean
}

const UnControllableAccordionSecret = (props: UnControllableAccordion) => {
    const title = "---UnControllable Menu---"
    const [state, dispatch] = useReducer(reducer, {collapsed: false})
    const collapsedMenu = () => {
        dispatch({type: "TOGGLE-COLLAPSED"})
    }
    return <div>
        <UnControllableAccordionTitle callBack={collapsedMenu} title={title}/>
        {!state.collapsed && <UnControllableAccordionBody/>}
    </div>
}
export const UnControllableAccordion = React.memo(UnControllableAccordionSecret)