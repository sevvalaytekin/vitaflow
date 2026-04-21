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
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="main">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/" element={<EmergencyDepartment />} />
            </Route>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
