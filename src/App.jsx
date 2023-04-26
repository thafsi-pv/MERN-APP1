import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./Components/Counter";
import "./App.css";
import UserList from "./Components/UserList";
import Accordion from "./Components/Accordion";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Toggle from "./Components/Toggle"

function App() {
  const [viewComponent, setViewComponent] = useState("Counter");

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
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Form1")}
          >
            Form1
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Form2")}
          >
            Form2
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Toggle")}
          >
            Toggle
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
      {viewComponent == "Form1" && (
        <div>
          <Form1 />
        </div>
      )}
      {viewComponent == "Form2" && (
        <div>
          <Form2 />
        </div>
      )}
      {viewComponent == "Toggle" && (
        <div>
          <Toggle />
        </div>
      )}
    </>
  );
}

export default App;
