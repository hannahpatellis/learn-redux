import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy5 } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementBy5(5))}>+5</button>

      {isLogged ? <h3>Valuable info</h3> : ''}
    </div>
  );
}

export default App;
