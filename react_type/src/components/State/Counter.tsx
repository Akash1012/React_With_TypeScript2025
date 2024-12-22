import { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

type ResetAction = {
  type: "RESET";
};

type actionType = UpdateAction | ResetAction;

function reducer(state: CounterState, action: actionType) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "INCREMENT", payload: 10 });
  const decrement = () => dispatch({ type: "DECREMENT", payload: 10 });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
