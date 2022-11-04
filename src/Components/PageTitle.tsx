
type PageTitleType = {
    title:string
}

export const PageTitle = (props:PageTitleType) => {
    return <>
        <h2>{props.title}</h2>
    </>
}