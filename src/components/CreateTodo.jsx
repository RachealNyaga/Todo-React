import React, { useState } from 'react'

function CreateTodo(props) {
  let [newTodo, setNewTodo] = useState(
    {
      id: Math.round(Math.random() *1000000),
      title: "",
      description: "",
      priority: "",
      completed: false
    }
  )
  function setTitle(event) {
    setNewTodo({...newTodo, title: event.target.value})
  }
  function setDescription(event) {
    setNewTodo({...newTodo, description: event.target.value})
  }
  function setPriority(event) {
    setNewTodo({...newTodo, priority: event.target.value})
  }

  function createNew(event) {
    event.preventDefault() // prevent the form from submitting

    props.setTodos([...props.todos, newTodo])

    props.setShowCreateTodo(false); // close popup
  }

  function closePopup() {
    props.setShowCreateTodo(false); // close popup
  }
  return (
    <div className='create-todo'>
      <form onSubmit={createNew}>
        <label htmlFor="">Title</label>
        <input type="text" name="title" onInput={setTitle} />

        <label htmlFor="">Description</label>
        <textarea placeholder='Description' onInput={setDescription}></textarea>

        <p>Priority</p>
        <label>High</label>
        <input type="radio" name="priority" value="high" onChange={setPriority}/>
        
        <br/>

        <label>Medium</label>
        <input type="radio" name="priority" value="medium" onChange={setPriority}/>

        <br />

        <label>Low</label>
        <input type="radio" name="priority" value="low" onChange={setPriority}/>

        <br />

        <button className='btn btn-cancel' type='button' onClick={closePopup}>Cancel</button>
        <button className='btn btn-submit' type='submit' onClick={createNew}>Submit</button>
      </form>
    </div>
  )
}

export default CreateTodo