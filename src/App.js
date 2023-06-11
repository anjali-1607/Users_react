import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:name" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
