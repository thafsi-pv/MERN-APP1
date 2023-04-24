import "./Counter.css";
import {FaPlus,FaMinus} from 'react-icons/fa'

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="container">
      <div className="countercontainer">
        <div className="viewcount">
          <h1>Count {count}</h1>
        </div>
        <div className="btn">
          <button className="btnIncrement" onClick={onIncrement}>
           <FaPlus/>
          </button>

          <button onClick={onDecrement}><FaMinus/></button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
