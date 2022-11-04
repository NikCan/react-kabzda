type UnControllableStarType = {
    selected: boolean
    setValue: () => void
}

export const UnControllableStar = (props: UnControllableStarType) => {
    return <span onClick={() => {props.setValue()}}>
        {props.selected ? <b>★ </b> : "★ "}</span>
}

