Project Title: Productivity Task Manager
Student Name: Mabu Rahman Habibullah
Course: ITDEV-164 – Web Development
Project: Project 1

1. Project Description

The Productivity Task Manager is a web application that helps users organize and manage their daily tasks. The application allows users to create tasks, assign categories, set due dates, and track completion status. The goal of the app is to improve productivity by giving users a simple and visually organized interface to manage their responsibilities.

The application will be built using React with the Gatsby framework and styled using Styled Components to create a modern and responsive user interface. Tasks will be stored locally using Local Storage, which allows the tasks to remain saved even after refreshing the page.

This project demonstrates the use of React components, state management, styled components, and modern web development practices.

2. Feature List

The application will include the following features:

Add Task – Users can create a new task.

View Task List – Users can see all tasks displayed in a list.

Task Categories – Users can assign a category to each task.

Due Dates – Users can add a due date for each task.

Mark Task as Completed – Users can mark tasks as finished.

Delete Task – Users can remove tasks from the list.

Local Storage Support – Tasks remain saved after refreshing the page.

Modern User Interface – The application uses styled components for a clean and responsive design.

3. User Stories and Tasks
Feature 1: Add Task

User Stories

As a user, I want to add a new task so I can keep track of things I need to do.

As a user, I want to include task details such as category and due date.

Development Tasks

Create a task input form

Add fields for task title

Add category dropdown

Add due date input

Create function to add task to the task list

Clear input fields after task creation

Feature 2: View Task List

User Stories

As a user, I want to see all my tasks displayed so I can easily review my responsibilities.

Development Tasks

Create a task list component

Display task information including title, category, and due date

Render tasks dynamically using React components

Feature 3: Task Categories

User Stories

As a user, I want to categorize tasks (Work, Study, Personal, Health) so I can organize them better.

Development Tasks

Add category selection dropdown

Store category in the task object

Display category tag on each task card

Feature 4: Due Dates

User Stories

As a user, I want to set a due date for tasks so I can track deadlines.

Development Tasks

Add date input field

Store the due date with the task

Display due date in each task card

Feature 5: Mark Task as Completed

User Stories

As a user, I want to mark tasks as completed so I know which tasks are finished.

Development Tasks

Add "Done" button to task card

Update task completion status

Apply visual style (strikethrough) to completed tasks

Feature 6: Delete Task

User Stories

As a user, I want to delete tasks that I no longer need.

Development Tasks

Add delete button to each task

Remove selected task from the task list

Update the displayed task list

Feature 7: Local Storage

User Stories

As a user, I want my tasks to stay saved even after refreshing the page.

Development Tasks

Store tasks in browser local storage

Load tasks from local storage when the app starts

Update local storage when tasks change

Technologies Used

The following technologies will be used in the project:

React – for building user interface components

Gatsby – for creating the web application framework

Styled Components – for styling the application

JavaScript – for application logic

Local Storage – for saving task data in the browser