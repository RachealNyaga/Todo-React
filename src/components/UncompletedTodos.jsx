import React from 'react'

function UncompletedTodos(props) {

    function completeTodo(todoId) {
        let newTodos = []; // new todos array
        props.todos.forEach(function(todo) { // loop through our exisiting todos
            if(todo.id === todoId) todo.completed = true // check if it's completed and then change the value of completed
            newTodos.push(todo) // push the todo to the newTodos array
        })
        props.setTodos(newTodos) // set old todos equal to newTodos
    }
    
    function deleteTodo(todoId) {
        props.setTodos(props.todos.filter((todo) => todo.id !== todoId))
    }
  return (
    <>
        <h2>Uncompleted tasks</h2>

        <div className='todos-grid'>
        {props.todos.map(function(todo) {
            if(! todo.completed) { // check if todo is 'not completed' ie completed: false
                
                return (
                    <div className='todo' key={todo.id}>
                        <h5>{todo.title}</h5>
                        <p>{todo.description}</p>
                        <small className={todo.priority}>Priority: {todo.priority}</small>{/**Add a class to the priority to target in the CSS */}

                        <br />
                        <button onClick={() => completeTodo(todo.id)} className='btn complete-btn'>Complete</button>
                        {/* <button onClick={() => editTodo(todo.id)} className='btn edit-btn'>Edit</button> */}
                        <button onClick={() => deleteTodo(todo.id)} className='btn delete-btn'>Delete</button>
                    </div>
                )

            }
        })}
        </div>

    </>
  )
}

export default UncompletedTodos