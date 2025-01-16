import '../index.css';
import flecheimg from '../assets/fleche.png';
import human from '../assets/human.png';
import iconRobot from '../assets/robot.png';

const MainHome = () => {
  return (
    <>
    <div className='text-choose-main'>
          <p>Choisissez l'une des deux options que vous voulez puis faites jouer au jeu</p>
    </div>

    <div className="content-home-main">
      <div className="home-main-left">
        <div>
        </div>
        <div className="home-title">
          <p>Jouer contre votre ami</p>
          <img src={human} alt="Humain" />
        </div>
        <div className="home-info">
          <p>Explication du jeu numéro 1</p>
        </div>
        <div className="home-explication">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            ad itaque quisquam, omnis sed corrupti fuga dolores natus dolore
            officiis, cumque a. Quae inventore cum quasi autem earum totam
            itaque! Ullam consequatur consectetur quod fuga hic.
          </p>
        </div>
      </div>

      <div>
        <img src={flecheimg} alt="Flèche" />
      </div>

      <div className="home-main-right">
        <div className="home-title">
          <p>Jouer contre un bot</p>
          <img src={iconRobot} alt="Robot" />
        </div>
        <div className="home-info">
          <p>Explication du jeu numéro 2</p>
        </div>
        <div className="home-explication">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            ad itaque quisquam, omnis sed corrupti fuga dolores natus dolore
            officiis, cumque a. Quae inventore cum quasi autem earum totam
            itaque! Ullam consequatur consectetur quod fuga hic.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainHome;
