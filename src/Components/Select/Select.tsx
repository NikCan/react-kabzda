import s from "./Select.module.css"
import React, {KeyboardEvent, useState} from "react";

type itemsType = {
    id: string
    title: string
}
export type SelectPropsType = {
    items: Array<itemsType>
    title: string
    onChange: (value: string) => void
}

function SelectSecret(props: SelectPropsType) {
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
                if (e.code === "ArrowDown" || e.code === "ArrowRight") {
                    if (i !== props.items.length-1) {
                        setHoveredItem(props.items[i + 1].title)
                        props.onChange(props.items[i + 1].title)
                    }
                }
                if (e.code === "ArrowUp"|| e.code === "ArrowLeft") {
                    if (i !== 0) {
                        setHoveredItem(props.items[i - 1].title)
                        props.onChange(props.items[i - 1].title)
                    }
                }
                if (e.code === "Escape" || e.code === "Enter") {
                    setCollapsed(false)
                }
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
export const Select = React.memo(SelectSecret)