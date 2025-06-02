"use client";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0)
    return <p className="text-gray-500 text-center">No todos yet!</p>;

  return (
    <ul className="space-y-2 mb-10 ">
      {todos.map((todo) => (
        <li
          className="flex items-center justify-between border rounded px-4 py-2"
          key={todo.id}
        >
          <span
            className={`flex-1 ${
              todo.is_completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => onToggle(todo.id)}
          >
            {todo.title}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 font-bold ml-4"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
