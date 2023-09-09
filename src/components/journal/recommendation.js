import React, { useState } from 'react';
import {List, Card, Avatar, Typography, Button, Modal} from 'antd';

const { Title, Text } = Typography;

const Recommendations = () => {

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
        {
            id: 7,
            bookTitle: 'Pride and Prejudice',
            author: 'Jane Austen',
            date: '2023-09-01',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg',
            comments: 'A timeless romantic comedy about the manners and matrimonial machinations among the British landed gentry of the early 19th century.'
        },
        {
            id: 8,
            bookTitle: 'Moby-Dick',
            author: 'Herman Melville',
            date: '2023-09-15',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BYzg0MjFmMjAtMmNlMC00ZmEzLWE0ZDQtYTFhZjAyNzIxZWU3XkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_.jpg',
            comments: 'A complex and ambitious novel that explores complex themes of identity and purpose through the lens of an epic sea voyage.'
        },
        {
            id: 9,
            bookTitle: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            date: '2023-09-30',
            thumbnail: 'https://m.media-amazon.com/images/I/71xLmdLOQ0L._AC_UF1000,1000_QL80_.jpg',
            comments: 'A story of the decay of American dream, encapsulated through the life of Jay Gatsby.'
        },
        {
            id: 10,
            bookTitle: 'War and Peace',
            author: 'Leo Tolstoy',
            date: '2023-10-15',
            thumbnail: 'https://m.media-amazon.com/images/I/A1aDb5U5myL._AC_UF1000,1000_QL80_.jpg',
            comments: 'A monumental novel that captures the complexity of society and human nature during the Napoleonic Wars.'
        },
        {
            id: 11,
            bookTitle: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            date: '2023-11-01',
            thumbnail: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
            comments: 'An epic tale of friendship, love and heroism that set the standard for modern fantasy novels.'
        },
        {
            id: 12,
            bookTitle: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            date: '2023-11-15',
            thumbnail: 'https://cdn.kobo.com/book-images/bd3e52e8-349e-4ea2-abba-45b78a72ee66/1200/1200/False/the-picture-of-dorian-gray-393.jpg',
            comments: 'A gripping tale about moral duplicity and the complexities of human nature, framed around a supernatural premise.'
        },
        {
            id: 13,
            bookTitle: 'Brave New World',
            author: 'Aldous Huxley',
            date: '2023-12-01',
            thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg',
            comments: 'A thought-provoking dystopian novel that delves into themes of technological advancements, societal norms, and human behavior.'
        },
        {
            id: 14,
            bookTitle: 'Harry Potter and the Philosopher\'s Stone',
            author: 'J.K. Rowling',
            date: '2023-12-15',
            thumbnail: 'https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UF1000,1000_QL80_.jpg',
            comments: 'The start of the magical journey that introduces us to the Wizarding World, tackling themes of friendship, courage, and the battle between good and evil.'
        }
    ]);

    const [visible, setVisible] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const showModal = (recommendation) => {
        setSelectedEntry(recommendation);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <Title level={1}>Recommendations</Title>

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
                            cover={<img
                                alt={entry.bookTitle}
                                src={entry.thumbnail}
                                style={{
                                    objectFit: 'cover',
                                    height: '180px', // or any other size you want
                                    width: '100%'
                                }}
                            />}                        >
                            <Card.Meta
                                avatar={<Avatar src={entry.thumbnail} />}
                                title={entry.bookTitle}
                                description={<Text>{entry.author}</Text>}
                            />
                            <Text>{entry.date}</Text>
                            <p>{entry.comments}</p>
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

export default Recommendations;