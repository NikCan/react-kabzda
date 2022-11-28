import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type ItemType = {
    title: string
    id: number
}
export type AccordionType = {
    titleValue: string
    onClickCollapse: (collapsed: boolean) => void
    accordionCollapsed: boolean
    onClickItem: (id: number) => void
    /**
     *Elements that are showed when accordion is not collapsed
     */
    items: ItemType []
    color?: string
}
const items: ItemType[] = [
    {title: '1', id: 1},
    {title: '2', id: 2},
    {title: '3', id: 3},
    {title: '4', id: 4}
]
export const Accordion = (props: AccordionType) => {
        return <>
        <AccordionTitle title={props.titleValue}
                        style={props.color ? {color: props.color} : {color:"red"}}
                        accordionCollapsed={props.accordionCollapsed}
                        onClickCollapse={props.onClickCollapse}/>
        {!props.accordionCollapsed && <AccordionBody callBack={props.onClickItem} items={items}/>}
    </>
}