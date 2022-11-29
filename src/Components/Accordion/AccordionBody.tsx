import {ItemType} from "./Accordion";
import React from "react";

type BodyPropsType = {
    items: ItemType[]
    callBack: (id: number) => void
}

const AccordionBodySecret = (props: BodyPropsType) => {
    return (
        < ul>
            {props.items.map(el => {
                const onClickHandler = () => {
                    props.callBack(el.id)
                }
                return <li onClick={onClickHandler} key={el.id}>{el.title}</li>
            })}
        </ul>
    )
}
export const AccordionBody = React.memo(AccordionBodySecret)