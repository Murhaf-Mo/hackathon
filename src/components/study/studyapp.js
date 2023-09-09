import React from 'react';
import { Tabs } from 'antd';
import TeacherViewStudents from "./viewstudents";

const onChange = (key) => {
    console.log(key);
};


const items = [
    {
        key: '1',
        label: 'View Students',
        children: <TeacherViewStudents />,
    },
    {
        key: '2',
        label: 'Recent Entries',
        children: 'Recent Entries',
    },
    {
        key: '3',
        label: 'Recommendations',
        children: 'Recommendations',
    },
    {
        key: '4',
        label: 'Admin Page',
        children: 'Admin page coming soon!',
    }

];
const StudyApp = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default StudyApp;