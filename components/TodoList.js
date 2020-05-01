import React, {useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';


const TodoList = () => {
    const {todos} = useContext(TodoContext)
    const {dispatch} = useContext(TodoContext)
    return todos.length ? (  
        <div className="todo-list">
            <ul>
                {todos.map(todo => <li key={todo.id} onClick={() => dispatch({type:'REMOVE_TODO', id:todo.id})}>{todo.task}</li>)}
            </ul>
        </div>
    ):(
        <h1>You have no tasks</h1>
    );
}

export default TodoList;