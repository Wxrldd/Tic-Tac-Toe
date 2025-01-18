import React, { useState } from 'react';
import '../index.css';
import flecheimg from '../assets/fleche.png';
import human from '../assets/human.png';
import iconRobot from '../assets/robot.png';

const MainHome = ({ setChoiceDetails }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');
  const [botName, setBotName] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    setChoiceDetails(option, '', '', '');
    setPlayerOneName('');
    setPlayerTwoName('');
    setBotName('');
  };

  const handleInputChange = (setter, value) => {
    setter(value);
    setChoiceDetails(
      selectedOption,
      selectedOption === 'human' ? playerOneName : '',
      selectedOption === 'human' ? playerTwoName : '',
      selectedOption === 'bot' ? botName : ''
    );
  };

  return (
    <>
      <div className="text-choose-main">
        <p>Choisissez l'une des deux options, remplissez vos pseudos puis faites jouer au jeu</p>
      </div>

      <div className="content-home-main">
        <div
          className={`home-main-left ${selectedOption === 'human' ? 'selected' : ''}`}
          onClick={() => handleSelect('human')}
        >
          <div className="home-title">
            <p>Jouer contre votre ami</p>
            <img src={human} alt="Humain" />
          </div>
          {selectedOption === 'human' && (
            <div className="input-fields">
              <div className="home-info">
                <p>Explication du jeu numéro 1</p>
              </div>
              <div className="home-explication">
                <p>
                  Cette option permet à deux amis de jouer ensemble. Chaque joueur
                  doit entrer son pseudo pour participer au jeu. Une fois les deux
                  noms saisis, commencez la partie !
                </p>
              </div>
              <label>
                Pseudo Joueur 1 :
                <input
                  type="text"
                  value={playerOneName}
                  onChange={(e) => handleInputChange(setPlayerOneName, e.target.value)}
                />
              </label>
              <label>
                Pseudo Joueur 2 :
                <input
                  type="text"
                  value={playerTwoName}
                  onChange={(e) => handleInputChange(setPlayerTwoName, e.target.value)}
                />
              </label>
            </div>
          )}
        </div>
        <div>
          <img src={flecheimg} alt="Flèche" />
        </div>
        <div
          className={`home-main-right ${selectedOption === 'bot' ? 'selected' : ''}`}
          onClick={() => handleSelect('bot')}
        >
          <div className="home-title">
            <p>Jouer contre un bot</p>
            <img src={iconRobot} alt="Robot" />
          </div>
          {selectedOption === 'bot' && (
            <div className="input-fields">
              <div className="home-info">
                <p>Explication du jeu numéro 2</p>
              </div>
              <div className="home-explication">
                <p>
                  Cette option vous permet de jouer contre une intelligence
                  artificielle. Entrez votre pseudo pour vous identifier, puis
                  commencez à défier le bot !
                </p>
              </div>
              <label>
                Pseudo Joueur :
                <input
                  type="text"
                  value={botName}
                  onChange={(e) => handleInputChange(setBotName, e.target.value)}
                />
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainHome;
