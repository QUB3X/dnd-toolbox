import React from "react"
import "./App.css"

import { Row, Column } from "./CharacterSheet/Layout"
import Label from "./CharacterSheet/Label"
import Counter from "./CharacterSheet/Counter"
import AbilityScore from "./CharacterSheet/AbilityScore"

import Fields from "./fields"

function App() {

    return (
        <div className="App">
            <Row>
                <Label title="Character Name" />
                <Label title="Player Name" />
                <Label title="Date of Creation" />
            </Row>
            <Row>
                <Counter
                    title="Level"
                    defaultValue={1}
                    minValue={1}
                    maxValue={20}
                />
                <Label title="Class" />
                <Label title="Background" />
                <Label title="Alignment" />
            </Row>
            <Row>
                {Fields.AbilityScores.map((e, i) => (
                    <AbilityScore
                        title={e.name}
                        key={e.id}
                        proficiencies={e.proficiencies}
                    />
                ))}
            </Row>
        </div>
    )
}

export default App
