import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setLoggedInStatus } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLoggedIn = useSelector(state => state.loggedInReducer)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>counter {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(setLoggedInStatus())}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default App;
