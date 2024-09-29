import "./App.css";
import Home from "./Page/Home";
import Product from "./Page/Product";
import About from "./Page/About";
import ContactUs from "./Page/ContactUs";
import WishList from "./Page/WishList";
import AddToCard from "./Page/AddToCard";
import ProductsInfo from "./Page/ProductsInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
function App() {

  return (
  <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/WishList" element={<WishList />} />
            <Route path="/AddToCard" element={<AddToCard />} />
            <Route path="/:id" element={<ProductsInfo />} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
