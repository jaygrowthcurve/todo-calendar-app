import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TaskForm = ({ onSave, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [startTime, setStartTime] = useState(task ? task.startTime : '');
  const [endTime, setEndTime] = useState(task ? task.endTime : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, startTime, endTime });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" />
      <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Task Description" />
      <Input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      <Input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <Button type="submit">Save Task</Button>
    </Form>
  );
};

export default TaskForm;
