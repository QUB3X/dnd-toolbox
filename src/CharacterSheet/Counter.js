import React, {useState} from "react"
import "./Counter.css"

function Counter(props) {
    const [counter, setCounter] = useState(props.value || 0)

    return (
        <div className="Counter">
            <label className="Counter__title">
                {props.title}
            </label>
            <div className="Counter__input">
                <button
                    className="Counter__input--button"
                    onClick={() => {
                        setCounter(
                            (counter > props.minValue)
                            ? counter - 1
                            : props.minValue)
                        props.set(counter - 1)
                    }}
                    disabled={counter === props.minValue}
                >−</button>
                <input
                    className="Counter__input--number"
                    type="number"
                    pattern="\d*"
                    value={counter}
                    onChange={(e) => {
                        setCounter(parseInt(e.target.value) || counter)
                        props.set(parseInt(e.target.value) || counter)
                    }}
                />
                <button
                    className="Counter__input--button"
                    onClick={() => {
                        setCounter(
                            (counter < props.maxValue) || (props.maxValue === null)
                            ? counter + 1
                            : props.maxValue)
                        props.set(counter + 1)
                    }}
                    disabled={counter === props.maxValue}
                >+</button>
            </div>
        </div>
    )
}

export default Counter