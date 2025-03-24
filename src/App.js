import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/HomePage';
import PhotographyPage from './pages/photographypage/PhotographyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/photography" element={<PhotographyPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
