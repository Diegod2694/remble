import React, { useState } from "react"

// components
import Header from "./Header"
import ListItems from "./ListItems";

const initialTodos = [
  {
    title: "Create repo",
    date: "today",
    key: 1
  },
  {
    title: "mock up app",
    date: "today",
    key: 2
  },
  {
    title: "style it",
    date: "today",
    key: 3
  },
]

const Home = () => {
  const [todos, setTodos] = useState(initialTodos)
  return (
    <>
      <Header />
      <ListItems
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default Home;