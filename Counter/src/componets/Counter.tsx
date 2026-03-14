import { useState } from "react"

interface CounterProp {
    plusButton: String
    minusButton: String
}

const Counter = ({plusButton, minusButton}: CounterProp) => {

    const [count, setCount] = useState(0)

    return (
        <div className={"counterContainer"}>
            <button className={"plusButton button"} onClick={() => setCount(count + 1)}>{plusButton}</button>
            <h2>{count}</h2>
            <button className={"minusButton button"} onClick={() => setCount(count - 1)}>{minusButton}</button>
        </div>
    )
}

export default Counter