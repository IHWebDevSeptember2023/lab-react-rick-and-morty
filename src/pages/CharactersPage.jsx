import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import "./CharactersPage.css";

function CharactersPage(){
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    return (
        <div>
            <h1>Characters</h1>
            <div className="cards">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default CharactersPage;