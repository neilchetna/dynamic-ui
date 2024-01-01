from dotenv import load_dotenv
from os import getenv

# Refactor
load_dotenv(dotenv_path=".env.local")

open_api_key = getenv("OPEN_API_KEY")