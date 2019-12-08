import React, {useState} from "react";
import "./AbilityScore.css"

let MIN_AS = 1
let MAX_AS = 20

function AbilityScore(props) {
    const [score, setScore] = useState(props.value)
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
        props.set(newScore)
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
                    onChange={(e) => setAbilityScore(parseInt(e.target.value) || 1)}
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
            </div>
        </div>
    )
}

// Helper
function calcModifier(modifier) {
    return Math.floor((modifier - 10)/2)
}

export default AbilityScore