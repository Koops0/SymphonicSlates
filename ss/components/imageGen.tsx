import "./imageGen.css";
import React, { useState, useEffect } from "react";

export default function imageGen(text: string) {
  const [prompt, setPrompt] = useState(
    "ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))"
  );
  const [data, setData] = useState("");

  const API_KEY = process.env.STBL_DIFF_KEY;
  async function getImage() {
    const raw = JSON.stringify({
      key: API_KEY,
      prompt: prompt,
      negative_prompt: null,
      width: "512",
      height: "512",
      samples: "1",
      num_inference_steps: "20",
      safety_checker: "no",
      enhance_prompt: "yes",
      seed: null,
      guidance_scale: 7.5,
      multi_lingual: "no",
      panorama: "no",
      self_attention: "no",
      upscale: "no",
      embeddings_model: null,
      webhook: null,
      track_id: null,
    });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      ridirect: "follow",
    };

    fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.output[0]))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <img src={data} />
      <input
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter Prompt"
        type="text"
        name="prompt"
      />
      <button onClick={getImage}>Get Image</button>
    </div>
  );
}
