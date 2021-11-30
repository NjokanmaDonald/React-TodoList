import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core'
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


function App() {

  const[todos, setTodos] = useState([]);
  const[input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })

  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>TODO LIST APP</h1>
      <form>
        <FormControl>
          <InputLabel>✔ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTodo}>Add Todo</Button>
        {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>
    <ul>
      {todos.map(todo => (
        <Todo todo={todo}/>
      ))}
      
    </ul>
    </div>
  );
}

export default App;
