import React, { useState } from 'react';
import '../index.css';

const Game = () => {
  // État pour les cases du plateau
  const [board, setBoard] = useState(Array(9).fill(null));
  // État pour le joueur courant
  const [currentPlayer, setCurrentPlayer] = useState('X');

  // Fonction pour gérer le clic sur une case
  const handleCaseClick = (index) => {
    // Si la case est déjà occupée, ne rien faire
    if (board[index]) return;

    // Créer une copie du plateau pour éviter de modifier directement l'état
    const newBoard = [...board];
    newBoard[index] = currentPlayer; // Mettre à jour la case avec le joueur courant
    setBoard(newBoard); // Mettre à jour l'état du plateau

    // Alterner le joueur courant
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  // Rendu des cases
  const renderCases = () => {
    return board.map((value, index) => (
      <div
        key={index}
        className={`cases ${value === 'X' ? 'blue' : value === 'O' ? 'yellow' : ''}`}
        onClick={() => handleCaseClick(index)} // Ajouter un gestionnaire de clic
      >
        {value} {/* Affiche le contenu de la case */}
      </div>
    ));
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <p>Game</p>
      </div>
      <div className="logs-container">
        <div className={`logs ${currentPlayer === 'X' ? 'blue-log' : 'yellow-log'}`}>
          <p>Au tour de :</p>
          <span>{currentPlayer}</span> {/* Affiche le joueur courant */}
        </div>
      </div>
      <div className="game-board">
        <div className="board">{renderCases()}</div>
      </div>
    </div>
  );
};

export default Game;
