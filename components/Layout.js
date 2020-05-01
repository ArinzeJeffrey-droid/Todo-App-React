import React, {useContext} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { TodoContext } from '../contexts/TodoContext';


const Layout = () => {
    const {todos} = useContext(TodoContext)
    return todos.length ? (
        <div className="layout">
            <h1>You Have {todos.length} Uncompleted Tasks</h1>
            <TodoList/>
            <AddTodo/>
        </div>
    ):(
        <div className="layout">
            <TodoList/>
            <AddTodo/>
        </div>
    );
}

export default Layout;