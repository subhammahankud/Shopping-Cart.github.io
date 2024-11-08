import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])

  return <div className=" flex justify-center pt-20">
    {
      cart.length>0?(
        <div className="flex w-6xl justify-between">

          <div className="w-[60%]">
            {
              cart.map((item)=>(
                <div>
                  <CartItem key={item.id} item={item} />
                  <div className="flex bg-black w-[100%] h-[2px]"></div>
                </div>
              ))
            }
          </div>

          <div className="w-[35%] flex flex-col justify-between">

            <div className="flex flex-col ml-14">
              <div className="w-fit text-xl mt-5">Your Cart</div>
              <div className="text-3xl mb-5 text-green-600" >Summary</div>
              <p className="text-s">Total Items : <span className="text-green-600 font-semibold">{cart.length}</span></p>
            </div>

            <div className="ml-14 mb-5">
              <div  className="text-green-600 font-semibold text-xl">Total Amount : ${totalAmount}</div>
              <button className="text-2xl w-full text-slate-900 bg-green-600 rounded-full hover:text-green-600 hover:bg-slate-900 transition-all duration-200 hover:scale-110 my-3">Checkout Now</button>
            </div>

          </div>
        </div>
      ):(
        <div className="flex flex-col justify-center items-center min-h-[80vh] mb-5">
          <div className="mb-5 text-xl">Your Cart is Empty</div>
          <NavLink to="/">
            <button className="bg-green-600 rounded-full w-32 text-xl">Shop Now</button>
          </NavLink>
        </div>
      )
    }
  </div>;
};

export default Cart;
