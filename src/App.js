import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "./redux/counter";
import {addTodo, deleteTodo, completeTodo} from "./redux/todo";
import {loginSlice} from "./redux/login";
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const count = useSelector((state) => state.counter.value);
  const todoList = useSelector((state) => state.todo.value);

  const dispatch = useDispatch();

  const [name, setName] = useState('');

  // useEffect(() => {
  //   dispatch(loginSlice({username, password}))
  // }, [])

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginSlice({username, password}))
  }

  return (
    <div className="App">

      <form onSubmit={handleLogin}>
        <input type="text" placeholder='Username..' onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>REMOVE</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>ADD 2</button>


      <div>
        {todoList.map(item => (
          <div className='list' key={item.id}>
            <h5>{item.id}</h5>
            <h5 className={`${item.isDone ? 'done' : ''}`}>{item.name}</h5>
            <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
            <button onClick={() => dispatch(completeTodo(item.id))}>Complete</button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" placeholder='Torolist..' onChange={(e) => setName(e.target.value)} />
        <button onClick={() => dispatch(addTodo(name))}>Create Todo</button>
      </div>
    </div>
  );
}

export default App;
