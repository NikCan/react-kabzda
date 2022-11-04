import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionType = {
    titleValue: string
    onClickCollapse: (collapsed:boolean) => void
    accordionCollapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle title={props.titleValue} accordionCollapsed={props.accordionCollapsed} onClickCollapse={props.onClickCollapse}/>
        {!props.accordionCollapsed && <AccordionBody/>}
    </>
}