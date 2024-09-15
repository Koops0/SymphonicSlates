"use client";

import React, { useState } from 'react';
//Convex Image
import { defineTable } from "convex/server";
import { v } from "convex/values";
import Image from "next/image";
import { motion } from "framer-motion";

const images = defineTable({
  imageUrl: v.string(),
  song_name: v.string(),
  song_author: v.string(),
  song_link: v.string(),
});

type VideoProps = {
  url: string;
  name: string;
  singer: string;
  link: string;
};

export default function Photo({
  url,
  name,
  singer,
  link,
}: VideoProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleImageClick = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      {isFullscreen ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <Image
            src={url}
            alt={name}
            layout="fill"
            objectFit="contain"
            onClick={handleImageClick}
          />
        </div>
      ) : (
        <motion.div>
          <Image
            src={url}
            alt={name}
            width={500}
            height={500}
            onClick={handleImageClick}
          />
          <h2>{name}</h2>
          <p>{singer}</p>
          <ul>
          </ul>
          <a href={link}>Learn more</a>
        </motion.div>
      )}
    </div>
  );
}