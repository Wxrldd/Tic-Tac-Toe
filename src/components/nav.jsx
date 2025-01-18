import '../index.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavBar = ({ isPlayButtonEnabled }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Flèche" />
        </div>
        <div className="navbar-buttons">
          <Link to="/"><button>Accueil</button></Link>
          <Link to={isPlayButtonEnabled ? "/jeu" : "#"}>
            <button disabled={!isPlayButtonEnabled}>Jouer au jeu</button>
          </Link>
          <Link to="/classement"><button>Classement</button></Link>
        </div>
        <div className="navbar-user-info">
          <p>Bienvenue,</p><span>User</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
