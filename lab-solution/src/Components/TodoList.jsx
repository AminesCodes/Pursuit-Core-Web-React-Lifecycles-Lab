import React from 'react';
import TodoItem from './TodoItem'

const todo = (props) => {
    const todoList = props.todos.map((element, index) => {
        return (
            <div key={element.id} className='todoItem'>
                <TodoItem 
                    text={element.task} 
                    target={index} 
                    completed={element.completed}
                    deleteBtn={props.deleteBtn}
                    updateText={props.updateText}
                    textDecoration={element.textDecoration}
                />
            </div>
        )
    })

    return (
        <div className='todoContainer'>
            {todoList}
        </div>
    )
}

export default todo;