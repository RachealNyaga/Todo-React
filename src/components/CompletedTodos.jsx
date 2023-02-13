function CompletedTodos(props) { // receive todos and setTodos as props
    function editTodo() {
        alert("This task has already been completed. You cannot edit it."); // don't allow editing completed tasks
    }

    function deleteTodo(todoId) {
        props.setTodos(props.todos.filter((todo) => todo.id !== todoId))
    }
  return (
    <>
        <h2>Completed tasks</h2>

        <div className='todos-'>
        {props.todos.map(function(todo) {
            if(todo.completed) { // check if todo is 'completed'
                
                return (
                    <div className='todo' key={todo.id}>
                        <h5>{todo.title}</h5>
                        <p>{todo.description}</p>
                        <small className={todo.priority}>Priority: {todo.priority}</small>
                        <br />
                        {/* <button onClick={editTodo} className='btn edit-btn'>Edit</button> */}
                        <button onClick={() => deleteTodo(todo.id)} className='btn delete-btn'>Delete</button>
                    </div>
                )

            }
        })}
        </div>

    </>
  )
}

export default CompletedTodos