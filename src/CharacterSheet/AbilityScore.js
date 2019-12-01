import React, {useState, useEffect} from "react";
import "./AbilityScore.css"
import {Proficiency} from "./Proficiency"
import {Modal} from "./Modal"

let MIN_AS = 1
let MAX_AS = 20

function AbilityScore(props) {
    const [score, setScore] = useState(MIN_AS)
    const [modifier, setModifier] = useState(calcModifier(score))

    const setAbilityScore = (_score) => {
        let newScore = _score
        if(_score > MAX_AS) {
            newScore = MAX_AS
        } else if(score < MIN_AS) {
            newScore = MIN_AS
        }
        setScore(newScore)
        setModifier(calcModifier(newScore))
    }

    const listProficiencies = (proficiencies, editable) => {
        return proficiencies.map((e, i) => (
            <Proficiency
                name={e}
                value={0}
                key={i}
                editable={editable}
                source={props.source}
            />
        ))
    }

    return (
        <div className="AbilityScore">
            <label className="AbilityScore__title">
                {props.title}
            </label>
            <div className="AbilityScore__box">
                <button
                    className="AbilityScore__box--button"
                    onClick={() => setAbilityScore(score + 1)}
                    disabled={score === MAX_AS}
                >+</button>
                <input
                    className="AbilityScore__box--score"
                    type="number"
                    pattern="\d*"
                    value={score}
                    onChange={(e) => setAbilityScore(e.target.value)}
                />
                <span
                    className="AbilityScore__box--modifier">
                    {modifier}
                </span>
                <button
                    className="AbilityScore__box--button"
                    onClick={() => setAbilityScore(score - 1)}
                    disabled={score === MIN_AS}
                >−</button>
                <ul className="AbilityScore__box--proficiencies">
                    {listProficiencies(props.proficiencies, false)}
                    <Modal
                        title="Proficiencies"
                        btnName="Edit"
                    >
                    {listProficiencies(props.proficiencies, true)}
                    </Modal>
                </ul>        
            </div>
        </div>
    )
}

// Helper
function calcModifier(modifier) {
    return Math.floor((modifier - 10)/2)
}

export default AbilityScore