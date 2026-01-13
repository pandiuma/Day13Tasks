import useCounter from "../hooks/useCounter";

 function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>1.useCounter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterDemo;