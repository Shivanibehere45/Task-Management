import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>
    </div>
  );
};

export default TaskCard;
