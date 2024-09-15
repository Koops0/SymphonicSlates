"use client";
import React from "react";
import { motion } from "framer-motion";
import Photo from "./photo";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react"; // Importing Convex hook for querying
import { getImages } from "../../../convex/images"; // Importing the query function

export default function Gallery() {
  const images = useQuery(api.images.getImages); // Using the Convex hook to get the images

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <motion.section
      id="gallery"
      className="text-center leading-8 mt-8 mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className="text-left ml-8 text-6xl font-extrabold">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {images.map((photo, index) => (
          <React.Fragment key={index}>
            <Photo
              url={photo.imageUrl}
              name={photo.song_name}
              singer={photo.song_author}
              link={photo.song_link}
            />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}