import React from "react";
import "../App.css";

// Sample game data (replace with actual game data or an API call)
const games = [
  { id: 1, name: "Puzzle Game", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Memory Match", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Word Scramble", image: "https://via.placeholder.com/150" }
];

const GamesPage = () => {
  return (
    <div className="games-page">
      <h2>Choose a Game</h2>
      <div className="game-cards-container">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} className="game-image" />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
