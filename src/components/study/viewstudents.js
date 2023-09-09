import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';

const TeacherViewStudents = () => {

    const [students, setStudents] = useState([
        {
            key: '1',
            name: 'John Doe',
            email: 'john.doe1@example.com',
            enrollmentDate: '2022-02-12',
        },
        {
            key: '2',
            name: 'Jane Smith',
            email: 'jane.smith2@example.com',
            enrollmentDate: '2021-11-05',
        },
        {
            key: '3',
            name: 'Emily Brown',
            email: 'emily.brown3@example.com',
            enrollmentDate: '2022-01-10',
        },
        {
            key: '4',
            name: 'William Johnson',
            email: 'william.johnson4@example.com',
            enrollmentDate: '2021-12-25',
        },
        {
            key: '5',
            name: 'Elizabeth Williams',
            email: 'elizabeth.williams5@example.com',
            enrollmentDate: '2022-03-05',
        },
        {
            key: '6',
            name: 'Michael Jones',
            email: 'michael.jones6@example.com',
            enrollmentDate: '2021-10-20',
        },    {
            key: '1',
            name: 'John Doe',
            email: 'john.doe1@example.com',
            enrollmentDate: '2022-02-12',
        },
        {
            key: '2',
            name: 'Jane Smith',
            email: 'jane.smith2@example.com',
            enrollmentDate: '2021-11-05',
        },
        {
            key: '3',
            name: 'Emily Brown',
            email: 'emily.brown3@example.com',
            enrollmentDate: '2022-01-10',
        },
        {
            key: '4',
            name: 'William Johnson',
            email: 'william.johnson4@example.com',
            enrollmentDate: '2021-12-25',
        },
        {
            key: '5',
            name: 'Elizabeth Williams',
            email: 'elizabeth.williams5@example.com',
            enrollmentDate: '2022-03-05',
        },
        {
            key: '6',
            name: 'Michael Jones',
            email: 'michael.jones6@example.com',
            enrollmentDate: '2021-10-20',
        },
    ]);

    // Columns for the Ant Design Table
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Enrollment Date',
            dataIndex: 'enrollmentDate',
            key: 'enrollmentDate',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    {/* Add buttons for actions like Edit, Delete, View Details etc. */}
                    <Button>Edit</Button>
                    <Button type="danger">Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <h1>View Students</h1>
            <Table dataSource={students} columns={columns} />
        </div>
    );
};

export default TeacherViewStudents;