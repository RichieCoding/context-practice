import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Header from './components/Header';

function App() {
  
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'> 
      <h1>Counter {counter}</h1>
      <h2>Products</h2>
      <h3>All products</h3>
      <h4>Increment</h4>
      <h4>Decrement</h4>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      <Header />
    </div>
  );
}

export default App;
