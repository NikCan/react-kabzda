import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string
    value: number
}
export type AccordionType = {
    titleValue: string
    onClickCollapse: (collapsed: boolean) => void
    accordionCollapsed: boolean
    /**
     *Elements that are showed when accordion is not collapsed
     */
    items: ItemType []
    color?: string
}
const items: ItemType[] = [
    {title: '1', value: 1},
    {title: '2', value: 2},
    {title: '3', value: 3},
    {title: '4', value: 4}
]
export const Accordion = (props: AccordionType) => {
    return <>
        <AccordionTitle title={props.titleValue}
                        style={props.color ? {color: props.color} : {color:"red"}}
                        accordionCollapsed={props.accordionCollapsed}
                        onClickCollapse={props.onClickCollapse}/>
        {!props.accordionCollapsed && <AccordionBody items={items}/>}
    </>
}