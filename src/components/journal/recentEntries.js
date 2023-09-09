import React, { useState, useEffect } from 'react';
import {List, Card, Avatar, Typography, Button, Modal} from 'antd';

const { Title, Text } = Typography;

const RecentEntries = () => {

    const [visible, setVisible] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);

    const [entries, setEntries] = useState([
        {
            id: 1,
            bookTitle: 'Dune',
            author: 'Frank Herbert',
            date: '2023-05-12',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg',
            comments: 'An epic tale about politics and power. The book explores the complexities of governance, environmentalism, and human emotion.',
        },
        {
            id: 2,
            bookTitle: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            date: '2023-02-15',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/220px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg',
            comments: 'A gripping tale that explores themes of racial inequality and moral growth. It offers an insightful look into the prejudices that existed in the American South during the 1930s.',
        },
        {
            id: 3,
            bookTitle: '1984',
            author: 'George Orwell',
            date: '2023-06-10',
            thumbnail: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
            comments: 'A dystopian novel that delves into the dangers of totalitarianism and extreme political ideology. It provides a grim outlook on a society under complete surveillance.',
        },
        {
            id: 4,
            bookTitle: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            date: '2023-07-25',
            thumbnail: 'https://m.media-amazon.com/images/I/814ZhvhJ-bL._AC_UF1000,1000_QL80_.jpg',
            comments: 'The book is a deep dive into teenage rebellion and angst. It captures the complexities and vulnerabilities of adolescence while questioning the norms of society.',
        },
    ]);
    const showModal = (entry) => {
        setSelectedEntry(entry);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={1}>Recent Entries</Title>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}

                dataSource={entries}
                renderItem={(entry) => (
                    <List.Item onClick={() => showModal(entry)}>
                        <Card
                            hoverable
                            cover={<img alt={entry.bookTitle} src={entry.thumbnail} />}
                        >
                            <Card.Meta
                                avatar={<Avatar src={entry.thumbnail} />}
                                title={entry.bookTitle}
                                description={<Text>{entry.author}</Text>}
                            />
                            <Text>{entry.date}</Text>
                            <p>{entry.comments}</p>
                            <Button type="primary">
                                <div to={`/entry/${entry.id}`}>Read More</div>
                            </Button>
                        </Card>
                    </List.Item>
                )}
            />
            <Modal
                style={{minWidth: '90vw', display: 'flex', alignItems: 'center', justifyContent: 'center'}}

                title={selectedEntry?.bookTitle}
                visible={visible}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>
                ]}
            >
                <img src={selectedEntry?.thumbnail} alt={selectedEntry?.bookTitle} style={{ maxWidth: '40%', width: '100%', marginBottom: '20px', borderRadius: '2%' }} />
                <h3>Author: {selectedEntry?.author}</h3>
                <h3>Date: {selectedEntry?.date}</h3>
                <h3>Comments:</h3>
                <p>{selectedEntry?.comments}</p>

                {/* Add sections for Reviews, Notes, etc. here */}
            </Modal>
        </div>
    );
};

export default RecentEntries;