import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [], projects: [] });

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    dispatch({ type: 'SET_TASKS', payload: response.data });
  };

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:5000/api/projects');
    dispatch({ type: 'SET_PROJECTS', payload: response.data });
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/api/tasks', task);
    dispatch({ type: 'ADD_TASK', payload: response.data });
  };

  const addProject = async (project) => {
    const response = await axios.post('http://localhost:5000/api/projects', project);
    dispatch({ type: 'ADD_PROJECT', payload: response.data });
  };

  return (
    <TaskContext.Provider value={{ ...state, fetchTasks, fetchProjects, addTask, addProject }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext };
