import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import {FaShoppingCart} from "react-icons/fa"
import logo from "./clothes.png"
import { useSelector } from "react-redux";

const App = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>

      <div className="bg-lime-200 fixed left-0 right-0 z-10">
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            
          <NavLink to="/">
          <img src={logo} alt="img" className="w-[80px] mt-[-15px]"/>
          </NavLink>
            
          <div className="flex items-center font-medium mr-5 space-x-6">
            
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
              
            <NavLink to="/cart" className="relative">
              <div className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white">{cart.length}</div>
              <FaShoppingCart className="text-2xl"/>
            </NavLink>

          </div>

        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  );
};

export default App;
