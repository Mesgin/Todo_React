import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  textSubmit = (textInput) => {
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

  render() {
    let userList = this.state.todos.map((item) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id} >
          <input type="checkbox" onClick={() => { this.lineThrough(item.id) }} />
          <span className={(item.done) ? "done-style" : "undone-style"}>{item.text}</span>
          <button className="btn btn-danger" onClick={() => { this.removeTodo(item.id) }}>
            X
          </button>
        </li>
      )
    })
    return (
      <div className="container text-center">
        <h1>Your Todo List</h1>
        <Form textSubmit={this.textSubmit} />
        <div >
          <ul className="list-group" >
            {userList}
          </ul>
        </div>
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  textHandler = (event) => {
    let textInput = event.target.value
    this.setState({
      text: textInput
    })
  }

  enterKeyHandler = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.enterKeyHandler}>
        <input type="text" onKeyUp={(event) => { this.textHandler(event) }} />
        <button className="btn btn-warning" onClick={() => { this.props.textSubmit(this.state.text) }} type="button">add</button>
        <br />
      </form>
    );
  }
}

export default App;
