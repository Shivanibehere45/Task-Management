import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";   //  path check karo
import TaskCard from "../components/taskcard";       //  path check karo

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();      //axios response
        setTasks(res.data);                // data extract
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task._id} task={task} />  
        ))
      )}
    </div>
  );
};

export default Tasks;