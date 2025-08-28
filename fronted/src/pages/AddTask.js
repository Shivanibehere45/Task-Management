import React, { useState } from "react";
import { addTask } from "../services/taskService";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({ title, description });
    setTitle("");
    setDescription("");
    alert("✅ Task Added Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br /><br />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
