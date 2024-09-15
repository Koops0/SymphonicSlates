"""
This script gets the access token and refresh token for the Spotify API.
"""
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv
import os

load_dotenv()

# Set up your Spotipy client credentials and scope
sp_oauth = SpotifyOAuth(client_id=os.getenv('SPOTIPY_CLIENT_ID'),
                        client_secret=os.getenv('SPOTIPY_SECRET_ID'),
                        redirect_uri=os.getenv('SPOTIPY_REDIRECT_URI'))

token_info = sp_oauth.get_access_token()

print("Access Token:", token_info['access_token'])
print()
print("Refresh Token:", token_info['refresh_token'])
