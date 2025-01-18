import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Classement from './pages/Classement';
import Jeu from './pages/Jeu';
import NotFound from './pages/Notfound';
import { useState } from 'react';

function App() {
  const [isPlayButtonEnabled, setIsPlayButtonEnabled] = useState(false);
  const [choiceDetails, setChoiceDetails] = useState(null);

  const updateChoiceDetails = (selectedOption, playerOneName, playerTwoName, botName) => {
    setChoiceDetails(selectedOption);
    if (selectedOption === "human") {
      setIsPlayButtonEnabled(playerOneName.trim() !== "" && playerTwoName.trim() !== "");
    } else if (selectedOption === "bot") {
      setIsPlayButtonEnabled(botName.trim() !== "");
    } else {
      setIsPlayButtonEnabled(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Accueil setChoiceDetails={updateChoiceDetails} isPlayButtonEnabled={isPlayButtonEnabled} />}
        />
        <Route path="/classement" element={<Classement />} />
        <Route path="/jeu" element={<Jeu choiceDetails={choiceDetails} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
