"use client";
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const response = await fetch(`${baseUrl}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: text,
        }),
      });

      const newTodo = await response.json();
      onAdd(newTodo);
      setText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 border rounded px-3 py-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button className="bg-blue-500 text-white px-4 rounded">Add</button>
    </form>
  );
}
