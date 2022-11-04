import {useState} from "react";

type UnControllableAccordionTitleType = {
    callBack: () => void
    title: string
}
export const UnControllableAccordionTitle = (props: UnControllableAccordionTitleType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return <>
        <h3 onClick={onclickHandler}>{props.title}</h3>
    </>
}