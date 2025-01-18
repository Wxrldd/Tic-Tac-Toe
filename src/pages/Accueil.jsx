import ViewNav from "../components/nav";
import ViewMainHome from "../components/mainHome";
import ViewFooter from "../components/footer";

function Accueil({ setChoiceDetails, isPlayButtonEnabled }) {
  return (
    <>
      <ViewNav isPlayButtonEnabled={isPlayButtonEnabled}/>
      <ViewMainHome setChoiceDetails={setChoiceDetails}/>
      <ViewFooter />
    </>
  );
}

export default Accueil;
