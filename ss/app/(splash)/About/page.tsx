"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return(
        <motion.section id="about" className="text-center leading-8"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
            <div className="flex justify-center items-center mt-20">
              <img src="/newlogowhite.png" alt="SymphonicSlates Logo" className="object-cover h-16"/>
            </div>
            <h1 className="text-center text-8xl">See Sounds, Hear Colours</h1>
            <p className="text-2xl text-white font-inter font-medium mx-16">
        Many songs these days have a deep story that resonates with them through impeccable songwriters. This leaves
        us with a burning question: what does the music <i/>look and feel<i/> like? Meet SymphonicSlates, the platform
        that can create images of songs through generative AI. Many songs evoke emotions and imagery that go beyond just sound, 
        and SymphonicSlates brings that visual dimension to life. By harnessing the power of generative adversarial networks, it 
        transforms audio features into stunning, personalized artwork. Whether it's the rhythm, mood, or energy of a song, 
        SymphonicSlates captures the essence of music in vibrant, dynamic visuals.</p>
        </motion.section>
    )
}