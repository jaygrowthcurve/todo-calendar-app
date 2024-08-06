import React, { useEffect, useContext } from 'react';
import { TaskProvider, TaskContext } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import ProjectForm from './components/ProjectForm';
import CalendarView from './components/CalendarView';

const App = () => {
  const { tasks, projects, fetchTasks, fetchProjects, addTask, addProject } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);

  return (
    <TaskProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#007bff' }}>To-Do Calendar App</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <TaskForm onSave={(task) => addTask(task)} />
          <ProjectForm onSave={(project) => addProject(project)} />
        </div>
        <CalendarView tasks={tasks} />
      </div>
    </TaskProvider>
  );
};

export default App;
