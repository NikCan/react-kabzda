import {useState} from "react";
import {UnControllableAccordionTitle} from "./UnControllableAccordionTitle";
import {AccordionBody} from "../Accordion/AccordionBody";

type UnControllableAccordion = {}

export const UnControllableAccordion = (props: UnControllableAccordion) => {
    const title = "---UnControllable Menu---"
    const [collapsed, setCollapsed] = useState(true)
    const collapsedMenu = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <UnControllableAccordionTitle callBack = {collapsedMenu} title={title}/>
        {!collapsed && <AccordionBody/>}
    </div>
}