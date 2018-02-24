import React from 'react'

function Todo(props) {
    let userList = props.todos.map((item) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id} >
                <input type="checkbox" onClick={() => { props.lineThrough(item.id) }} />
                <span className={(item.done) ? "done-style" : "undone-style"}>{item.text}</span>
                <button className="btn btn-danger" onClick={() => { props.removeTodo(item.id) }}>X</button>
            </li>
        )
    })

    return (
        <div>
            <ul className="list-group" >
                {userList}
            </ul>
            <button className="btn btn-success" type="button" onClick={props.clearComplete}>Clear Completed Tasks</button>
        </div>
    )
}

export default Todo