import { useState } from 'react';

const TodoForm = ({ saveTodo }) => {
    const [isValue,setValue] = useState ('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        saveTodo(isValue);
        setValue('');
    }

    const handleChange = (e) => {
        
    }

    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input id="textInput" type='text' value={isValue} onChange={e => {setValue(e.target.value);}} />
                </form>        
        </div>
    );
} 
export default TodoForm;
