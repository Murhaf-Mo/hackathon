import React, {useEffect, useState} from 'react';
import {Button, Col, Divider, Input, List, Row, Select, Typography} from 'antd';
import Title from "antd/es/skeleton/Title";

export function Cards() {
    const initialTasks = [
        {
            text: 'Buy groceries',
            description: 'Need to buy milk for breakfast, bread for sandwiches, and cheese for dinner recipes.',
            completed: false,
            category: 'Home'
        },
        {
            text: 'Read a book',
            description: 'Finish reading "Dune" to prepare for upcoming book club discussion next week.',
            completed: true,
            category: 'Home'
        },
        {
            text: 'Exercise',
            description: 'Complete 30 minutes of jogging to maintain cardiovascular health. Consider adding 10 minutes of cool-down stretches.',
            completed: false,
            category: 'Home'
        },
        {
            text: 'Call mom',
            description: 'Give mom a call to ask how she is doing and if she needs anything. Also, update her about recent developments in life.',
            completed: false,
            category: 'Home'
        },
        {
            text: 'Water the plants',
            description: 'The indoor plants need watering every week. Make sure to check the soil moisture levels before watering.',
            completed: true,
            category: 'Home'
        },
        {
            text: 'Clean the room',
            description: 'Vacuum the carpet and dust the furniture. Make sure to clean under the bed and behind the cabinets.',
            completed: false,
            category: 'Home'
        },
        {
            text: 'Finish coding project',
            description: 'Finalize the React app by polishing the UI and fixing any remaining bugs. Push the changes to the Git repository.',
            completed: false,
            category: 'Work'
        },
        {
            text: 'Send emails',
            description: 'Send out weekly updates to the team about project status, and reply to any pending emails from clients or partners.',
            completed: false,
            category: 'Work'
        },
        {
            text: 'Cook dinner',
            description: 'Try out the new pasta recipe that includes a creamy Alfredo sauce and vegetables. Make sure to buy fresh ingredients.',
            completed: false,
            category: 'Home'
        },
        {
            text: 'Write journal',
            description: 'Summarize the day in the journal, including what was accomplished and what needs to be done tomorrow.',
            completed: false,
            category: 'School'
        }
    ];


    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [newCategory, setNewCategory] = useState('Home');  // New State
    const {Text, Title} = Typography;

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, {text: newTask, description: newDescription, category: newCategory, completed: false}]);
        setNewTask('');
        setNewDescription('');
    };

    const categories = ['Home', 'Work', 'School'];

    const deleteTask = (taskText) => {
        setTasks(tasks.filter(task => task.text !== taskText));
    };

    const toggleCompletion = (taskText) => {
        const newTasks = tasks.map((task) => {
            if (task.text === taskText) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
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
                <Col span={6}>
                    <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New task..."/>
                </Col>
                <Col span={8}>
                    <Input
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Task description..."
                    />
                </Col>
                <Col span={4}>
                    <Select
                        value={newCategory}
                        onChange={(value) => setNewCategory(value)}
                        style={{width: 120}}
                    >
                        {categories.map((cat) => (
                            <Select.Option key={cat} value={cat}>{cat}</Select.Option>
                        ))}
                    </Select>
                </Col>

                <Col span={4}>
                    <Button type="primary" onClick={addTask}>Add</Button>
                </Col>
            </Row>
            <Divider/>
            <Button style={{marginRight: '1rem'}} onClick={sortByName}>Sort by Name</Button>
            <Button style={{marginRight: '1rem'}} onClick={sortByCompletion}>Sort by Completion</Button>
            <Button onClick={sortByBoth}>Sort by Both</Button>
            <Divider/>
            <Input
                placeholder="Search for a task..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Divider/>
            {categories.map((category) => (
                <div key={category}>
                    <h2>{category} Tasks</h2>
                    <List
                        bordered
                        dataSource={tasks.filter(task => task.category === category)}
                        renderItem={(task, index) => (
                            <List.Item
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: task.completed ? 'lightgray' : 'transparent',
                                }}
                            >
                                <div style={{textAlign: "left"}}>
                                    <Text delete={task.completed}>{task.text}</Text>
                                    <div><small>{task.description}</small></div>
                                </div>
                                <div className="button-container">
                                    <Button style={{marginLeft: '0.5rem'}} type="link"
                                            onClick={() => toggleCompletion(task.text)}>
                                        {task.completed ? 'Undo' : 'Complete'}
                                    </Button>
                                    <Button style={{marginLeft: '0.5rem'}} type="link" danger
                                            onClick={() => deleteTask(task.text)}>
                                        Delete
                                    </Button>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            ))}
        </div>
    );
}
