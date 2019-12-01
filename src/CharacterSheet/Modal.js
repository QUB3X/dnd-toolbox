import React, {useState} from "react";
import "./Modal.css"

function Modal(props) {
    const [visible, setVisible] = useState(false)

    if (visible) {
        return (
            <div className="Modal">
                <button
                    className="Modal__button"
                    onClick={() => setVisible(false)}
                >Close</button>
                <h2 className="Modal__title">
                    {props.title}
                </h2>
                <div className="Modal__content">
                    {props.children} 
                </div>
                
            </div>
        )
        } else return (
            <button
                className="Modal__button"
                onClick={() => setVisible(true)}>
                {props.btnName}
            </button>
        )
}

export {
    Modal
}