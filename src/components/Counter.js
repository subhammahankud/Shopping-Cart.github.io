import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/Slices/counterSlice";


export function Counter(){
    const dispatch=useDispatch();
    const count = useSelector((state)=>state.counter.value);
    return (
        <div >
            <buttton onClick={()=>dispatch(increment())}>Increment</buttton>
            <div>{count}</div>
            <buttton onClick={()=>dispatch(decrement())}>Decrement</buttton>
        </div>
    )
}