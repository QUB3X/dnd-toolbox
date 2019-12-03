import React, {useState, useEffect} from "react"
import "./Label.css"

function Label(props) {
    const [text, setText] = useState(props.value)

    return (
        <div className="Label">
            <label className="Label__title">
                {props.title}
            </label>
            <input
                className="Label__input"
                type="text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default Label