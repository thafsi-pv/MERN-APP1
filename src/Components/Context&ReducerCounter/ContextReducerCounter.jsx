import { useContext } from "react";
import { CounterReducerContext } from "../../context/ReducerContext";
import Counter from "../Counter/Counter";

const ContextReducerCounter = () => {
  const context = useContext(CounterReducerContext);
  return (
    <Counter
      count={context.count}
      counterDetails={"Counter working with useReducer and useContext hook"}
      onIncrement={() => context.dispatcher({ type: "+", payload: 1 })}
      onDecrement={() => context.dispatcher({ type: "-", payload: 1 })}
    />
  );
};

export default ContextReducerCounter;
