import "./App.css";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import PizzaDetails from "./views/PizzaDetails";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/mamma-mia" element={<HomePage />} />
        <Route path="/mamma-mia/pizza/:name" element={<PizzaDetails />} />
      </Routes>
    </>
  );
}

export default App;
