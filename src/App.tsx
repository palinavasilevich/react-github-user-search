import { Routes, Route } from "react-router-dom";

import { Home, Favourites } from "./pages";
import { Navigation } from "./components";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
};

export default App;
