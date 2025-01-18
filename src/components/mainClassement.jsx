import "../index.css";
import human from '../assets/human.png';
import iconRobot from '../assets/robot.png';

const Classement = () => {
  return (
    <div className="classement-container">
      <div className="content-left-classement">
        <p>Classement contre un Joueur</p> <img src={human} alt="Image d'un joueur" />
          <ul>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le joueur <span>test</span></li>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le joueur <span>test</span></li>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le joueur <span>test</span></li>
          </ul>
      </div>
      <div className="content-right-classement">
      <p>Classement contre le bot </p><img src={iconRobot} alt="Image d'un bot" />
      <ul>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le bot</li>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le bot</li>
            <li>Le joueur <spann>test</spann> à gagné la partie contre le bot</li>
          </ul>
      </div>
    </div>
  );
};

export default Classement;
