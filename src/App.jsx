import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Profiles from "./pages/Profiles";
import Appoitments from "./pages/Appoitments";
import EmergencyDepartment from "./pages/EmergencyDepartment";
import AuthPage from "./pages/AuthPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="main">
          <Routes>
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/appointments" element={<Appoitments />} />
            <Route path="/" element={<EmergencyDepartment />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
