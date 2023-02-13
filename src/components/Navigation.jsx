import React, { useState } from 'react'
import CreateTodo from './CreateTodo';

function Navigation(props) {
  function openCreateTodoPopup() {
    props.setShowCreateTodo(! props.showCreateTodo)
  }

  return (
    <>
    <nav>
        <button onClick={openCreateTodoPopup} className='btn'>Create Todo</button>
    </nav>
    </>
  )
}

export default Navigation