import s from "./Select.module.css"
import {KeyboardEvent, useState} from "react";

type itemsType = {
    id: string
    title: string
}
export type SelectPropsType = {
    items: Array<itemsType>
    title: string
    onChange: (value: string) => void
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState<string>(props.title)
    const onClickDivHandler = () => setCollapsed(!collapsed)
    const onClickItem = (value: string) => {
        props.onChange(value)
        setCollapsed(false)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (hoveredItem === props.items[i].title) {
                e.code === "ArrowDown" && setHoveredItem(props.items[i + 1].title)
                e.code === "ArrowUp" && setHoveredItem(props.items[i - 1].title)
            }
        }
    }

    return <div>
        <div className={s.select} tabIndex={0} onClick={onClickDivHandler}
             onKeyDown={onKeyDownHandler}>{props.title} ▼
        </div>
        {collapsed &&
            <div className={s.select + ' ' + s.items}>{
                props.items.map(el => <div className={s.item + " " + (el.title === hoveredItem ? s.selected : "")}
                                           onMouseEnter={() => setHoveredItem(el.title)}
                                           onClick={() => onClickItem(el.title)}
                                           key={el.id}>{el.title}</div>)
            }
            </div>}
    </div>
}