import React, { useState } from 'react';
import '../index.css';
import iconRefresh from '../assets/refresh.png';
import Circle from './circle';
import Cross from './cross';

const GameBot = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerSymbol, setPlayerSymbol] = useState('X');
  const [botSymbol, setBotSymbol] = useState('O');
  const [currentPlayer, setCurrentPlayer] = useState('X');
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
    [2, 4, 6],
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
    return newBoard.every((cell) => cell !== null);
  };

  const botMove = (newBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] === botSymbol &&
        newBoard[a] === newBoard[b] &&
        !newBoard[c]
      ) {
        return c;
      }
      if (
        newBoard[a] === botSymbol &&
        newBoard[a] === newBoard[c] &&
        !newBoard[b]
      ) {
        return b;
      }
      if (
        newBoard[b] === botSymbol &&
        newBoard[b] === newBoard[c] &&
        !newBoard[a]
      ) {
        return a;
      }
    }

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] === playerSymbol &&
        newBoard[a] === newBoard[b] &&
        !newBoard[c]
      ) {
        return c;
      }
      if (
        newBoard[a] === playerSymbol &&
        newBoard[a] === newBoard[c] &&
        !newBoard[b]
      ) {
        return b;
      }
      if (
        newBoard[b] === playerSymbol &&
        newBoard[b] === newBoard[c] &&
        !newBoard[a]
      ) {
        return a;
      }
    }

    const availableMoves = newBoard
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const handleCaseClick = (index) => {
    if (board[index] || winner || draw || currentPlayer !== playerSymbol) return;

    const newBoard = [...board];
    newBoard[index] = playerSymbol;

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setBoard(newBoard);
      return;
    }

    if (checkDraw(newBoard)) {
      setDraw(true);
      setTries((prev) => prev + 1);
      setBoard(newBoard);
      return;
    }

    setBoard(newBoard);
    setCurrentPlayer(botSymbol);

    setTimeout(() => {
      const botIndex = botMove(newBoard);
      const updatedBoard = [...newBoard];
      updatedBoard[botIndex] = botSymbol;

      const botWinner = checkWinner(updatedBoard);
      if (botWinner) {
        setWinner(botWinner);
        setBoard(updatedBoard);
        return;
      }

      if (checkDraw(updatedBoard)) {
        setDraw(true);
        setTries((prev) => prev + 1);
        setBoard(updatedBoard);
        return;
      }

      setBoard(updatedBoard);
      setCurrentPlayer(playerSymbol);
    }, 500);
  };

  const handleRefreshClick = () => {
    setBoard(Array(9).fill(null));
    setPlayerSymbol('X');
    setBotSymbol('O');
    setCurrentPlayer('X');
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
        {value === 'O' && <Circle />}
        {value === 'X' && <Cross />}
      </div>
    ));
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <p>GameBot</p>
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
              <span>{currentPlayer === playerSymbol ? 'Vous' : 'Bot'}</span>
            </>
          )}
        </div>
      </div>
      <div className="game-board">
        <div className="board">{renderCases()}</div>
      </div>
      <div className="info-container">
        <div className="info-game">
          <span>Joueur</span>
          <span>{playerSymbol}</span>
        </div>
        <div className="info-game">
          <span>Essais</span>
          <span>{tries}</span>
        </div>
        <div className="info-game">
          <span>Bot</span>
          <span>{botSymbol}</span>
        </div>
      </div>
    </div>
  );
};

export default GameBot;
