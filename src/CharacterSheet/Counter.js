import React, {useState, useEffect} from "react"
import "./Counter.css"

function Counter(props) {
    const [counter, setCounter] = useState(props.defaultValue || 0)

    return (
        <div className="Counter">
            <label className="Counter__title">
                {props.title}
            </label>
            <div className="Counter__input">
                <button
                    className="Counter__input--button"
                    onClick={() => setCounter(counter > props.minValue ? counter - 1 : props.minValue)}
                    disabled={counter === props.minValue}
                >−</button>
                <span
                    className="Counter__input--number">
                    {counter}
                </span>
                <button
                    className="Counter__input--button"
                    onClick={() => setCounter(counter < props.maxValue ? counter + 1 : props.maxValue)}
                    disabled={counter === props.maxValue}
                >+</button>
            </div>
        </div>
    )
}

export default Counter