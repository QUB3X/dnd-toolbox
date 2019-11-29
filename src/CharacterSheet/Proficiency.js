import React, {useState} from "react"
import "./Proficiency.css"

function Proficiency(props) {
    const [name, setName] = useState(props.name)
    const [value, setValue] = useState(0)

    return (
        <li className="Proficiency">
            <span className="Proficiency--value">
                +{value}
            </span>
            {name}
        </li>
    )
}

function ProficiencyContainer(props) {
    
    const listActiveProficiencies = () => {
        let list = []
        for (let p of props.proficiencies) {
            list.push(
                <Proficiency
                    name="{p.name}"
                    value="{p.value}"
                />
            )
        }
    }
    
    return (
        <ul className="ProficiencyContainer">
            {listActiveProficiencies()}
        </ul>
    )
}

export {
    Proficiency,
    ProficiencyContainer
}