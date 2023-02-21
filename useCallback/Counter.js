import { useState,useCallback,useEffect } from "react";
import "./style.css";
const Counter = () => {

 const [count, setCount] = useState(0);
 
 const minCount = 0;
 const maxCount = 10;

const increment = useCallback((i) => {
       if(count < maxCount){
          setCount(count + i)
       }
       
},[count])
      

const decrement = useCallback((i) => {
       if(count > minCount){
          setCount(count - i)
       }
       
},[count]) 
    



    return (
        <div className="counter_form">
              <div className="count">Counter: {count}</div>
              <button onClick={increment} className="inc_but">increment</button>
              <button onClick={decrement} className="dec_but">decrement</button>
        </div>
    )
}
export default Counter;