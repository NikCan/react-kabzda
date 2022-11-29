import React from "react";

type UnControllableAccordionTitleType = {
    callBack: () => void
    title: string
}
const UnControllableAccordionTitleSecret = (props: UnControllableAccordionTitleType) => {
    const onclickHandler = () => {
        props.callBack()
    }
    return <>
        <h3 onClick={onclickHandler}>{props.title}</h3>
    </>
}
export const UnControllableAccordionTitle = React.memo(UnControllableAccordionTitleSecret)