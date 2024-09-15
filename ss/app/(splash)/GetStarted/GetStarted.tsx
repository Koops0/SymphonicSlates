'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, ReactNode } from "react";
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import imageGen from '@/components/imageGen';

export default function GetStarted() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    // Define the function to handle the send icon click
    imageGen(inputValue);
    console.log('Send icon clicked with input:', inputValue);
    // You can now use inputValue as needed
  };

  return (
    <div className="flex grow flex-col">
      <div className="flex flex-col justify-center items-center h-full">
      <img src="/newlogowhite.png" alt="SymphonicSlates Logo" className="object-scale-down h-64" />
        <h1 className="mb-8 mt-4 flex flex-col items-center gap-8 text-center text-4xl font-extrabold leading-none tracking-tight">
          See Sounds. Hear Colours.
        </h1>
        <div className="flex justify-center items-center h-full">
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          className="text-box-class bg-white text-black rounded-lg p-2 pr-10 flex-grow"
          placeholder="Enter text here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <FaPaperPlane
          className="absolute right-2 text-black cursor-pointer"
          size={24}
          onClick={handleSendClick}
        />
      </motion.div>
    </div>
        <div className="flex flex-col bg-muted/50 px-12 dark:bg-transparent">
          </div>
      </div>
      <div className="px-20 pb-20">
        <div className="container">
          <h2 className="mb-6 mt-6 text-center text-2xl font-bold">
            Most Recent Generated Images
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Resource title="Convex Docs" href="https://docs.convex.dev/home">
              Read comprehensive documentation for all Convex features.
            </Resource>
            <Resource title="Stack articles" href="https://stack.convex.dev/">
              Learn about best practices, use cases, and more from a growing
              collection of articles, videos, and walkthroughs.
            </Resource>
            <Resource title="Discord" href="https://www.convex.dev/community">
              Join our developer community to ask questions, trade tips &
              tricks, and show off your projects.
            </Resource>
            <Resource title="Search them all" href="https://search.convex.dev/">
              Get unblocked quickly by searching across the docs, Stack, and
              Discord chats.
            </Resource>
          </div>
        </div>
      </div>
    </div>
  );
};

function Resource({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <Button
      asChild
      variant="secondary"
      className="flex h-auto flex-col items-start justify-start gap-4 whitespace-normal p-4 font-normal"
    >
      <Link href={href}>
        <div className="text-sm font-bold">{title}</div>
        <div className="text-muted-foreground">{children}</div>
      </Link>
    </Button>
  );
}
