import React,{useContext, useState} from 'react';
import { TodoContext } from '../contexts/TodoContext';



const AddTodo = () => {
    const {dispatch} = useContext(TodoContext)
    const [task, setTask] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:"ADD_TODO", todo:{task}});
        setTask("")
    }
    return (
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Todo...." required/>
                <input type="submit" value="Add Todo"/>
            </form>
    );
}

export default AddTodo;