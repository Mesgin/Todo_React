import React, { Component } from 'react'
import './App.css';
import Form from '../Form/Form.jsx'
import Todo from '../Todo/Todo.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  textSubmit = (textInput) => {
    if(!textInput) { 
      alert('You should enter a task')
    } else {
      let time = new Date()
      let newTodo = {
        text: textInput,
        done: false,
        id: time.getTime()
      }
      this.setState({
        todos: this.state.todos.concat(newTodo)
      })
    }
  }

  lineThrough = (id) => {
    this.state.todos.forEach((todo) => {
      if (todo.id === id) todo.done = !todo.done
    })
    this.setState({
      todos: this.state.todos
    })
  }

  removeTodo = (id) => {
    let updatedTodos = this.state.todos.filter((item) => {
      return item.id !== id
    })
    this.setState({
      todos: updatedTodos
    })
  }

  clearComplete = ()=>{ 
    let removedCompleted = this.state.todos.filter((todo)=>{
      return todo.done === false
    })
    this.setState({
      todos: removedCompleted
    })
  }

  render() {

    return (
      <div className="container text-center">
        <h1>Your Todo List</h1>
        <Form textSubmit={this.textSubmit} />
        <Todo todos={this.state.todos} lineThrough={this.lineThrough} removeTodo={this.removeTodo} clearComplete={this.clearComplete}/>
      </div>
    );
  }
}

export default App
