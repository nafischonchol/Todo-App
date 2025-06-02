'use client'
import { useState } from 'react'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default function Home() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 My Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  )
}
