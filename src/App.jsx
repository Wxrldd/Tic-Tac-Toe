import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import Classement from './components/Classement';
import Jeu from './components/Jeu';
import NotFound from './components/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/games" element={<Jeu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;