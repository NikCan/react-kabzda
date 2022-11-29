import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        onClickCollapse: {
            table: {
                category: 'Events'
            }
        }
    }
}
const Template: Story<AccordionType> = (args) => <Accordion {...args}/>
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    items: [{title: '1', id: 1},
        {title: '2', id: 2},
        {title: '3', id: 3},
        {title: '4', id: 4}],
    titleValue: "Collapsed",
    onClickCollapse: action("I can uncollapse"),
    accordionCollapsed: true,
}
export const UncollapsedMode: Story<AccordionType> = Template.bind({})
UncollapsedMode.args = {
    items: [{title: '1', id: 1},
        {title: '2', id: 2},
        {title: '3', id: 3},
        {title: '4', id: 4}],
    titleValue: "Uncollapsed",
    onClickCollapse: action("I can uncollapse"),
    accordionCollapsed: false,
    onClickItem: action("Hey!")
}

export const ModeChanging: Story<AccordionType> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion {...args} onClickCollapse={setValue} accordionCollapsed={value}/>
}
ModeChanging.args = {
    items: [{title: '1', id: 1},
        {title: '2', id: 2},
        {title: '3', id: 3},
        {title: '4', id: 4}],
    titleValue: "Menu",
    onClickItem: (id) => alert(id)
}