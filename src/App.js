import AllCard from "./Card";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserForm from "./UserForm";
import Thanks from "./Thanks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllCard />} />
        <Route path="/add" element={<UserForm />} />
        <Route path="/form" element={<Thanks />} />
        <Route path="/thanks" element={<AllCard />} />
      </Routes>
    </Router>
  );
}

export default App;
