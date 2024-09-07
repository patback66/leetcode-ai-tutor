import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DifficultySelection from './components/DifficultySelection';
import ProblemDisplay from './components/ProblemDisplay';
import Solution from './components/Solution';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DifficultySelection />} />
        <Route path="/problem" element={<ProblemDisplay />} />
        <Route path="/solution" element={<Solution />} />
      </Routes>
    </Router>
  );
}

export default App;