import "./imageGen.css";
import { useState } from "react";

interface ImageGenProps {
  inputValue: string;
}

export default function ImageGen({ inputValue }: ImageGenProps) {
  const [prompt, setPrompt] = useState(
    "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))"
  );
  const [track_uri, setURI] = useState("");
  const [data, setData] = useState("");

  async function getImage() {
    try {
      const response = await fetch('/api/generateImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });

      console.log('Response: ', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPrompt(result.prompt);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <button onClick={getImage}>Generate Image</button>
      <p>{prompt}</p>
    </div>
  );
}