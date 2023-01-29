import "./styles/App.css";
import "./styles/Variables.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
