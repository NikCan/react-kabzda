import s from "./Select.module.css"
import React, {KeyboardEvent, useState} from "react";

type itemsType = {
    id: string
    city: string
    country: string
    people: number
}
export type SelectPropsType = {
    items: Array<itemsType>
    title: string
    onChange: (value: string) => void
}

function SelectSecret(props: SelectPropsType) {
    console.log("tssss")
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState<string>(props.title)
    const onClickDivHandler = () => setCollapsed(!collapsed)
    const onClickItem = (value: string) => {
        props.onChange(value)
        setCollapsed(false)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (hoveredItem === props.items[i].city) {
                if (e.code === "ArrowDown" || e.code === "ArrowRight") {
                    if (i !== props.items.length-1) {
                        setHoveredItem(props.items[i + 1].city)
                        props.onChange(props.items[i + 1].city)
                    }
                }
                if (e.code === "ArrowUp"|| e.code === "ArrowLeft") {
                    if (i !== 0) {
                        setHoveredItem(props.items[i - 1].city)
                        props.onChange(props.items[i - 1].city)
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
                props.items.map(el => <div className={s.item + " " + (el.city === hoveredItem ? s.selected : "")}
                                           onMouseEnter={() => setHoveredItem(el.city)}
                                           onClick={() => onClickItem(el.city)}
                                           key={el.id}>{el.city}</div>)
            }
            </div>}
    </div>
}
export const Select = React.memo(SelectSecret)