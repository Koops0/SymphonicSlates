"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <motion.section id="gallery" className="text-center leading-8 mt-8 mb-20"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
          <h1 className="text-left ml-8 text-6xl font-extrabold">Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          <div className="relative w-80 h-40 ml-8 mt-4">
            <img src="https://images.ctfassets.net/az3stxsro5h5/24L2UM6hV3m4csMvBzkHbj/9d4583541bdb29ae0c6a9ff2b60f1313/After.jpeg?w=2389&h=2986&q=50&fm=webp" alt="Song Image" className="rounded-lg w-full h-full object-cover" style={{ filter: 'blur(1px)' }} />
            <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold italic">Song Title</h2>
              <p className="text-lg">Artist</p>
            </div>
            </div>
          </div>
          </div>
        </motion.section>
    )
}