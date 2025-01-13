import '../index.css';
import flecheimg from '../assets/fleche.png';

const MainHome = () => {
  return (
    <div className='content-home-main'>
    <div className='home-main-left'>
      <div className='home-title'>
        <p>Option numéro 1</p>
      </div>
      <div className='home-info'>
        Explication du jeu numéro 1
      </div>
      <div className='home-explication'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad itaque quisquam, omnis sed corrupti fuga dolores natus dolore officiis, cumque a. Quae inventore cum quasi autem earum totam itaque!
        Ullam consequatur consectetur quod fuga hic. Incidunt maxime vitae corrupti totam quia ex natus perferendis sint eos qui reiciendis earum, dolores quos numquam porro iusto distinctio magnam aspernatur soluta odio!</p>
      </div>
    </div>

    <div>
      <img src={flecheimg} alt="Flèche" />
    </div>

    <div className='home-main-right'>
    <div className='home-title'>
        <p>Option numéro 2</p>
      </div>
      <div className='home-info'> 
        Explication du jeu numéro 1
      </div>
      <div className='home-explication'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ad itaque quisquam, omnis sed corrupti fuga dolores natus dolore officiis, cumque a. Quae inventore cum quasi autem earum totam itaque!
        Ullam consequatur consectetur quod fuga hic. Incidunt maxime vitae corrupti totam quia ex natus perferendis sint eos qui reiciendis earum, dolores quos numquam porro iusto distinctio magnam aspernatur soluta odio!</p>
      </div>
    </div>
    </div>
  );
};

export default MainHome;
