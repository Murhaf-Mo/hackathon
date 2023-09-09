import React from 'react';
import { Typography, Card, Avatar, Row, Col, Tag } from 'antd';

const { Title, Paragraph } = Typography;

const AboutMe = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Title level={1}>About Me</Title>
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Avatar size={200} src="https://cdn.discordapp.com/attachments/1092531591038902343/1150067071871369266/madrona-rose-XDS2I9sB5Rk-unsplash.jpg" />
                        <Title level={3}>John Doe</Title>
                        <Paragraph>
                            Avid reader and software developer from New York.
                        </Paragraph>
                    </Card>
                </Col>
                <Col span={16}>
                    <Card>
                        <Title level={3}>My Reading Journey</Title>
                        <Paragraph>
                            I started reading at a young age and quickly fell in love with the world of fantasy.
                            Over the years, I've expanded my horizons to include genres like historical fiction, science fiction, and biographies.
                        </Paragraph>
                        <Title level={3}>My Reading preferences</Title>
                        <Paragraph>
                            I prefer to read physical books, but I also enjoy reading on my Kindle. I don't like audiobooks because I find them distracting.
                        </Paragraph>
                        <Title level={4}>Favorite Genres</Title>
                        <Tag color="blue">Fantasy</Tag>
                        <Tag color="green">Biographies</Tag>
                        <Tag color="gold">Science Fiction</Tag>
                        <Tag color="magenta">Historical Fiction</Tag>
                        <Title level={4}>Notable Reading Experiences</Title>
                        <Paragraph>
                            One of my most memorable reading experiences was when I read "To Kill a Mockingbird" for the first time. It changed my perspective on a lot of things.
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;