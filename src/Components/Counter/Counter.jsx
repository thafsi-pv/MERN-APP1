import "./Counter.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = ({ count, onIncrement, onDecrement, counterDetails }) => {
  return (
    <div className="container">
      <div className="counter-container">
        <div className="viewcount">
          <p>{counterDetails}</p>
          <h1>Count {count}</h1>
        </div>
        <div className="btn">
          <button className="btnIncrement" onClick={onIncrement}>
            <FaPlus />
          </button>
          <button onClick={onDecrement}>
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
