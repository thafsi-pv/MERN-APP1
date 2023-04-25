import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./Components/Counter";
import "./App.css";
import UserList from "./Components/UserList";
import Accordion from "./Components/Accordion";

function App() {
  const [viewComponent, setViewComponent] = useState("Counter");
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ viewComponent:", viewComponent);

  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const HandleViewComponent = (com) => {
    setViewComponent(com);
  };

  return (
    <>
      <div>
        <div className="nav">
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Counter")}
          >
            Counter
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("UserList")}
          >
            UserList
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Accordion")}
          >
            Accordion
          </div>
        </div>
      </div>
      {viewComponent == "Counter" && (
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
      {viewComponent == "UserList" && (
        <div>
          <UserList />
        </div>
      )}
      {viewComponent == "Accordion" && (
        <div>
          <Accordion />
        </div>
      )}
    </>
  );
}

export default App;
