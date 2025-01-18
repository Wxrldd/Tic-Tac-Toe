import ViewNav from "../components/nav";
import ViewFooter from "../components/footer";
import ViewGame from "../components/game";
import ViewGameBot from "../components/gameBot";

function Jeu({ choiceDetails }) {
  return (
    <>
      <ViewNav />
      {choiceDetails === "human" ? <ViewGame /> : <ViewGameBot />}
      <ViewFooter />
    </>
  );
}

export default Jeu;
