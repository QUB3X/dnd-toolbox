import React, {useState} from "react"
import "./Proficiency.css"

function ProficiencyContainer(props) {
    const element = []
    for (const key in props.value) {
        const _ps = []
        if (props.value.hasOwnProperty(key)) {
            const stat = props.value[key]
            for (const _p in stat) {
                if (stat.hasOwnProperty(_p)) {
                    const _value = stat[_p]
                    _ps.push(
                        <Proficiency
                            name={_p}
                            key={key + _p}
                            value={_value}
                            editable={true}
                            set={(value) => {
                                props.value[key][_p] = value
                                props.set(props.value)
                            }}
                        />
                    )
                }
            }
            
        }

        element.push(
            <div key={key} className="Proficiency__box">
                <h3>{key}</h3>
                <ul>{_ps}</ul>
            </div>
        )
   }

   return element
}

function Proficiency(props) {
    const [value, setValue] = useState(props.value)
    
    if (props.editable) {
        return (
            <li className="Proficiency">
                +
                <input
                    className="Proficiency__value Proficiency__value--input"
                    value={value}
                    onChange={(e) => {
                        setValue(parseInt(e.target.value) || value)
                        props.set(parseInt(e.target.value) || value)
                    }}
                />
                {props.name}

            </li>
        )
    } else {
        return (
            <li className="Proficiency">
                <span className="Proficiency__value">
                    +{value}
                </span>
                {props.name}
            </li>
        )
    }
}

export {
    Proficiency,
    ProficiencyContainer
}