import React from "react";

type AccordionTitleType = {
    title: string
    onClickCollapse: (collapsed: boolean) => void
    accordionCollapsed: boolean
    style: { color: string }
}
const AccordionTitleSecret = (props: AccordionTitleType) => {
    return <>
        <h3 style={props.style} onClick={() => props.onClickCollapse(!props.accordionCollapsed)}>{props.title}</h3>
    </>
}
export const AccordionTitle = React.memo(AccordionTitleSecret)