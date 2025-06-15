import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from './shopowner/pages/ShopOwner';
import MyShop from './shopowner/pages/MyShop';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Contact />
              <Footer />
            
            </>
          }
        />
        <Route path="/home" element={<Home />} />

         <Route path="/shop" element={<Shop />} />
     <Route path="/myshop" element={<MyShop />} />

      
      </Routes>
    </Router>
  );
}

export default App;