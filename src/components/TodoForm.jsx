'use client'
import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

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
  )
}
