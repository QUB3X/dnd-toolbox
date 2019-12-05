import React, {useState} from "react"
import "./TextArea.css"

function TextArea(props) {
    const [text, setText] = useState(props.value)

    return (
        <div className="TextArea">
            <label className="TextArea__title">
                {props.title}
            </label>
            <textarea
                className="TextArea__input"
                type="textarea" 
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                    props.set(text)
                }}
            />
        </div>
    )
}

export default TextArea