import { Link } from "react-router-dom";
import "./CharacterCard.css";

function CharacterCard(props) {
    const { id, name, image } = props.character;
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-body">
                <h2>{name}</h2>
                <Link to={`/characters/${id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CharacterCard;