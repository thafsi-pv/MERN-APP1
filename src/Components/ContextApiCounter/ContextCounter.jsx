import { useContext } from "react";
import "../ContextApiCounter/ContextCounter.css";
import { CounterContext } from "../../context/CounterContext";

const ContextCounter = () => {
  const counter = useContext(CounterContext);

  const AddCount = () => {
    counter.setCount((prev) => prev + 1);
  };

  const ReduceCount = () => {
    counter.setCount((prev) => prev - 1);
  };

  return (
    <div className="containter">
      <div className="containter-counter">
        <div>
          <div className="counter-val">Count {counter.count}</div>
          <div className="btn-group">
            <button onClick={AddCount}> +</button>
            <button onClick={ReduceCount}> -</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextCounter;
