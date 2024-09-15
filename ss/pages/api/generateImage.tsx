import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@gradio/client';

const API_KEY = process.env.STBL_DIF_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { inputValue } = req.body;

    try {
      const client = await Client.connect("LoMein123/HTN2024");
      const result = await client.predict("/predict", {
        track_URI: inputValue,
      });

      console.log('Result: ', result);
      const prompt = (result.data as any)[0];
      res.status(200).json({ prompt });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate image' });
      console.error(error);
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}