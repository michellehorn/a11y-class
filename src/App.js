import Home from "./pages/Home";
import BadPage from "./pages/BadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.css";

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bad-page" element={<BadPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
