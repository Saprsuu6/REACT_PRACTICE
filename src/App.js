import "./styles/App.css";
import "./styles/Variables.css";
import "react-loading-skeleton/dist/skeleton.css";
import MyNavigation from "./components/UI/Navigation/Naviagation";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <div className="App">
      <MyNavigation></MyNavigation>
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
