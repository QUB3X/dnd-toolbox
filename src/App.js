import React from "react"
import "./App.css"

import { Row, Column } from "./CharacterSheet/Layout"
import Label from "./CharacterSheet/Label"
import Counter from "./CharacterSheet/Counter"
import AbilityScore from "./CharacterSheet/AbilityScore"

function App() {
    return (
        <div className="App">
            <Row>
                <Label title="Character Name" />
                <Label title="Player Name" />
                <Label title="Date of Creation" />
            </Row>
            <Row>
                <Counter title="Level" />
                <Label title="Class" />
                <Label title="Background" />
                <Label title="Alignment" />
            </Row>
            <Row>
                <AbilityScore title="Strength" />
                <AbilityScore title="Dexterity" />
                <AbilityScore title="Constitution" />
                <AbilityScore title="Intelligence" />
                <AbilityScore title="Wisdom" />
                <AbilityScore title="Charisma" />
            </Row>
        </div>
    )
}

export default App
