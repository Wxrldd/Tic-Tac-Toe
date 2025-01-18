  import React, { useState } from 'react';
  import '../index.css';
  import iconRefresh from '../assets/refresh.png';
  import Circle from './circle';
  import Cross from './cross';

  const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(Math.random() < 0.5 ? 'X' : 'O');
    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);
    const [tries, setTries] = useState(0);

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const checkWinner = (newBoard) => {
      for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          return newBoard[a];
        }
      }
      return null;
    };

    const checkDraw = (newBoard) => {
      return newBoard.every(cell => cell !== null);
    };

    const handleCaseClick = (index) => {
      if (board[index] || winner || draw) return;
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      const gameWinner = checkWinner(newBoard);
      setBoard(newBoard);

      if (gameWinner) {
        setWinner(gameWinner);
      } else if (checkDraw(newBoard)) {
        setDraw(true);
        setTries(prev => prev + 1);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    };

    const handleRefreshClick = () => {
      setBoard(Array(9).fill(null));
      setCurrentPlayer(Math.random() < 0.5 ? 'X' : 'O');
      setWinner(null);
      setDraw(false);
    };

    const renderCases = () => {
      return board.map((value, index) => (
        <div
          key={index}
          className={`cases ${value === 'X' ? 'blue' : value === 'O' ? 'yellow' : ''}`}
          onClick={() => handleCaseClick(index)}
        >
          {value === "O" && <Circle />}
          {value === "X" && <Cross />}
        </div>
      ));
    };

    return (
      <div className="game-container">
        <div className="game-header">
          <p>Game</p>
          <img 
            src={iconRefresh} 
            alt="Icon Refresh Jeu" 
            className="game-icon" 
            onClick={handleRefreshClick}
          />
        </div>
        <div className="logs-container">
          <div className={`logs ${currentPlayer === 'X' ? 'blue-log' : 'yellow-log'}`}>
            {winner ? (
              <p>{`Le joueur ${winner} a gagné !`}</p>
            ) : draw ? (
              <p>Égalité !</p>
            ) : (
              <>
                <p>Au tour de :</p>
                <span>{currentPlayer}</span>
              </>
            )}
          </div>
        </div>
        <div className="game-board">
          <div className="board">{renderCases()}</div>
        </div>
        <div className="info-container">
          <div className="info-game">
            <span>Joueur 1</span><span>0</span>
          </div>
          <div className="info-game">
            <span>Essais</span><span>{tries}</span>
          </div>
          <div className="info-game">
            <span>Joueur 2</span><span>0</span>
          </div>
        </div>
      </div>
    );
  };

  export default Game;
