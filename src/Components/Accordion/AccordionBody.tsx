import {ItemType} from "./Accordion";

type BodyPropsType = {
    items: ItemType[]
}

export const AccordionBody = (props: BodyPropsType) => {
    return (
        < ul>
            {props.items.map(el => <li>{el.title}</li>)}
        </ul>
    )

}