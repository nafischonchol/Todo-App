"use client";

export default function TodoList({ todos, onToggle, onDelete }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/todos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(id); // Update the UI by calling parent's onDelete
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleToggle = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/todos/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const status = await response.json();
        console.log(status);
        onToggle(id,status); 
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

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
            onClick={() => handleToggle(todo.id)}
          >
            {todo.title}
          </span>
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-red-500 font-bold ml-4"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
