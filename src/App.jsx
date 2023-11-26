import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ErrorLogin } from "./components/ErrorLogin";
import { GamePage } from "./pages/GamePage";
import { ProfilePage } from "./pages/ProfilePage";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="/game/:userId" element={<GamePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="*" element={<ErrorLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
