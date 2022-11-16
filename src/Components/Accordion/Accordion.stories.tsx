import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion stories',
    component: Accordion,
}
const Template: Story<AccordionType> = (args) => <Accordion {...args}/>
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    titleValue: "Collapsed",
    onClickCollapse: action("I can uncollapse"),
    accordionCollapsed: true
}
export const UncollapsedMode = Template.bind({})
UncollapsedMode.args = {
    titleValue: "Uncollapsed",
    onClickCollapse: action("I can uncollapse"),
    accordionCollapsed: false
}

// export const CollapsedMode = () => <Accordion onClickCollapse={action("I can uncollapse")} accordionCollapsed={true}
//                                               titleValue={"Collapsed"}/>
// export const UncollapsedMode = () => <Accordion onClickCollapse={action("I can collapse")} accordionCollapsed={false}
//                                                 titleValue={"Uncollapsed"}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion onClickCollapse={setValue} accordionCollapsed={value} titleValue={'Accordion'}/>
}