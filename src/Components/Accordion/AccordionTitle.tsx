type AccordionTitleType = {
    title: string
    onClickCollapse: (collapsed: boolean) => void
    accordionCollapsed: boolean
    style: { color: string }
}
export const AccordionTitle = (props: AccordionTitleType) => {
    return <>
        <h3 style={props.style} onClick={() => props.onClickCollapse(!props.accordionCollapsed)}>{props.title}</h3>
    </>
}