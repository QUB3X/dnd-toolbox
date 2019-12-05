import React, {useState} from "react"
import "./Proficiency.css"

function Proficiency(props) {
    const [value, setValue] = useState(props.value)
    
    if (props.value !== 0 &&
        !props.editable) {
        return (
            <li className="Proficiency">
                <span className="Proficiency__value">
                    +{value}
                </span>
                {props.name}
            </li>
        )
    } else if (props.editable) {
        return (
            <li className="Proficiency">
                +
                <input
                    className="Proficiency__value Proficiency__value--input"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {props.name}

            </li>
        )
    } else return null
}

export {
    Proficiency
}