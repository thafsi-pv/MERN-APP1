import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import Counter from "../Counter/Counter";

const ContextCounter = () => {
  const counter = useContext(CounterContext);

  const AddCount = () => {
    counter.setCount((prev) => prev + 1);
  };

  const ReduceCount = () => {
    counter.setCount((prev) => prev - 1);
  };

  return (
    <Counter
      count={counter.count}
      counterDetails={"Counter working with useContext hook"}
      onIncrement={AddCount}
      onDecrement={ReduceCount}
    />
  );
};

export default ContextCounter;
