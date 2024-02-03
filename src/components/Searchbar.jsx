import "./Searchbar.css";
import { useState } from "react";

function Searchbar(props) {
  const { initialCharacters, setCharacters } = props;
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    const filteredCharacters = initialCharacters.filter(character => character.name.toLowerCase().includes(value.toLowerCase()));
    setCharacters(filteredCharacters);
  }

  return (
    <div>
      <input value={search} onChange={(e)=> handleSearch(e.target.value)} className="search-input" type="text" placeholder="Search your character..." />
    </div>
  );
}

export default Searchbar;