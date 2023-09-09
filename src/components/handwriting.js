import React, { useState } from 'react';
import axios from 'axios';
import Game from "./game";

 const Handwriting = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

    const uploadFile = async () => {
        //const file = e.target.files[0];
        // Assume you've uploaded this image and got a public URL for it
        // const imageUrl = URL.createObjectURL(file);

        const options = {
            method: 'POST',
            url: 'https://text-in-images-recognition.p.rapidapi.com/prod',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '37533eb2bdmsha0575afe0568564p1897adjsn25b884ee0778',
                'X-RapidAPI-Host': 'text-in-images-recognition.p.rapidapi.com'
            },
            data: {
                objectUrl: 'https://miro.medium.com/max/2400/1*T8LN_mDq8vNrD63IIIgzjQ.png'
            }
        };
            console.log(options)
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const extractedText = response.data; // Assuming the API returns plain text
            setText(extractedText);
        } catch (error) {
            console.error(error);
        }
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
        <div>
            <h1>Text Extraction App</h1>
            <input type="file" accept="image/*" onChange={uploadFile} />
            {text && (
                <>
                    <h3>Extracted Text:</h3>
                    <p>{text}</p>
                    <button onClick={downloadText}>Download Text</button>
                </>
            )}
        </div>
    );
};

export default Handwriting;
