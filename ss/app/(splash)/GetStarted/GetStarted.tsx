'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, ReactNode } from "react";
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import imageGen from '@/components/imageGen';
import  handler  from '@/api/generateImage';
import ImageGen from "@/components/imageGen";

export default function GetStarted() {
  const [inputValue, setInputValue] = useState('');
  const [display, setDisplay] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = async () => {
    console.log('Send icon clicked with input:', inputValue);

    try {
      const response = await fetch('/api/generateImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPrompt(result.prompt);
      setDisplay(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex grow flex-col">
      <div className="flex flex-col justify-center items-center h-full mt-32">
      <img src="/newlogowhite.png" alt="SymphonicSlates Logo" className="object-scale-down h-64" />
        <h1 className="mb-8 mt-4 flex flex-col items-center gap-8 text-center text-4xl font-extrabold leading-none tracking-tight">
          See Sounds. Hear Colours.
        </h1>
        <div className="flex justify-center items-center h-full">
        <div className="relative flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <Button onClick={handleSendClick}>
          <FaPaperPlane />
        </Button>
        {display && <ImageGen inputValue={prompt} />}
      </motion.div>
      <div className="flex flex-col bg-muted/50 px-12 dark:bg-transparent"></div>
      <div className="px-20 pb-20">
        <div className="container"></div>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
}