import React, {useState, useEffect} from "react"
import "./App.css"

import Label from "./CharacterSheet/Label"
import Counter from "./CharacterSheet/Counter"
import AbilityScore from "./CharacterSheet/AbilityScore"
import TextArea from "./CharacterSheet/TextArea"

function App() {
    const [char, setChar] = useState({
        charName: "",
        playerName: "",
        date: "",
        level: 1,
        charClass: "",
        background: "",
        alignment: "",
        str: 1,
        dex: 1,
        con: 1,
        int: 1,
        wis: 1,
        cha: 1,
        proficiency: 2,
        inspiration: 0,
        armorClass: 0,
        initiative: 0,
        speed: 0,
        hp: 1,
        maxHp: 0,
        tempHp: 0,
        hitDie: 0,
        totalHitDice: 0,
        deathSaves: 0,
        coints: {
            cp: 0, sp: 0, gp: 0, ep: 0, pp: 0,
            total: 0
        },
        equipment: [],
        weapons: [],
        notes: "",
        features: "",
        // Details
        personality: "",
        ideals: "",
        bonds:"",
        flaws: "",
        age: "",
        sex: "",
        height: "",
        weight: "",
        eyes: "",
        skin: "",
        size: "",
        voice: "",
        divinity: "",
        languages: "",
        allies: "",
        enemies: "",
        organizations: ""
    })

    useEffect(() => {
        console.log(char)
    })

    return (
        <div className="App">
            <div className="Row">
                <Label
                    title="Character Name"
                    value={char.charName}
                    set={(value) => setChar({
                        ...char, charName: value
                    })}
                />
                <Label
                    title="Player Name"
                    value={char.playerName}
                    set={(value) => setChar({
                        ...char, playerName: value
                    })}
                />
                <Label
                    title="Date of Creation"
                    value={char.date}
                    set={(value) => setChar({
                        ...char, date: value
                    })}
                />
            </div>
            <div className="Row">
                <Counter
                    title="Level"
                    value={char.level}
                    minValue={1}
                    maxValue={20}
                    set={(value) => setChar({
                        ...char, level: value
                    })}
                />
                <Label
                    title="Class"
                    value={char.charClass}
                    set={(value) => setChar({
                        ...char, charClass: value
                    })}
                />
                <Label
                    title="Background"
                    value={char.background}
                    set={(value) => setChar({
                        ...char, background: value
                    })}
                />
                <Label
                    title="Alignment"
                    value={char.alignment}
                    set={(value) => setChar({
                        ...char, alignment: value
                    })}
                />
            </div>
            <div className="Row">
                <AbilityScore
                    title="Strength"
                    value={char.str}
                    set={(value) => setChar({
                        ...char, str: value
                    })}
                />
                <AbilityScore
                    title="Dexterity"
                    value={char.dex}
                    set={(value) => setChar({
                        ...char, dex: value
                    })}
                />
                <AbilityScore
                    title="Constitution"
                    value={char.con}
                    set={(value) => setChar({
                        ...char, con: value
                    })}
                />
                <AbilityScore
                    title="Intellect"
                    value={char.int}
                    set={(value) => setChar({
                        ...char, int: value
                    })}
                />
                <AbilityScore
                    title="Wisdom"
                    value={char.wis}
                    set={(value) => setChar({
                        ...char, wis: value
                    })}
                />
                <AbilityScore
                    title="Charisma"
                    value={char.cha}
                    set={(value) => setChar({
                        ...char, cha: value
                    })}
                />
                <div className="Row">
                    <Counter
                        title="Proficiency"
                        value={char.proficiency}
                        minValue={2}
                        maxValue={6}
                        set={(value) => setChar({
                            ...char, proficiency: value
                        })}
                    />
                    <Counter
                        title="Inspiration"
                        value={char.inspiration}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, inspiration: value
                        })}
                    />
                    {/* Passive WIS */}
                </div>
                <div className="Row">
                    <Counter
                        title="Armor Class"
                        value={char.armorClass}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, armorClass: value
                        })}
                    />
                    <Counter
                        title="Initiative"
                        value={char.initiative}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, initiative: value
                        })}
                    />
                    <Counter
                        title="Speed"
                        value={char.speed}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, speed: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Counter
                        title="Hit Ponts"
                        value={char.hp}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, hp: value
                        })}
                    />
                    <Counter
                        title="Maximum"
                        value={char.maxHp}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, maxHp: value
                        })}
                    />
                    <Counter
                        title="Temporary"
                        value={char.tempHp}
                        minValue={0}
                        maxValue={null}
                        set={(value) => setChar({
                            ...char, tempHp: value
                        })}
                    />
                </div>
                <div className="Row">
                    {/* Hit Dice */}
                    {/* Death Saves */}
                </div>
                <div className="Row">
                    <TextArea 
                        title="Personality Traits"
                        value={char.personality}
                        set={(value) => setChar({
                            ...char, personality: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Ideals"
                        value={char.ideals}
                        set={(value) => setChar({
                            ...char, ideals: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Bonds"
                        value={char.bonds}
                        set={(value) => setChar({
                            ...char, bonds: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Flaws"
                        value={char.flaws}
                        set={(value) => setChar({
                            ...char, flaws: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Label
                        title="Age"
                        value={char.age}
                        set={(value) => setChar({
                            ...char, age: value
                        })}
                    />
                    <Label
                        title="Sex"
                        value={char.sex}
                        set={(value) => setChar({
                            ...char, sex: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Label
                        title="Height"
                        value={char.height}
                        set={(value) => setChar({
                            ...char, height: value
                        })}
                    />
                    <Label
                        title="Weight"
                        value={char.weight}
                        set={(value) => setChar({
                            ...char, weight: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Label
                        title="Eyes"
                        value={char.eyes}
                        set={(value) => setChar({
                            ...char, eyes: value
                        })}
                    />
                    <Label
                        title="Skin"
                        value={char.skin}
                        set={(value) => setChar({
                            ...char, skin: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Label
                        title="Size"
                        value={char.size}
                        set={(value) => setChar({
                            ...char, size: value
                        })}
                    />
                    <Label
                        title="Voice"
                        value={char.voice}
                        set={(value) => setChar({
                            ...char, voice: value
                        })}
                    />
                </div>
                <div className="Row">
                    <Label
                        title="Divinity and Domain"
                        value={char.divinity}
                        set={(value) => setChar({
                            ...char, divinity: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Flaws"
                        value={char.flaws}
                        set={(value) => setChar({
                            ...char, flaws: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Languages"
                        value={char.languages}
                        set={(value) => setChar({
                            ...char, languages: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Allies"
                        value={char.allies}
                        set={(value) => setChar({
                            ...char, allies: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Organizations"
                        value={char.organizations}
                        set={(value) => setChar({
                            ...char, organizations: value
                        })}
                    />
                </div>
                <div className="Row">
                    <TextArea 
                        title="Enemies"
                        value={char.enemies}
                        set={(value) => setChar({
                            ...char, enemies: value
                        })}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
