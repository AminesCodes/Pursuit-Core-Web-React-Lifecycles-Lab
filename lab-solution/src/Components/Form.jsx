import React from 'react';

const Form = (props) => {
    return (
        <form className='todoForm' onSubmit={props.handleSubmitForm}>
            <input type='text' onChange={props.handleInputField} value={props.todoItem}/>
        </form>
    )
}

export default Form;