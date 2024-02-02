import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetailsPage.css";


function CharacterDetailsPage() {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    console.log(character);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data));
    }, [id]);

    return (

        character &&
        <div className="details-container">
            <h1>{character.name}</h1>
            <div className="info">
                <img src={character.image} alt={character.name} />
                <ul>
                    <li>Spicies: {character.species}</li>
                    <li>Status: {character.status}</li>
                    <li>Origin: {character.origin?.name}</li>
                    <li>Location: {character.location?.name}</li>
                </ul>
            </div>
        </div>

    )
}
export default CharacterDetailsPage;