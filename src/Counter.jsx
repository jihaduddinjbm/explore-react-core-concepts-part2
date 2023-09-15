import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h4>counter:{count}</h4>
        </div>
    )
}