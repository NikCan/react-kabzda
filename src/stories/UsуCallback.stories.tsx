import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useCallback demo",
}

const BooksSecret = (props: { books: string[], addBook: () => void }) => {
    console.log("secret")
    return <div>
        <button onClick={props.addBook}>add</button>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}
const Books = React.memo(BooksSecret)

export const LikeUseCallbackMemo = () => {
    console.log("LikeUseCallbackMemo")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["JS", "HTML", "React"])
    const newArray = useMemo(() => {
        return (books.filter(b => b.toLowerCase().indexOf("t") > -1))
    }, [books])
    const addBook = useCallback( () => {
        const newBook = [...books, 'AngularT' + new Date().getTime()]
        setBooks(newBook)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={newArray} addBook={addBook}/>
    </>
}
