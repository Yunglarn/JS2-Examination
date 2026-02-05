import { useEffect, useState } from "react";



function Games() {

const [games, setGames] = useState([]);
//Gjorde först misstag av att ha games variabeln som en string när API svaret var i array.
const [searchWord, setSearchWord] = useState("");
const [searchInput, setSearchInput] = useState("");
const [loadingPage, setLoadingPage] = useState(true);


//Cors deny från hemsida när request görs från react, kringgår med corsproxy.io

useEffect(() => {
  fetch("https://corsproxy.io/?https://www.freetogame.com/api/games")
    .then((res) => res.json())
    .then((data) => {
       // console.log(JSON.stringify(data, null, 2));
      setTimeout(() =>{
      setGames(data);
      setLoadingPage(false);
    }, 2000);
    // tillagd fake delay för att kolla så "loading.." fungerar.
    })
    .catch((err) => {
      console.error(err);
      setLoadingPage(false);
    });
}, []);


// skapar filterGames array att spara matchande resultat för titlarna i games arrayen.
// Filter loopar igenom likt en for loop (let i = 0; i < games.length; i++)
//  och finner match. Under funktionens körstid kallar js alla titlar för game.

const filterGames = games.filter((game) =>
  game.title.includes(searchWord)
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

    <button onClick= {handleSearch}className="Searchbutton">Sök nu</button>

    {loadingPage && <p>Loading...</p>}

    {!loadingPage && (
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
    )}
    </div>
  );
}

export default Games;
