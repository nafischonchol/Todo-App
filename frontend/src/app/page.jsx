"use client";
import { useEffect, useState } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };


  const toggleTodo = (id,status) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: status } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 My Todo App</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </main>
  );
}
