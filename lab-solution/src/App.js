import React from 'react';
import './App.css';

import Form from './Components/Form'
import TodoList from './Components/TodoList';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class App extends React.PureComponent {
  state = {
    todoItem: '',
    allTodos: [],
    todoCounter: 0
  }

  handleSubmitForm = event => {
    event.preventDefault()
    if (this.state.todoItem) {
      const counter = this.state.todoCounter + 1;
      const todoList = [...this.state.allTodos]
      todoList.push({
        id: counter, 
        task: this.state.todoItem, 
        completed: false
      })
  
      this.setState({
          todoItem: '',
          allTodos: todoList,
          todoCounter: counter
      })
    }
  }

  handleInputField = event => {
    this.setState({todoItem: event.target.value})
  }

  handleRemoveItem = (index) => {
    const todoList = [...this.state.allTodos]
    todoList.splice(index, 1);

    this.setState({allTodos: todoList})
  }

  handleCompleteIncompleteItem = (index) => {
    const allItems = [...this.state.allTodos]
    allItems[index].completed = !allItems[index].completed;

    this.setState ({allTodos: allItems})
  }

  render() {
    return (
      <div className="App">
        <h1>React-Lifecycle-Methods-Lab</h1>
        <h2>TODO LIST</h2>
        <hr />

        <Form 
            handleSubmitForm={this.handleSubmitForm}
            handleInputField={this.handleInputField} 
            todoItem={this.state.todoItem}
            updateText={this.handle}
        />
        <hr />

        <TodoList 
            todos={this.state.allTodos} 
            deleteBtn={this.handleRemoveItem} 
            updateText={this.handleCompleteIncompleteItem}
        />
      </div>
    );
  }
}

export default App;
