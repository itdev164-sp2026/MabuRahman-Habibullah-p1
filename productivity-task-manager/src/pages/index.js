import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TaskItem from "../components/TaskItem"
import GlobalStyle from "../styles/GlobalStyle"

const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
`

const Form = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 10px;
  margin-bottom: 25px;
`

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
`

const Button = styled.button`
  padding: 10px;
  background: #3498db;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`

const IndexPage = () => {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Work")
  const [dueDate, setDueDate] = useState("")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {

    if (!title) return

    const newTask = {
      id: Date.now(),
      title,
      category,
      dueDate,
      completed: false
    }

    setTasks([...tasks, newTask])

    setTitle("")
    setDueDate("")
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: true} : task
    ))
  }

  return (
    <>
      <GlobalStyle />

      <Container>

        <Title>Productivity Task Manager</Title>

        <Form>

          <Input
            placeholder="Enter task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Work</option>
            <option>Study</option>
            <option>Personal</option>
            <option>Health</option>
          </Select>

          <Input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <Button onClick={addTask}>
            Add
          </Button>

        </Form>

        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}

      </Container>
    </>
  )
}

export default IndexPage