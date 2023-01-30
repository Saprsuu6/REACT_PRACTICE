import "./styles/App.css";
import "./styles/Variables.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./components/pages/Posts";
import About from "./components/pages/About";
import MyNavigation from "./components/UI/Navigation/Naviagation";

function App() {
  return (
    <div className="App">
      <MyNavigation></MyNavigation>
      <Routes>
        <Route path="/home" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to='/home'></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
