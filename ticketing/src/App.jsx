import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Ticketmanagement from "./pages/Ticketmanagement";

function App() {
  return (
    <div className="max-h-[1440px]">
      <HashRouter>
        <Routes>
          <Route path="/#/" element={<LandingPage />} />
          <Route path="/#/login" element={<Login />} />
          <Route path="/#/dashboard" element={<Dashboard />} />
          <Route path="/#/signup" element={<Signup />} />
          <Route path="/#/ticketmanagement" element={<Ticketmanagement />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
