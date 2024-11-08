import {FcDeleteDatabase} from "react-icons/fc"
import {remove} from "../redux/Slices/CartSlice"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


const CartItem = ({item}) => {
  const dispatch= useDispatch();

  function removefromCart(){
    toast.error("Item removed from Cart");
    dispatch(remove(item.id));
  }

  return <div className="flex w-full justify-between mb-5 mt-5">

    <div className="w-[25%]">
      <img src={item.image} alt="Pic" className="w-[200px]" />
    </div>

    <div className="flex flex-col justify-evenly w-[70%]">
      <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</h1>
      <h1 className="text-gray-400 text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>

      <div className="flex justify-between">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <FcDeleteDatabase onClick={removefromCart} className="w-[25px] h-[25px]"/>
      </div>

    </div>

  </div>;
};

export default CartItem;
