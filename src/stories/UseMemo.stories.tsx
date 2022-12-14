import React, {useMemo, useState} from "react";

export default {
    title: "useMemo demo",
}

export const DifficultCountingExample = () => {
    const [a,setA] = useState<number>(3)
    const [b,setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <=a ; i++) {
            let fake=0
            while(fake<1000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA*i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <=b ; i++) {
        resultB = resultB*i
    }
    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: a!= {resultA}</div>
        <div>Result for b: b!= {resultB}</div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("secret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["asd", "asdasd", "wer"])
    const newArray = useMemo(()=>{
        return (users.filter(u=> u.indexOf("a") > -1))
    }, [users])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => {addUser()}}>add</button>
        {counter}
        <Users users={newArray}/>
    </>
}
