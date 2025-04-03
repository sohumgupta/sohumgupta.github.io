import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/HomePage';
import PhotographyPage from './pages/photographypage/PhotographyPage';
import PhotographySubPage from './pages/photographypage/PhotographySubPage';
import WritingPage from "./pages/writingpage/WritingPage";
import AboutPage from "./pages/aboutpage/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/photography" element={<PhotographyPage/>}/>
        <Route path="/photography/*" element={<PhotographySubPage/>}/>
        <Route path="/writing" element={<WritingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
