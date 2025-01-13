import '../index.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <p>Ici il y aura l'image</p>
        </div>
        <div className="navbar-buttons">
          <button>Accueil</button>
          <button>Jouer au jeu</button>
          <button>Classement</button>
        </div>
        <div className="navbar-user-info">
          <p>Bienvenue,</p><span>User</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
