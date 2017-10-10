import React from "react";
import SuperHero from "./SuperHero";
import heroes from "../heroes.json";

function handleClick(phrase) {
    alert(phrase);
}

function genHeroes(heroes) {
    return heroes.map(item => <SuperHero handleClick={handleClick} hero={item}/>)
}

function App() {
    return (
        <div>
            {genHeroes(heroes)}
        </div>
    )
}

export default App;
