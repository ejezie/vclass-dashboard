import "./app.scss";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Stack from "./pages/Stack";
import Room from "./pages/Room";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/room" element={<Room />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
