"""
This file contains the logistic regression mode that predicts mood based on  danceability, energy, 
and valence of a song given a Spotify URI.
"""
import spotipy
import spotipy.util as util
import numpy as np
import pickle
from spotipy.oauth2 import SpotifyOAuth
import os
import gradio as gr

"""NOTHING IS BROKEN SO DON'T TOUCH EVEN THOUGH IT IS INEFFICIENT AND HORRIBLE!!!!!!!!!!!!!"""
def getAudioFeatures(sp: spotipy.Spotify, trackURIs):
	features = []
	featuresTotal = []
	#max number of API calls
	max = 100
	for i in range(0, len(trackURIs), max):
		#get audio features of max tracks at once
		audioFeatures = sp.audio_features(trackURIs[i:i+max])
		#space time between API calls
		for j in range(len(audioFeatures)):
			if (audioFeatures != None):
				features.append(audioFeatures[j]['danceability'])
				features.append(audioFeatures[j]['energy'])
				features.append(audioFeatures[j]['valence'])
				featuresTotal.append(features)
			features = []
	return featuresTotal


def predict(track_URI):
    sp_oauth = SpotifyOAuth(client_id=os.getenv('SPOTIPY_CLIENT_ID'),
                              client_secret=os.getenv('SPOTIPY_SECRET_ID'),
                              redirect_uri=os.getenv('SPOTIPY_REDIRECT_URI'),
							  cache_path='.cache')
	
	# Handle token refresh if needed
    token_info = sp_oauth.get_cached_token()

    sp = spotipy.Spotify(auth=os.getenv('SPOTIPY_ACCESS_TOKEN'))

    # Load model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)

    features = getAudioFeatures(sp, [track_URI])
    featuresArray = np.asarray(features, dtype=np.float32)
    predictions = model.predict(featuresArray)

    return predictions[0]


demo = gr.Interface(fn=predict, inputs="text", outputs="text").launch(share=True)
"""
while True:
	track_URI = input("track URI: ")
	preds = predict(track_URI)    # https://open.spotify.com/user/21aui7jm3etwlhlyoby6k7r5a?si=9b7ff81dfd2b4a89
	print(preds)
"""