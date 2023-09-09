import React, { useState } from 'react';
import axios from 'axios';
import Title from "antd/es/skeleton/Title";
import {Button, Card, Input, Skeleton} from "antd";

const Handwriting = () => {
    const [text, setText] = useState();
    const [loading, setLoading] = useState(false);

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'nqvwn5gw');

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/ddpbsrzc6/image/upload`,
                formData
            );
            return response.data.url;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const uploadFile = async (e) => {
        setLoading(true);  // Set loading to true at the beginning

        const file = e.target.files[0];
        const imageUrl = await uploadToCloudinary(file);

        if (imageUrl) {
            const options = {
                method: 'GET',
                url: 'https://ocrly-image-to-text.p.rapidapi.com/',
                params: {
                    imageurl: imageUrl,
                    filename: file.name,
                },
                headers: {
                    'X-RapidAPI-Key': '37533eb2bdmsha0575afe0568564p1897adjsn25b884ee0778',
                    'X-RapidAPI-Host': 'ocrly-image-to-text.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const extractedText = response.data;
                setText(extractedText);
            } catch (error) {
                console.error(error);
            }
        }
        setLoading(false);  // Set loading back to false at the end

    };

    const downloadText = () => {
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'extracted_text.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Write To Type</h1>
            <Title level={2}>Text Extraction App</Title>
            <Input type="file" accept="image/*" onChange={uploadFile} />

            <Card style={{ marginTop: '20px' }}>
                {/* Show skeleton when loading */}
                {loading ? (
                    <Skeleton active />
                ) : (
                    <>
                        <Title level={4}>Extracted Text:</Title>
                        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
                        {text && (
                            <Button type="primary" onClick={downloadText} style={{ marginTop: '20px' }}>
                                Download Text
                            </Button>
                        )}
                    </>
                )}
            </Card>
        </div>

    );
};

export default Handwriting;
