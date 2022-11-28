import {ItemType} from "./Accordion";

type BodyPropsType = {
    items: ItemType[]
    callBack: (id: number) => void
}

export const AccordionBody = (props: BodyPropsType) => {
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