import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import MusicPlayer from "./components/MusicPlayer";
import MoonStars from "./components/MoonStars";
import FloatingDecor from "./components/FloatingDecor";
import Contact from "./pages/Contact";

import PasswordGate from "./pages/PasswordGate";
import Home from "./pages/Home";
import ChooseDate from "./pages/ChooseDate";
import Dec31 from "./pages/Dec31";
import Jan2 from "./pages/Jan2";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const musicRef = useRef(null);

  return (
    <BrowserRouter>
      {/* 🎵 MUSIC MUST BE MOUNTED FIRST */}
      <MusicPlayer ref={musicRef} />

      <div className="app-wrapper">
        {/* Background effects */}
        <MoonStars />
        <FloatingDecor />

        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="main-content">
          <Routes>

<Route path="/contact" element={<Contact />} />
            <Route
              path="/"
              element={<PasswordGate musicRef={musicRef} />}
            />

            <Route
              path="/home"
              element={<Home musicRef={musicRef} />}
            />

            <Route path="/choose-date" element={<ChooseDate />} />
            <Route path="/dec31" element={<Dec31 />} />
            <Route path="/jan2" element={<Jan2 />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
