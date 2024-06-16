import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
