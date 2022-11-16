import {useState} from "react";
import {UnControllableAccordionTitle} from "./UnControllableAccordionTitle";
import {UnControllableAccordionBody} from "./UnControllableAccordionBody";

type UnControllableAccordion = {}

export const UnControllableAccordion = (props: UnControllableAccordion) => {
    const title = "---UnControllable Menu---"
    const [collapsed, setCollapsed] = useState(true)
    const collapsedMenu = () => {
        setCollapsed(!collapsed)
    }
    return <div>
        <UnControllableAccordionTitle callBack = {collapsedMenu} title={title}/>
        {!collapsed && <UnControllableAccordionBody/>}
    </div>
}