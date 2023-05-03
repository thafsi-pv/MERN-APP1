import { createContext, useReducer } from "react";

export const CounterReducerContext = createContext();

const ReducerCounter = (prev, action) => {
  if (action.type == "+") {
    return prev + action.payload;
  } else {
    return prev - action.payload;
  }
};

export const ReducerProvider = (props) => {
  const [count, dispatcher] = useReducer(ReducerCounter, 0);
  return (
    <CounterReducerContext.Provider value={{ count, dispatcher }}>
      {props.children}
    </CounterReducerContext.Provider>
  );
};
