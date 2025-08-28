import axios from "axios";

const API_URL = "/api/tasks";  // ✅ proxy ke wajah se full URL likhne ki zarurat nahi

// Get all tasks
export const getTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add new task
export const addTask = async (task) => {
  const res = await axios.post(API_URL, task);
  return res.data;
};

// Update task
export const updateTask = async (id, updatedTask) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedTask);
  return res.data;
};

// Delete task
export const deleteTask = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};