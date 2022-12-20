import React, {useState} from "react";
import {Clock} from "./Clock";

export default {
    title: "Clock",
    component: Clock
}

export const BaseExample = () => {
    const [mode, setMode] = useState<"digit" | "analog">("digit")
    return <>
        <button onClick={() => setMode("digit")}>digit</button>
        <button onClick={() => setMode("analog")}>analog</button>
        <Clock mode={mode}/>
    </>
}