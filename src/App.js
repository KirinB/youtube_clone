import { useState } from "react";
import "./App.css";
// import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ShortPage from "./Pages/Shorts";
// import Navigation from "./component/Navigation";
// import NavigationHiden from "./component/NavigationHidden";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./component/Layout/Layout";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleNavigation={toggleNavigation} isOpen={isOpen} />}
      >
        <Route index element={<HomePage isOpen={isOpen} />} />
        <Route path="shorts" element={<ShortPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
