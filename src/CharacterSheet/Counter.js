import React, {useState} from "react"
import "./Counter.css"

let MIN_LV = 1
let MAX_LV = 20

function Counter(props) {
    const [counter, setCounter] = useState(1)

    return (
        <div className="Counter">
            <label className="Counter__title">
                {props.title}
            </label>
            <div className="Counter__input">
                <button
                    className="Counter__input--button"
                    onClick={() => setCounter(counter > MIN_LV ? counter - 1 : MIN_LV)}
                >−</button>
                <span
                    className="Counter__input--number">
                    {counter}
                </span>
                <button
                    className="Counter__input--button"
                    onClick={() => setCounter(counter < MAX_LV ? counter + 1 : MAX_LV)}
                >+</button>
            </div>
        </div>
    )
}

export default Counter