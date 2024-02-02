import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Welcome to Rick and Morty's Wiki!</h1>
            <Link to="/characters">
                <button>
                    Check the characters
                </button>
            </Link>
        </div>
    );
}

export default HomePage;