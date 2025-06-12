import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";  // your Home page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
