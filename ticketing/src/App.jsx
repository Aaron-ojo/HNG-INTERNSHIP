import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Ticketmanagement from "./pages/Ticketmanagement";

function App() {
  return (
    <div className="max-h-[1440px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Ticketmanagement" element={<Ticketmanagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
