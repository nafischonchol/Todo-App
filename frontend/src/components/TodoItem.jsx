'use client'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between border rounded px-4 py-2">
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 font-bold ml-4"
      >
        ×
      </button>
    </li>
  )
}
