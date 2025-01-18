import '../index.css';
import iconGithub from '../assets/iconGithub.svg';
import iconTwitter from '../assets/iconTwitter.svg';
import iconYoutube from '../assets/iconYoutube.svg';
import iconInsta from '../assets/iconInsta.svg';

const MainFooter = () => {
  return (
    <footer className='content-footer'>
      <div className='info-footer'>
        <p>&copy; 2025 Tout droits réservé Wxrldd</p>
      </div>
      <div className='logo-footer'>
        <img src={iconGithub} alt="Flèche" />
        <img src={iconTwitter} alt="Flèche" />
        <img src={iconYoutube} alt="Flèche" />
        <img src={iconInsta} alt="Flèche" />
      </div>
    </footer>
  );
};

export default MainFooter;
