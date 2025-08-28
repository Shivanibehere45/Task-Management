import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateTask, getTasks } from "../services/taskService";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchTask = async () => {
      const allTasks = await getTasks();
      const found = allTasks.find((t) => t._id === id);
      if (found) setTask(found);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    alert("✅ Task Updated Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        /><br /><br />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        /><br /><br />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
