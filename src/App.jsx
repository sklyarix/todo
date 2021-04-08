import { useState } from 'react';

import TodoForm from './commponents/TodoForm'
import ListBlock from './commponents/ListBlock'

import './App.scss';

const App = () => {
  const [isTodos,setTodos] = useState([])
  
  return ( 
    <div>
      <h1>Список Дел:</h1>
      <TodoForm saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if(trimmedText.length > 0) {
          setTodos([...isTodos, trimmedText]);
          console.log('isTodos = ',...isTodos)
        }
      }}/>
      <ListBlock isTodos={isTodos} deleteTodo={todoIndex => { const newTodos = isTodos .filter((_,index) => index!== todoIndex); setTodos(newTodos)}}/>

      
    </div>
  );
}

export default App;
