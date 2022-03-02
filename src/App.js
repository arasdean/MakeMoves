import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/s/:id" element={<Form />} />
        <Route path="/a/:id" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
