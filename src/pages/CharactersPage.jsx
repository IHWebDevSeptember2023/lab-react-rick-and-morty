import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import "./CharactersPage.css";
import Searchbar from "../components/Searchbar";

function CharactersPage() {
    const [characters, setCharacters] = useState([])
    const [initialCharacters, setInitialCharacters] = useState([])


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {setCharacters(data.results); setInitialCharacters(data.results)})
    }, [])

    return (
        <div className="characters-container">
            <h1>Characters</h1>
            <Searchbar initialCharacters={initialCharacters} setCharacters={setCharacters} />
            <div className="cards">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default CharactersPage;