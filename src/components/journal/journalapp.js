import React from 'react';
import { Tabs } from 'antd';
import Aboutme from "./aboutme";
import RecentEntries from "./recentEntries";
import Recommendation from "./recommendation";
const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'About Me',
        children: <Aboutme />,
    },
    {
        key: '2',
        label: 'Recent Entries',
        children: <RecentEntries />,
    },
    {
        key: '3',
        label: 'Recommendations',
        children: <Recommendation />,
    },
    {
        key: '4',
        label: 'Admin Page',
        children: 'Admin page coming soon!',
    }

];
const JournalApp = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default JournalApp;