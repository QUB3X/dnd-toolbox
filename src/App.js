import React, {useState} from "react"
import "./App.css"

import Label from "./CharacterSheet/Label"
import Counter from "./CharacterSheet/Counter"
import AbilityScore from "./CharacterSheet/AbilityScore"
import TextArea from "./CharacterSheet/TextArea"
import Fields from "./fields"

function App() {

    const [charName, setCharName] = useState("")
    const [playerName, setPlayerName] = useState("")
    const [date, setDate] = useState("")
    const [level, setLevel] = useState(1)
    const [charClass, setCharClass] = useState("")
    const [background, setBackground] = useState("")
    const [alignment, setAlignment] = useState("")

    // Stats
    const [str, setStr] = useState(1)
    const [dex, setDex] = useState(1)
    const [con, setCon] = useState(1)
    const [int, setInt] = useState(1)
    const [wis, setWis] = useState(1)
    const [cha, setCha] = useState(1)
    const [proficiency, setProficiency] = useState(0) // >= 0
    const [inspiration, setInspiration] = useState(0) // >= 0
    const [armorClass, setArmorClass] = useState(0) // >= 1
    const [initiative, setInitiative] = useState(0) // >= 1
    const [speed, setSpeed] = useState(0)
    const [hp, setHp] = useState(0) // >= 0
    const [maxHp, setMaxHp] = useState(0) // int >= 0
    const [tempHp, setTempHp] = useState(0) // int >= 0
    const [hitDie, setHitDie] = useState("") // string
    const [totalHitDice, setTotalHitDice] = useState(0) // int
    const [deathSaves, setDeathSaves] = useState(0) // -3 < x < +3
    
    // Money
    const [coints, setCoins] = useState({
        cp: 0, sp: 0, gp: 0, ep: 0, pp: 0,
        total: 0
    })

    // Inventory
    const [equipment, setEquipment] = useState("")
    const [weapons, setWeapons] = useState([])
    const [notes, setNotes] = useState("")
    
    // Possible Dynamic Linking
    const [features, setFeatures] = useState("") // also traits

    // Details
    const [personality, setPersonality] = useState("")
    const [ideals, setIdeals] = useState("")
    const [bonds, setBonds] = useState("")
    const [flaws, setFlaws] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState("")
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [eyes, setEyes] = useState("")
    const [skin, setSkin] = useState("")
    const [size, setSize] = useState("")
    const [voice, setVoice] = useState("")
    const [divinity, setDivinity] = useState("")
    const [languages, setLanguages] = useState("")
    const [allies, setAllies] = useState("")
    const [enemies, setEnemies] = useState("")
    const [organizations, setOrganizations] = useState("")



    return (
        <div className="App">
            <div className="Row">
                <Label
                    title="Character Name"
                    value={charName}
                    set={(value) => setCharName(value)}
                />
                <Label
                    title="Player Name"
                    value={playerName}
                    set={(value) => setPlayerName(value)}
                />
                <Label
                    title="Date of Creation"
                    value={date}
                    set={(value) => setDate(value)}
                />
            </div>
            <div className="Row">
                <Counter
                    title="Level"
                    value={level}
                    minValue={1}
                    maxValue={20}
                    set={(value) => setLevel(value)}
                />
                <Label
                    title="Class"
                    value={charClass}
                    set={(value) => setCharClass(value)}
                />
                <Label
                    title="Background"
                    value={background}
                    set={(value) => setBackground(value)}
                />
                <Label
                    title="Alignment"
                    value={alignment}
                    set={(value) => setAlignment(value)}
                />
            </div>
            <div className="Row">
                <AbilityScore
                    title="Strength"
                    value={str}
                    set={(value) => setStr(value)}
                />
                <AbilityScore
                    title="Dexterity"
                    value={dex}
                    set={(value) => setDex(value)}
                />
                <AbilityScore
                    title="Constitution"
                    value={con}
                    set={(value) => setCon(value)}
                />
                <AbilityScore
                    title="Intellect"
                    value={int}
                    set={(value) => setInt(value)}
                />
                <AbilityScore
                    title="Wisdom"
                    value={wis}
                    set={(value) => setWis(value)}
                />
                <AbilityScore
                    title="Charisma"
                    value={cha}
                    set={(value) => setCha(value)}
                />
            </div>
            <div className="Row">
                <Counter
                    title="Proficiency"
                    value={proficiency}
                    minValue={2}
                    maxValue={6}
                    set={(value) => setProficiency(value)}
                />
                <Counter
                    title="Inspiration"
                    value={inspiration}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setInspiration(value)}
                />
                {/* Passive WIS */}
            </div>
            <div className="Row">
                <Counter
                    title="Armor Class"
                    value={armorClass}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setArmorClass(value)}
                />
                <Counter
                    title="Initiative"
                    value={initiative}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setInitiative(value)}
                />
                <Counter
                    title="Speed"
                    value={speed}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setSpeed(value)}
                />
            </div>
            <div className="Row">
                <Counter
                    title="Hit Ponts"
                    value={hp}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setHp(value)}
                />
                <Counter
                    title="Maximum"
                    value={maxHp}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setMaxHp(value)}
                />
                <Counter
                    title="Temporary"
                    value={tempHp}
                    minValue={0}
                    maxValue={null}
                    set={(value) => setTempHp(value)}
                />
            </div>
            <div className="Row">
                {/* Hit Dice */}
                {/* Death Saves */}
            </div>
            <div className="Row">
                <TextArea 
                    title="Personality Traits"
                    value={personality}
                    set={(value) => setPersonality(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Ideals"
                    value={ideals}
                    set={(value) => setIdeals(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Bonds"
                    value={bonds}
                    set={(value) => setBonds(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Flaws"
                    value={flaws}
                    set={(value) => setFlaws(value)}
                />
            </div>
            <div className="Row">
                <Label
                    title="Age"
                    value={age}
                    set={(value) => setAge(value)}
                />
                <Label
                    title="Sex"
                    value={sex}
                    set={(value) => setSex(value)}
                />
            </div>
            <div className="Row">
                <Label
                    title="Height"
                    value={height}
                    set={(value) => setHeight(value)}
                />
                <Label
                    title="Weight"
                    value={weight}
                    set={(value) => setWeight(value)}
                />
            </div>
            <div className="Row">
                <Label
                    title="Eyes"
                    value={eyes}
                    set={(value) => setEyes(value)}
                />
                <Label
                    title="Skin"
                    value={skin}
                    set={(value) => setSkin(value)}
                />
            </div>
            <div className="Row">
                <Label
                    title="Size"
                    value={size}
                    set={(value) => setSize(value)}
                />
                <Label
                    title="Voice"
                    value={voice}
                    set={(value) => setVoice(value)}
                />
            </div>
            <div className="Row">
                <Label
                    title="Divinity and Domain"
                    value={divinity}
                    set={(value) => setDivinity(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Flaws"
                    value={flaws}
                    set={(value) => setFlaws(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Languages"
                    value={languages}
                    set={(value) => setLanguages(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Allies"
                    value={allies}
                    set={(value) => setAllies(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Organizations"
                    value={organizations}
                    set={(value) => setOrganizations(value)}
                />
            </div>
            <div className="Row">
                <TextArea 
                    title="Enemies"
                    value={allies}
                    set={(value) => setEnemies(value)}
                />
            </div>
        </div>
    )
}

export default App
