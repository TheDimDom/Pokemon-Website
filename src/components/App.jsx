import Header from "./Header";
import AllPokemon from "./AllPokemon";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllPokemon />} />
        <Route path="/Home" element={<AllPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
