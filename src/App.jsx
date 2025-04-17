import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cake-icecream" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
