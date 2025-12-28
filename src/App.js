import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoonStars from "./components/MoonStars";
import FloatingDecor from "./components/FloatingDecor";
import PasswordGate from "./pages/PasswordGate";
import Home from "./pages/Home";
import ChooseDate from "./pages/ChooseDate";
import Dec31 from "./pages/Dec31";
import Jan2 from "./pages/Jan2";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <MoonStars />
        <FloatingDecor />
        
        <FloatingDecor />
        <Header />

        <main className="main-content">
          <Routes>
            {/* PASSWORD PAGE AT ROOT */}
            <Route path="/" element={<PasswordGate />} />

            {/* MAIN CONTENT */}
            <Route path="/home" element={<Home />} />
            <Route path="/choose-date" element={<ChooseDate />} />
            <Route path="/dec31" element={<Dec31 />} />
            <Route path="/jan2" element={<Jan2 />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
