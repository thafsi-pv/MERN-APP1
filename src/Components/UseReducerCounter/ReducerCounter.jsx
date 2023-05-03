import { useReducer } from "react";
import Counter from "../Counter/Counter";

const counterReducer = (prev, action) => {
  if (action.type == "+") {
    return prev + action.payload;
  } else {
    return prev - action.payload;
  }
};

const ReducerCounter = () => {
  const [value, dispatcher] = useReducer(counterReducer, 0);

  return (
    <Counter
      count={value}
      counterDetails={"Counter working with useReducer hook"}
      onIncrement={() => dispatcher({ type: "+", payload: 1 })}
      onDecrement={() => dispatcher({type:'-',payload:1})}
    />
  );
};

export default ReducerCounter;
