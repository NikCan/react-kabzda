import React, {useState} from "react";

export default {
    title: "useState demo",
}
const generateData = () => {
    console.log("generate")
    return 1
}
export const Example1 = () => {
    console.log("example1")
 //   const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

//    const changer = (state:number) => state+1



    return <>
        <button onClick={() => setCounter(state => state+1)}>+</button>
        {counter}
    </>
}