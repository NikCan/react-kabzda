type AccordionTitleType = {
    title:string
    onClickCollapse: (collapsed:boolean)=>void
    accordionCollapsed: boolean
}
export const AccordionTitle = (props: AccordionTitleType) => {
    return <>
        <h3 onClick={() => props.onClickCollapse(!props.accordionCollapsed)}>{props.title}</h3>
    </>
}