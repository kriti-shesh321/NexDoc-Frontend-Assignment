import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";

function App() {

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
