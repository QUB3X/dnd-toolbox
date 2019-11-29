import React from "react"
import "./Layout.css"

function Row(props) {
    return (
        <div className="Row">
            {props.children}
        </div>
    )
}

function Column(props) {
    return (
        <div className="Column">
            {props.children}
        </div>
    )
}

export {
    Row,
    Column
}