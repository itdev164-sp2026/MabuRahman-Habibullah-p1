import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h3`
  margin: 0;
  text-decoration: ${props => props.completed ? "line-through" : "none"};
`

const Category = styled.span`
  background: #eee;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
`

const Date = styled.p`
  font-size: 12px;
  color: #666;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.button`
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.color};
  color: white;
`

const TaskItem = ({ task, deleteTask, completeTask }) => {
  return (
    <Card>

      <Row>
        <Title completed={task.completed}>{task.title}</Title>
        <Category>{task.category}</Category>
      </Row>

      <Date>Due: {task.dueDate || "No date"}</Date>

      <ButtonGroup>
        <Button color="#27ae60" onClick={() => completeTask(task.id)}>
          Done
        </Button>

        <Button color="#e74c3c" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </ButtonGroup>

    </Card>
  )
}

export default TaskItem