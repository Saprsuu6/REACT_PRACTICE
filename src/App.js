import "./styles/App.css";
import "./styles/Variables.css";
import "react-loading-skeleton/dist/skeleton.css";
import MyNavigation from "./components/UI/Navigation/Naviagation";
import AppRoutes from "./components/AppRoutes";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="App">
      <SkeletonTheme
        baseColor="rgba(128, 128, 128, 0.514)"
        highlightColor="rgba(184, 184, 184, 0.514)"
      >
        <MyNavigation></MyNavigation>
        <AppRoutes></AppRoutes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
