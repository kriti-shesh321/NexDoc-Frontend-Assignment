import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Homepage from "./components/Homepage";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;