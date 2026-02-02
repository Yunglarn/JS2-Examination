import { useEffect, useState } from "react";



function Games() {

const [games, setGames] = useState([]);
const [searchWord, setSearchWord] = useState("");
const [searchInput, setSearchInput] = useState("");


// API't funkar i webläsare, men när request sker från React nekar den.
// request från publika corsproxy.io som lägger sig framför React går bra.
useEffect(() => {
  fetch("https://corsproxy.io/?https://www.freetogame.com/api/games")
    .then((res) => res.json())
    .then((data) => {
      console.log("Hej snälla funka jag ber dig", data);
      setGames(data);
    })
    .catch((err) => console.error(err));
}, []);



const filterGames = games.filter((game) =>
  game.title.toLowerCase().includes(searchWord.toLowerCase())
);

const handleSearch = () => {
  setSearchWord(searchInput);
};


  return (
    <div>
      <h1>Sök spel</h1>

      <input 
      type="text"
      placeholder="Sök spel här"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}     
      ></input>

    <button onClick= {handleSearch}>Sök nu</button>

      <ul>
      {filterGames.map((game) => (
        <li key={game.id}>
          <h2>{game.title}</h2>
          <h5>{game.release_date}</h5>
          <img src={game.thumbnail} alt={game.title} width="300"/>
          <p> {game.short_description} </p>
        
        </li>
      ) )}

      </ul>
    </div>
  );
}

export default Games;
