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
                <input
                    className="Counter__input--number"
                    type="number"
                    pattern="\d*"
                    value={counter}
                    onChange={(e) => setCounter(parseInt(e.target.value) || 0)}
                />
                <button
                    className="Counter__input--button"
                    onClick={() => setCounter(
                        (counter < props.maxValue) || (props.maxValue === null)
                        ? counter + 1
                        : props.maxValue)
                    }
                    disabled={counter === props.maxValue}
                >+</button>
            </div>
        </div>
    )
}

export default Counter