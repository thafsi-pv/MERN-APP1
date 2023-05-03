import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./Components/Counter/Counter";
import "./App.css";
import UserList from "./Components/UserList/UserList";
import Accordion from "./Components/Accordion/Accordion";
import Form1 from "./Components/Form/Form1";
import Form2 from "./Components/Form/Form2";
import Toggle from "./Components/Toggle/Toggle";
import Search from "./Components/Search/Search";
import { Todo } from "./Components/Todo/Todo";
import ContextCounter from "./Components/ContextApiCounter/ContextCounter";
import { CounterProvider } from "./context/CounterContext";
import ReducerCounter from "./Components/UseReducerCounter/ReducerCounter";
import ContextReducerCounter from "./Components/Context&ReducerCounter/ContextReducerCounter";
import { ReducerProvider } from "./context/ReducerContext";

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
          <div className="navitem" onClick={() => HandleViewComponent("Form1")}>
            Form1
          </div>
          <div className="navitem" onClick={() => HandleViewComponent("Form2")}>
            Form2
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Toggle")}
          >
            Toggle
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("Search")}
          >
            Search
          </div>
          <div className="navitem" onClick={() => HandleViewComponent("Todo")}>
            Todo App
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("ContextCounter")}
          >
            Context Api Counter
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("ReducerCounter")}
          >
            UseReducer Counter
          </div>
          <div
            className="navitem"
            onClick={() => HandleViewComponent("ContextReducerCounter")}
          >
            Context & Reducer Counter
          </div>
        </div>
      </div>
      {viewComponent == "Counter" && (
        <Counter
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counterDetails={'Counter using useState hook'}
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
      {viewComponent == "Search" && (
        <div>
          <Search />
        </div>
      )}
      {viewComponent == "Todo" && (
        <div>
          <Todo />
        </div>
      )}
      {viewComponent == "ContextCounter" && (
        <div>
          <CounterProvider>
            <ContextCounter />
          </CounterProvider>
        </div>
      )}
      {viewComponent == "ReducerCounter" && (
        <div>
          <ReducerCounter />
        </div>
      )}
      {viewComponent == "ContextReducerCounter" && (
        <div>
          <ReducerProvider>
            <ContextReducerCounter />
          </ReducerProvider>
        </div>
      )}
    </>
  );
}

export default App;
