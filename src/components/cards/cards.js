import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Divider, Input, List, Row, Typography} from 'antd';
import Title from "antd/es/skeleton/Title";

export function Cards(){
    const initialTasks = [
        { text: 'Buy groceries', completed: false },
        { text: 'Read a book', completed: true },
        { text: 'Exercise', completed: false },
        { text: 'Call mom', completed: false },
        { text: 'Water the plants', completed: true },
        { text: 'Clean the room', completed: false },
        { text: 'Finish coding project', completed: false },
        { text: 'Send emails', completed: true },
        { text: 'Cook dinner', completed: false },
        { text: 'Write journal', completed: true },
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const { Text,Title, Link } = Typography;


    // Load tasks from local storage on initial render
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Handler functions
    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, {text: newTask, completed: false}]);
        setNewTask('');
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const sortByName = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
        setTasks(sortedTasks);
    };

    const sortByCompletion = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
        setTasks(sortedTasks);
    };

    const sortByBoth = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return a.completed === b.completed ? a.text.localeCompare(b.text) : a.completed - b.completed;
        });
        setTasks(sortedTasks);
    };

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="App">
            <Title level={1}>Task List</Title>
            <Row gutter={16}>
                <Col span={18}>
                    <Input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="New task..."
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                addTask();
                            }
                        }}
                    />
                </Col>
                <Col span={6}>
                    <Button type="primary" onClick={addTask}>
                        Add
                    </Button>
                </Col>
            </Row>
            <Divider />
            <Button style={{ marginRight: '1rem' }} onClick={sortByName}>Sort by Name</Button>
            <Button style={{ marginRight: '1rem' }} onClick={sortByCompletion}>Sort by Completion</Button>
            <Button onClick={sortByBoth}>Sort by Both</Button>
            <Divider />
            <Input
                placeholder="Search for a task..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Divider />
            <List
                bordered
                dataSource={filteredTasks}
                renderItem={(task, index) => (
                    <List.Item style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: task.completed ? 'lightgray' : 'transparent'
                    }}>
                        <Text delete={task.completed}>
                            {task.text}
                        </Text>
                        <div className="button-container">
                            <Button style={{ marginLeft: '0.5rem' }} type="link" onClick={() => toggleCompletion(index)}>
                                {task.completed ? 'Undo' : 'Complete'}
                            </Button>
                            <Button style={{ marginLeft: '0.5rem' }} type="link" danger onClick={() => deleteTask(index)}>
                                Delete
                            </Button>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}
