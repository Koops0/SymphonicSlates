# SymphonicSlates

## Inspiration
Music has the power to evoke deep emotions, and we wanted to translate that emotional depth into visual art. SymphonicSlates bridges the gap between auditory and visual experiences, offering users a unique never-before-seen way to see the music they love.

## What it does
SymphonicSlates takes any Spotify track and generates an image that captures its underlying emotional tone. It does this by analyzing the track’s hidden semantic meaning. Unlike anything currently available on the market, our product moves beyond basic audio analysis, offering a unique "Audio2Image" experience.

## How we built it
SymphonicSlates was trained on the Moodify dataset, which contains a 278 thousand dataset mapping data about tracks such as "Tempo", "Energy", "Livelyness" to 1 of four moods: Happy, Sad, Angry, and Relaxed. Finally, the extracted mood is then combined with other metrics to be fed into an image diffusion model. To streamline the data flow, Convex was used to create and deploy a robust back-end database, allowing us to store, query, and manage both the music features and image generation outputs efficiently.

## Challenges we ran into
One of our primary challenges was cleaning and normalizing the Moodify dataset, which had inconsistent ranges for musical features. After thorough research, we found a GitHub project that offered insights into solving these issues. Another major hurdle came during deployment. The Spotify API’s browser-based authentication caused complications when we tried to integrate our app into Hugging Face, which interacts with Convex. We had to implement creative workarounds to ensure seamless Spotify integration.

## Accomplishments that we're proud of
We’re proud of creating a truly unique solution, as no similar "Audio2Image" products currently exist on the market. A thorough search on Google revealed that SymphonicSlates stands out by translating audio tracks into visual art, filling a gap in both the music and visual tech space. In addition, we successfully integrated machine learning models, music feature extraction, and image generation into a cohesive system. Overcoming the challenges with the Spotify API and deploying the app on Hugging Face was also a major achievement for the team. Convex played a vital role in ensuring the project ran smoothly by managing data flow seamlessly.

## What we learned
Throughout this project, we learned the importance of flexibility when working with external APIs like Spotify. We also gained hands-on experience with Convex for back-end management, deepened our understanding of music feature extraction, and sharpened our skills in deploying machine learning models. Most importantly, we learned how to rapidly pivot and adjust to unexpected roadblocks, making us better prepared for future challenges.

## What's next for SymphonicSlates
We plan to expand SymphonicSlates by incorporating additional music genres and moods, further enhancing the model's ability to capture subtle nuances in audio. We're also exploring real-time audio-to-image generation and expanding our use of Convex for even more advanced data handling needs.
