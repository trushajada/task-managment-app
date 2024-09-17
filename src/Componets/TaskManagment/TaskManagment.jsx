import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function TaskManagement() {
  const [tasks, setTasks] = useState([]);  
  const [description, setDescription] = useState('');  
  const [category, setCategory] = useState(''); 
  const [isUpdating, setIsUpdating] = useState(false);  
  const [currentTaskId, setCurrentTaskId] = useState(null);  

  const createTask = () => {
    const newTask = {
      id: tasks.length + 1,  
      description,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);  
    setDescription('');  
    setCategory('');
  };

  const updateTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, description, category } : task
    );
    setTasks(updatedTasks);  
    setIsUpdating(false);
    setCurrentTaskId(null);
    setDescription('');  
    setCategory('');
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);  
  };

  const markTaskAsCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);  
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      updateTask(currentTaskId);  
    } else {
      createTask();  
    }
  };

  return (
    <div>
      <div className="container">
      <Row className="justify-content-center">

      <Col xs={12} md={12} lg={12}>
        <div className="box p-5 rounded shadow-lg">
      <h2 className='text-center mb-5 h3 text-light'>Task Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className='col-12 p-3 mb-4 rounded shadow-md'

        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className='col-12 p-3 mb-4 rounded shadow-md'

        />
        <button type="submit" className='mb-3'>{isUpdating ? 'Update Task' : 'Create Task'}</button>
      </form>

      <h3  className='text-center mb-5 h3 text-light'>All Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} [{task.category}] - {task.completed ? 'Completed' : 'Incomplete'}
            <button
              onClick={() => {
                setIsUpdating(true);
                setCurrentTaskId(task.id);
                setDescription(task.description);
                setCategory(task.category);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            {!task.completed && (
              <button onClick={() => markTaskAsCompleted(task.id)}>Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  
    </Col>
    </Row>
    </div>
            
    </div>
  );
}

export default TaskManagement;
