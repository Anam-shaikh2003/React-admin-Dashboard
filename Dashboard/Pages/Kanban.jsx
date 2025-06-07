import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FaPlus } from 'react-icons/fa';

const columns = ["To Do", "In Progress", "Testing", "Done"];

const initialTasks = {
  "To Do": [],
  "In Progress": [],
  "Testing": [],
  "Done": [],
};

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [column, setColumn] = useState("To Do");

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const updated = {
      ...tasks,
      [column]: [...tasks[column], { id: uuid(), title: newTask }],
    };

    setTasks(updated);
    setNewTask("");
  };

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Kanban Dashboard</h1>

     
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
          className="border px-4 py-2 rounded-md w-64"
        />
        <select
          value={column}
          onChange={(e) => setColumn(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          {columns.map((col) => (
            <option key={col} value={col}>{col}</option>
          ))}
        </select>
        <button
          onClick={handleAddTask}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaPlus /> Add Task
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col} className="bg-white rounded-xl shadow-md p-4">
            <h2 className="text-xl font-semibold text-purple-600 mb-3 border-b pb-1">{col}</h2>
            <div className="space-y-2">
              {tasks[col].map((task) => (
                <div
                  key={task.id}
                  className="bg-purple-100 text-purple-800 p-2 rounded-md shadow-sm"
                >
                  {task.title}
                </div>
              ))}
              {tasks[col].length === 0 && (
                <p className="text-sm text-gray-400">No tasks</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
