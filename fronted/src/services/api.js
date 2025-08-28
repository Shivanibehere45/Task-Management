// src/services/api.js
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Get all tasks
export const getTasks = () => API.get("/api/tasks");

// Create a new task
export const createTask = (taskData) => API.post("/api/tasks", taskData);