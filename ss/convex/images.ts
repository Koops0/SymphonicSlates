import { query } from "./_generated/server";

export const getImages = query(async ({ db }) => {
  const images = await db.query("images").order("desc").take(100);
  return images.map((image) => {
    const { imageUrl, song_name, song_author, song_link } = image;
    return { imageUrl, song_name, song_author, song_link };
  })});