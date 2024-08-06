import React, { useState } from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

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

const ProjectForm = ({ onSave, project }) => {
  const [name, setName] = useState(project ? project.name : '');
  const [color, setColor] = useState(project ? project.color : '#007bff');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, color });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" />
      <SketchPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
      <Button type="submit">Save Project</Button>
    </Form>
  );
};

export default ProjectForm;
