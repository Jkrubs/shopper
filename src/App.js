import { Shop } from "./components/shop";
import { Navbar } from "./components/navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Cart } from "./components/cart";
import { Footer } from "./components/footer";
import { Shopcategory } from "./components/shopcategory";
import banner_men from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'
import { Productpage } from "./components/productpage";


function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/men" element={<Shopcategory banner={banner_men} category="men"/>}/>
      <Route path="/women" element={<Shopcategory banner={banner_women} category="women"/>}/>
      <Route path="/kids" element={<Shopcategory banner={banner_kids} category="kid"/>}/>
      <Route path="/product/:id" element={<Productpage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Shop/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
