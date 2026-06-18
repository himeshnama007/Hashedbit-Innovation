import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task];

    updatedTasks.sort((a, b) => a.localeCompare(b));

    setTasks(updatedTasks);

    // Clear input field
    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;