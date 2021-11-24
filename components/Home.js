import React, { useState } from "react"
import moment from 'moment'

// components
import Header from "./Header"
import ListItems from "./ListItems"
import InputModal from "./InputModal"

const today = moment().format("MM/DD/YY")

const initialTodos = [
  {
    title: "Create repo",
    isDone: true,
    date: today,
    key: 1
  },
  {
    title: "mock up app",
    isDone: true,
    date: today,
    key: 2
  },
  {
    title: "style it",
    isDone: false,
    date: today,
    key: 3
  },
]

const Home = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [isModalOpen, setModalOpen] = useState(false)
  const [todoInputValue, setTodoInputValue] = useState('')
  const [todoToBeEdited, setTodoToBeEdited] = useState(null)

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    setModalOpen(false)
  }

  const handleClearTodos = () => {
    setTodos([])
    setModalOpen(false)
  }

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item)
    setModalOpen(true)
    setTodoInputValue(item.title)
  }

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key)
    newTodos.splice(todoIndex, 1, editedTodo)
    setTodos(newTodos)
    setTodoToBeEdited(null)
    setModalOpen(false)
  }

  const handleCheckTodo = (checkedTodo) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.key === checkedTodo.key)
    newTodos.splice(todoIndex, 1, {
      ...checkedTodo,
      isDone: !checkedTodo.isDone
    })
    setTodos(newTodos)
  }

  const handleDeleteTodo = () => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === todoToBeEdited.key)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
    setTodoInputValue('')
    setModalOpen(false)
  }

  return (
    <>
      <Header handleClearTodos={handleClearTodos}/>
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
        handleCheckTodo={handleCheckTodo}
      />
      <InputModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default Home;